"use client";
import Link from "next/link";
import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion"; // Importation de Framer Motion

export default function ServicesPage() {
  const services = [
    {
      title: "Analyse de données",
      description: "Transformez vos données brutes en insights actionnables",
      features: [
        "Tableaux de bord personnalisés",
        "Analyse prédictive",
        "Rapports automatisés",
        "Intégration multi-sources",
      ],
      popular: true,
    },
    {
      title: "Automatisation des processus",
      description:
        "Optimisez vos flux de travail et éliminez les tâches répétitives",
      features: [
        "Workflows personnalisables",
        "Intégration avec vos outils existants",
        "Alertes et notifications",
        "Suivi des performances",
      ],
      popular: false,
    },
    {
      title: "Gestion de la relation client",
      description: "Centralisez et optimisez vos interactions clients",
      features: [
        "Profils clients unifiés",
        "Historique des interactions",
        "Segmentation avancée",
        "Campagnes personnalisées",
      ],
      popular: false,
    },
    {
      title: "Solutions de paiement",
      description: "Sécurisez et simplifiez vos transactions financières",
      features: [
        "Paiements multi-devises",
        "Abonnements récurrents",
        "Tableau de bord financier",
        "Rapports de transactions",
      ],
      popular: false,
    },
    {
      title: "Intégration API",
      description: "Connectez vos systèmes existants à notre plateforme",
      features: [
        "API RESTful complète",
        "Documentation détaillée",
        "Support d'intégration",
        "Webhooks personnalisables",
      ],
      popular: false,
    },
    {
      title: "Sécurité et conformité",
      description: "Protégez vos données et respectez les réglementations",
      features: [
        "Conformité RGPD",
        "Chiffrement de bout en bout",
        "Authentification multi-facteurs",
        "Audits de sécurité réguliers",
      ],
      popular: false,
    },
  ];

  return (
    <div className="py-11 max-w-6xl mx-auto w-full px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }} // Animation de départ (légère montée)
        whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
        viewport={{ once: true }} // Déclencher une seule fois
        transition={{ duration: 0.5 }} // Durée de la transition
      >
        <h1 className="text-3xl font-bold tracking-tight mb-2">Nos services</h1>
        <p className="text-gray-600  ">
          Découvrez notre gamme complète de services conçus pour répondre aux
          besoins spécifiques de votre entreprise
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, x: -100 }} // Animation de départ (caché à gauche)
        whileInView={{ opacity: 1, x: 0 }} // Animation de glissement et apparition
        viewport={{ once: true }} // Déclencher une seule fois
        transition={{ duration: 0.5, delay: 0.2 }} // Durée et retard
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`border p-6 rounded-lg shadow-sm text-center ${
              service.popular ? "border-btnbg-btn_col" : "border-gray-200"
            }`}
            initial={{ opacity: 0, y: 50 }} // Animation de départ (légère montée)
            whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
            viewport={{ once: true }} // Déclencher une seule fois
            transition={{ duration: 0.5, delay: index * 0.1 }} // Durée et retard
          >
            {service.popular && (
              <span className="bg-btn_col text-white px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                Populaire
              </span>
            )}
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2 items-center flex flex-col md:items-start ">
              {service.features.map((feature, i) => (
                <li key={i} className="  flex items-start">
                  <CheckIcon className="h-5 w-5 text-btnbg-btn_col shrink-0 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link
                href="/contact"
                className="block bg-btn_col text-white text-center py-2 px-4 rounded-lg hover:bg-blue-400"
              >
                En savoir plus
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 bg-gray-100 rounded-lg p-8 text-center"
        initial={{ opacity: 0, y: 50 }} // Animation de départ (légère montée)
        whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
        viewport={{ once: true }} // Déclencher une seule fois
        transition={{ duration: 0.5, delay: 0.6 }} // Durée et retard
      >
        <h2 className="text-2xl font-bold mb-4">
          Vous ne trouvez pas ce que vous cherchez ?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Nous proposons également des solutions sur mesure adaptées aux besoins
          spécifiques de votre entreprise. Contactez-nous pour discuter de vos
          exigences particulières.
        </p>
        <Link
          href="/contact"
          className="bg-btn_col text-white text-lg py-3 px-6 rounded-lg hover:bg-blue-400"
        >
          Contactez-nous
        </Link>
      </motion.div>
    </div>
  );
}
