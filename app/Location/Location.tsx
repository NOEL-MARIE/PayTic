"use client";
import React, { useState } from "react";
import { Typography } from "../ui/designSystem/component/Typo/Typography";
import Image from "next/image";
import { motion } from "framer-motion"; // Importation de Framer Motion
import { Button } from "../ui/designSystem/button/buttons";
import UemoaPage from "../Uemoa/page";
export default function Location() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email soumis : ${email}`);
  };

  return (
    <div className="  w-full px-4  lg:pt-20 lg:pb-20 xs:pt-6 flex pb-7 flex-col lg:flex-row items-center justify-center gap-1 bg-feature">
      {/* Section Texte & Formulaire */}
      <motion.div
        className="flex flex-col items-start justify-center text-center md:text-left "
        initial={{ opacity: 0, x: -100 }} // Animation de départ (caché à gauche)
        whileInView={{ opacity: 1, x: 0 }} // Animation de glissement et apparition
        viewport={{ once: true }} // Déclencher une seule fois
        transition={{ duration: 0.5 }} // Durée de l'animation
      >
        <div className="xs:px-6 space-y-11">
          <Typography variant="Heading_feature_section">
            Où nous sommes disponibles ?
          </Typography>
          <Typography variant="Supporting_text_feature_section" theme="gray">
            Actuellement disponible en{" "}
            <span className="font-extrabold">Côte d'Ivoire</span>, nous
            travaillons activement pour <br className="hidden md:block" />{" "}
            élargir notre présence dans d’autres pays africains. Restez
            connectés,
            <br className="hidden md:block" />
            <span className="font-extrabold">
              PayTic arrive bientôt près de chez vous !
            </span>
          </Typography>
          {/* Formulaire */}

          <UemoaPage />
        </div>
      </motion.div>

      {/* Image adaptative */}
      <motion.div
        className="flex justify-center "
        initial={{ opacity: 0, x: 100 }} // Animation de départ (caché à droite)
        whileInView={{ opacity: 1, x: 0 }} // Animation de glissement et apparition
        viewport={{ once: true }} // Déclencher une seule fois
        transition={{ duration: 0.5, delay: 0.2 }} // Durée et retard
      >
        <Image
          src="/asset/Group.svg"
          alt="Carte de disponibilité"
          width={600}
          height={550}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl  xl:max-w-2xl h-auto"
        />
      </motion.div>
    </div>
  );
}
