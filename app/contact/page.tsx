"use client"
import { FC } from 'react';
import { motion } from "framer-motion"; // Importation de Framer Motion

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };

  const sectionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="container  max-w-6xl mx-auto w-full px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold tracking-tight mb-2">Nous contacter</h1>
          <p className="text-muted-foreground">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="border rounded-lg p-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h2 className="text-xl font-bold">Envoyez-nous un message</h2>
              <p className="text-sm text-gray-600">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    Prénom
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="Votre prénom"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Nom
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Votre nom"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Sujet
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Sujet de votre message"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Votre message"
                  rows={5}
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full py-2 px-4 bg-btn_col text-white rounded-md hover:bg-purple-700 transition-all"
                variants={sectionVariants}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Envoyer
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
<div className="border rounded-lg p-6">
  <div className="mb-4">
    <h2 className="text-xl font-bold">Coordonnées</h2>
  </div>
  <div className="space-y-4">
    <div>
      <h3 className="font-medium">Adresse</h3>
      <p className="text-gray-600">
        9 rue Coquillière<br />
        75001 Paris, France
      </p>
    </div>
    <div>
      <h3 className="font-medium">Téléphone</h3>
      <p className="text-gray-600">+33 1 55 65 44 44</p>
    </div>
    <div>
      <h3 className="font-medium">Email</h3>
      <p className="text-gray-600">contact@entreprise.com</p>
    </div>
    <div>
      <h3 className="font-medium">Horaires d'ouverture</h3>
      <p className="text-gray-600">
        Lundi - Vendredi: 9h00 - 17h30<br />
        Samedi - Dimanche: Fermé
      </p>
    </div>
  </div>
</div>

          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
