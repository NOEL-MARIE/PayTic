"use client"; // Indique que ce composant doit s'exécuter côté client

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Typography } from "../ui/designSystem/component/Typo/Typography";
import { Button } from "../ui/designSystem/Typo/button/buttons";

export const HW_Dash = () => {
  // État pour suivre la section active
  const [activeSection, setActiveSection] = useState(0);

  // État pour la position verticale de l'indicateur
  const [indicatorY, setIndicatorY] = useState(0);

  // Référence pour stocker les boutons des sections
  const buttonsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Liste des sections avec leurs titres et sous-titres
  const sections = [
    {
      title: "Créez un compte",
      subTitle:
        "Inscrivez-vous en quelques minutes et accédez à votre tableau de bord sécurisé.",
    },
    {
      title: "Connectez votre entreprise",
      subTitle:
        "Ajoutez vos informations et configurez vos options de paiement.",
    },
    {
      title: "Démarrez vos transactions",
      subTitle:
        "Acceptez et envoyez des paiements en toute sécurité dès votre activation.",
    },
    {
      title: "Intégrez notre API",
      subTitle:
        "Notre API robuste a une documentation détaillée facilitant l'intégration rapide et efficace.",
    },
  ];

  // Effet pour mettre à jour la position de l'indicateur lorsque la section active change
  useEffect(() => {
    if (buttonsRef.current[activeSection]) {
      const button = buttonsRef.current[activeSection];
      if (button) {
        setIndicatorY(button.offsetTop); // Récupère la position verticale du bouton actif
      }
    }
  }, [activeSection]); // S'exécute à chaque changement de `activeSection`

  return (
    <div className="w-screen  flex flex-col  pt-10   md:px-8 ">
      <div className="w-screen  flex flex-col md:px-8 ">
        {" "}
        {/* Titre principal de la page */}
        <div className="w-full flex justify-between items-center ">
          <Typography variant="Heading_feature_section" className="text-left">
            Comment ça marche ?
          </Typography>
          <Button variant="Demander une démo" className="mr-24">
            Commencer maintenant
          </Button>
        </div>
        <div className="flex w-full h-full items-center       relative">
          {/* Barre latérale contenant les sections et l'indicateur */}
          <div className="w-1/2 h-full  p-6 space-y-4 cursor-pointer relative flex flex-col justify-center items-center">
            {/* Indicateur animé avec Framer Motion */}

            <motion.div
              className="  z-10 absolute  left-2 w-1 bg-blue-500  "
              animate={{ top: indicatorY }} // Anime la position verticale
              transition={{ type: "spring", stiffness: 120, damping: 20 }} // Animation fluide
              style={{ height: "84px" }} // Hauteur de l'indicateur mise à 84px
            />
            <div className=" ml-1 top-6 left-1 z-0 absolute w-1  bottom-6 bg-[#F2F4F7]"></div>
            {/* Liste des sections cliquables */}
            {sections.map((section, index) => (
              <div
                key={index}
                ref={(el) => (buttonsRef.current[index] = el)} // Associe chaque bouton à sa référence dans le tableau `buttonsRef`
                onClick={() => setActiveSection(index)} // Met à jour la section active
                className={`cursor-poi"nter flex items-center px-4 py-2 rounded-md transition duration-200 relative ${
                  activeSection === index // Si cette section est active, applique un style spécifique
                    ? "bg-blue-100 text-blue-500 font-bold"
                    : "bg-transparent text-black hover:bg-blue-50" // Sinon applique un style par défaut
                }`}
              >
                <div className="ml-4">
                  <div className=" text-lg font-Inter ">{section.title}</div>
                  <div className="text-sm text-gray-600  w-full">
                    {section.subTitle}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contenu principal affichant la section active */}
          <div className="w-3/4 p-8">
            <motion.div
              key={activeSection} // Permet à Framer Motion de réanimer à chaque changement de section
              initial={{ opacity: 0, y: 20 }} // Animation d'apparition (légère montée)
              animate={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
              transition={{ duration: 0.5 }} // Durée de la transition
              className="max-w-2xl mx-auto"
            >
              {/* Titre et sous-titre de la section active */}
              <h2 className="text-2xl font-bold mb-6">
                {sections[activeSection].title}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {sections[activeSection].subTitle}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
