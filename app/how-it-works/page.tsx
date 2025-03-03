"use client";
import Link from "next/link";
import { motion } from "framer-motion"; // Importation de Framer Motion

export default function HowItWorksPage() {
  return (
    <div className="max-w-6xl mx-auto w-full px-4 py-12">
      <div className="">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }} // Animation de départ (légère montée)
          whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
          viewport={{ once: true }} // Déclencher une seule fois
          transition={{ duration: 0.5 }} // Durée de la transition
        >
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Comment ça marche ?
          </h1>
          <p className="text-gray-500 max-w-2xl ">
            Découvrez comment notre plateforme peut transformer votre entreprise
            en quelques étapes simples
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, x: -100 }} // Animation de départ (caché à gauche)
          whileInView={{ opacity: 1, x: 0 }} // Animation de glissement et apparition
          viewport={{ once: true }} // Déclencher une seule fois
          transition={{ duration: 0.5, delay: 0.2 }} // Durée et retard
        >
          {[
            "Créez votre compte",
            "Configurez votre espace",
            "Exploitez nos services",
            "Suivez vos résultats",
          ].map((title, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }} // Animation de départ (légère montée)
              whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
              viewport={{ once: true }} // Déclencher une seule fois
              transition={{ duration: 0.5, delay: index * 0.1 }} // Durée et retard
            >
              <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                <h2 className="text-2xl font-bold mb-4">
                  {index + 1}. {title}
                </h2>
                <p className="text-gray-500 mb-4">
                  Description générique de cette étape expliquant son importance
                  et ses avantages.
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-500">
                  <li>Point clé 1</li>
                  <li>Point clé 2</li>
                  <li>Point clé 3</li>
                </ul>
              </div>
              <div
                className={`p-6 bg-gray-100 rounded-md flex items-center justify-center ${
                  index % 2 !== 0 ? "md:order-1" : ""
                }`}
              >
                <span className="text-gray-500">Illustration: {title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }} // Animation de départ (légère montée)
          whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
          viewport={{ once: true }} // Déclencher une seule fois
          transition={{ duration: 0.5, delay: 0.6 }} // Durée et retard
        >
          <h2 className="text-2xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
            Rejoignez les milliers d'entreprises qui ont déjà transformé leur
            façon de travailler grâce à notre plateforme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-400 text-white rounded-lg text-lg"
            >
              Commencer maintenant
            </Link>
            <Link
              href="/demo"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg text-lg"
            >
              Demander une démo
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
