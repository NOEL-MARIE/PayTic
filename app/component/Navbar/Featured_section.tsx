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
                src="/asset/AAAAAA.png"
                width={370}
                height={360}
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
                <div className="bg-white w-[48px] h-[48px] flex items-center shadow-md justify-center rounded-lg">
                  <svg
                    width="50"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 1L18 3M18 3L21 6L17.5 9.5L14.5 6.5M18 3L14.5 6.5M10.39 10.61C10.9064 11.1195 11.3168 11.726 11.5978 12.3948C11.8787 13.0635 12.0246 13.7813 12.0271 14.5066C12.0295 15.232 11.8884 15.9507 11.6119 16.6213C11.3355 17.2919 10.9291 17.9012 10.4162 18.4141C9.90326 18.9271 9.29395 19.3334 8.62333 19.6099C7.95271 19.8864 7.23403 20.0275 6.50866 20.025C5.7833 20.0226 5.06557 19.8767 4.39682 19.5958C3.72807 19.3148 3.1215 18.9043 2.61203 18.388C1.61016 17.3507 1.05579 15.9614 1.06832 14.5193C1.08085 13.0772 1.65928 11.6977 2.67903 10.678C3.69877 9.65825 5.07824 9.07982 6.52032 9.06729C7.96241 9.05476 9.35172 9.60913 10.389 10.611L10.39 10.61ZM10.39 10.61L14.5 6.5"
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
                <div className="bg-white w-[48px] h-[48px] flex items-center shadow-md justify-center rounded-lg">
                  <svg
                    width="50"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 5V11L15 13M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
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
                <div className="bg-white w-[48px] h-[48px] flex items-center shadow-md justify-center rounded-lg">
                  <svg
                    width="50"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
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
