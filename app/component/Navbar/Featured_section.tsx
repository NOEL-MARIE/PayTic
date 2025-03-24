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
              className="md:text-left text-center md:justify-start justify-center flex"
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
              className="xs:flex  text-wrap text-center md:text-lef flex"
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
          <div className=" flex flex-col xs:pb-20 sm:pb-20 gap-8 lg:gap-20 md:flex-row items-center justify-between">
            {/* Partie image */}
            <motion.div
              className="hidden md:block justify-center items-center lg: xs:h-1/2 w-full "
              initial={{ opacity: 0, x: 100 }} // Animation de départ
              whileInView={{ opacity: 1, x: 0 }} // Animation de glissement
              viewport={{ once: true }} // Déclencher une seule fois
              transition={{ duration: 0.5, delay: 0.4 }} // Durée et retard
            >
              <Image
                src="/asset/deskScreen2.png"
                width={400}
                height={400}
                alt="PayTic image"
                className="w-full h-auto hidden md:block "
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
                {/*  */}
                <div className="bg-white mb-4 md:mb-0 w-[58] h-[58] flex items-center shadow-md justify-center rounded-lg">
                  <svg
                    width="55"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 2L19 4M19 4L22 7L18.5 10.5L15.5 7.5M19 4L15.5 7.5M11.39 11.61C11.9064 12.1195 12.3168 12.726 12.5978 13.3948C12.8787 14.0635 13.0246 14.7813 13.0271 15.5066C13.0295 16.232 12.8884 16.9507 12.6119 17.6213C12.3355 18.2919 11.9291 18.9012 11.4162 19.4141C10.9033 19.9271 10.294 20.3334 9.62333 20.6099C8.95271 20.8864 8.23403 21.0275 7.50866 21.025C6.7833 21.0226 6.06557 20.8767 5.39682 20.5958C4.72807 20.3148 4.1215 19.9043 3.61203 19.388C2.61016 18.3507 2.05579 16.9614 2.06832 15.5193C2.08085 14.0772 2.65928 12.6977 3.67903 11.678C4.69877 10.6583 6.07824 10.0798 7.52032 10.0673C8.96241 10.0548 10.3517 10.6091 11.389 11.611L11.39 11.61ZM11.39 11.61L15.5 7.5"
                      stroke="#007AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col text-center md:text-start">
                  <Typography variant="Text_Icon_Heading">
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
                <div className="bg-white mb-4 md:mb-0 w-[58] h-[58] flex items-center shadow-md justify-center rounded-lg">
                  <svg
                    width="55"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#007AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col text-center md:text-start">
                  <Typography variant="Text_Icon_Heading" theme="black">
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
                <div className="bg-white mb-4 md:mb-0 w-[58] h-[58] flex items-center shadow-md justify-center rounded-lg">
                  <svg
                    width="55"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      stroke="#007AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col text-center md:text-start">
                  <Typography variant="Text_Icon_Heading">
                    Interface intuitive et intégration facile
                  </Typography>
                  <Typography
                    variant="Text_Icon_Supporting_text"
                    theme="gray"
                    className="text-[#454545]"
                  >
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
