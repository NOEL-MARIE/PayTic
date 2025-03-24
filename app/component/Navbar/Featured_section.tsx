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
                <div className="bg-white mb-4 md:mb-0 w-[50] h-[50] flex items-center shadow-md justify-center rounded-lg">
                  <svg
                    width="50"
                    height="50"
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};