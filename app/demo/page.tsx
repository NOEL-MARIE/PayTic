"use client"
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion"; // Importation de Framer Motion

export default function DemoPage() {
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
          <h1 className="text-3xl font-bold tracking-tight mb-2">Demander une démo</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Découvrez comment notre plateforme peut transformer votre entreprise avec une démonstration personnalisée
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, x: -100 }} // Animation de départ (caché à gauche)
          whileInView={{ opacity: 1, x: 0 }} // Animation de glissement et apparition
          viewport={{ once: true }} // Déclencher une seule fois
          transition={{ duration: 0.5, delay: 0.2 }} // Durée et retard
        >
          <motion.div
            className="p-6 border rounded-lg"
            initial={{ opacity: 0, y: 50 }} // Animation de départ (légère montée)
            whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
            viewport={{ once: true }} // Déclencher une seule fois
            transition={{ duration: 0.5, delay: 0.4 }} // Durée et retard
          >
            <h2 className="text-lg font-semibold mb-2">Pourquoi demander une démo ?</h2>
            <ul className="space-y-4">
              <li className="flex">
                <CheckIcon className="h-5 w-5 text-btnbg-btn_col shrink-0 mr-2" />
                <div>
                  <h3 className="font-medium">Solution personnalisée</h3>
                  <p className="text-gray-500">
                    Découvrez comment notre plateforme s'adapte à vos besoins spécifiques.
                  </p>
                </div>
              </li>
              <li className="flex">
                <CheckIcon className="h-5 w-5 text-btnbg-btn_col shrink-0 mr-2" />
                <div>
                  <h3 className="font-medium">Expertise dédiée</h3>
                  <p className="text-gray-500">
                    Bénéficiez des conseils de nos experts pour maximiser votre utilisation.
                  </p>
                </div>
              </li>
              <li className="flex">
                <CheckIcon className="h-5 w-5 text-btnbg-btn_col shrink-0 mr-2" />
                <div>
                  <h3 className="font-medium">Questions spécifiques</h3>
                  <p className="text-gray-500">
                    Posez toutes vos questions et obtenez des réponses précises.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="p-6 border rounded-lg"
            initial={{ opacity: 0, y: 50 }} // Animation de départ (légère montée)
            whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
            viewport={{ once: true }} // Déclencher une seule fois
            transition={{ duration: 0.5, delay: 0.6 }} // Durée et retard
          >
            <h2 className="text-lg font-semibold mb-2">Ce que disent nos clients</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-btnbg-btn_col pl-4 italic">
                "La démo personnalisée nous a permis de comprendre comment la plateforme pouvait s'adapter à nos processus spécifiques. Un vrai gain de temps !"
                <footer className="text-sm text-gray-500 mt-2">
                  — Marie Dupont, Directrice Marketing chez TechCorp
                </footer>
              </blockquote>
              <blockquote className="border-l-4 border-btnbg-btn_col pl-4 italic">
                "L'expert qui a réalisé notre démo a su répondre à toutes nos questions techniques. Nous avons pu prendre une décision éclairée rapidement."
                <footer className="text-sm text-gray-500 mt-2">
                  — Jean Martin, CTO chez InnovSolutions
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 bg-gray-100 rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 50 }} // Animation de départ (légère montée)
          whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
          viewport={{ once: true }} // Déclencher une seule fois
          transition={{ duration: 0.5, delay: 0.8 }} // Durée et retard
        >
          <h2 className="text-2xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
            Si vous préférez commencer immédiatement, vous pouvez créer un compte et explorer notre plateforme par vous-même.
          </p>
          <Link href="/get-started">
            <p className="px-6 py-3 bg-btn_col hover:bg-blue-400  text-white rounded-lg font-medium text-lg">Commencer maintenant</p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
