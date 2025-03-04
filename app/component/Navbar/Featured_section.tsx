"use client";
import React from "react";
import { Typography } from "@/app/ui/designSystem/Typo/Typography";
import Image from "next/image";
import { motion } from "framer-motion"; // Importation de Framer Motion

export const Featured_section = () => {
  return (
    <div className="max-w-6xl mx-auto w-full px-4">
      <div className="flex flex-col mt-11">
        <div className="flex flex-col md:flex-col md:gap-20 gap-10">
          <div className="flex gap-5 flex-col">
            <motion.div
              className="text-left md:justify-start justify-center flex"
              initial={{ opacity: 0, x: -100 }} // Animation de départ
              whileInView={{ opacity: 1, x: 0 }} // Animation de glissement
              viewport={{ once: true }} // Déclencher une seule fois
              transition={{ duration: 0.5 }} // Durée de l'animation
            >
              <Typography variant="Heading_feature_section">
                À propos de PayTic
              </Typography>
            </motion.div>

            <motion.div
              className="xs:flex w-[768px] h-[44px] text-wrap text-center md:text-left flex"
              initial={{ opacity: 0, x: -100 }} // Animation de départ
              whileInView={{ opacity: 1, x: 0 }} // Animation de glissement
              viewport={{ once: true }} // Déclencher une seule fois
              transition={{ duration: 0.5, delay: 0.2 }} // Durée et retard
            >
              <Typography
                variant="Supporting_text_feature_section"
                className="text-text_navigation"
              >
                Nous croyons en un système de paiement fluide, rapide et
                accessible à tous. PayTic vous offre une plateforme robuste pour
                simplifier et sécuriser vos transactions financières.
              </Typography>
            </motion.div>
          </div>

          {/* Section avec image et texte */}
          <div className="flex flex-col xs:pb-20 sm:pb-20 gap-8 lg:gap-20 md:flex-row items-center justify-between">
            {/* Partie image */}
            <motion.div
              className="hidden md:block justify-center items-center lg: xs:h-1/2 w-full"
              initial={{ opacity: 0, x: 100 }} // Animation de départ
              whileInView={{ opacity: 1, x: 0 }} // Animation de glissement
              viewport={{ once: true }} // Déclencher une seule fois
              transition={{ duration: 0.5, delay: 0.4 }} // Durée et retard
            >
              <Image
                src="asset/Content.svg"
                width={570}
                height={560}
                alt="PayTic image"
                className="w-full h-auto hidden md:block"
              />
            </motion.div>

            {/* Partie texte */}
            <div className="flex flex-col gap-8 w-full justify-center items-center">
              {/* Bloc Sécurité */}
              <motion.div
                className="flex flex-col md:flex-row items-center md:items-start gap-4"
                initial={{ opacity: 0, y: 50 }} // Animation de départ
                whileInView={{ opacity: 1, y: 0 }} // Animation de glissement
                viewport={{ once: true }} // Déclencher une seule fois
                transition={{ duration: 0.5, delay: 0.6 }} // Durée et retard
              >
                <Image
                  src="asset/Key.svg"
                  width={48}
                  height={48}
                  alt="Sécurité"
                  className="mb-4 md:mb-0"
                />
                <div className="flex flex-col text-center md:text-start">
                  <Typography variant="Text_Icon_Heading" >
                    Sécurité avancée et conformité
                  </Typography>
                  <Typography variant="Text_Icon_Supporting_text" theme="gray">
                    Protégez vos paiements avec une sécurité optimale et une
                    conformité aux régulations locales.
                  </Typography>
                </div>
              </motion.div>

              {/* Bloc Transactions instantanées */}
              <motion.div
                className="flex flex-col md:flex-row items-center md:items-start gap-4"
                initial={{ opacity: 0, y: 50 }} // Animation de départ
                whileInView={{ opacity: 1, y: 0 }} // Animation de glissement
                viewport={{ once: true }} // Déclencher une seule fois
                transition={{ duration: 0.5, delay: 0.8 }} // Durée et retard
              >
                <Image
                  src="asset/horloge.svg"
                  width={48}
                  height={48}
                  alt="Transactions instantanées"
                  className="mb-4 md:mb-0"
                />
                <div className="flex flex-col text-center md:text-start">
                  <Typography variant="Text_Icon_Heading" theme="black" >
                    Transactions instantanées
                  </Typography>
                  <Typography variant="Text_Icon_Supporting_text" theme="gray">
                    Envoyez et recevez vos paiements en temps réel, sans délai
                    ni contrainte.
                  </Typography>
                </div>
              </motion.div>

              {/* Bloc Interface intuitive */}
              <motion.div
                className="flex flex-col md:flex-row items-center md:items-start gap-4"
                initial={{ opacity: 0, y: 50 }} // Animation de départ
                whileInView={{ opacity: 1, y: 0 }} // Animation de glissement
                viewport={{ once: true }} // Déclencher une seule fois
                transition={{ duration: 0.5, delay: 1 }} // Durée et retard
              >
                <Image
                  src="asset/Star.svg"
                  width={48}
                  height={48}
                  alt="Interface intuitive"
                  className="mb-4 md:mb-0"
                />
                <div className="flex flex-col text-center md:text-start">
                  <Typography variant="Text_Icon_Heading" >
                    Interface intuitive et intégration facile
                  </Typography>
                  <Typography variant="Text_Icon_Supporting_text" theme="gray" className="text-[#454545]">
                    Une plateforme fluide avec une API puissante pour une
                    gestion simplifiée.
                  </Typography>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
