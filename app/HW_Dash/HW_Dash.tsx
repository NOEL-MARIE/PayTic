"use client"; // Indique que ce composant doit s'exécuter côté client

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Typography } from "../ui/designSystem/component/Typo/Typography";
import { Button } from "../ui/designSystem/Typo/button/buttons";
import Image from "next/image"; // Importation du composant Image
import Link from "next/link";

export const HW_Dash = () => {
  // État pour suivre la section active
  const [activeSection, setActiveSection] = useState(0);

  // État pour la position verticale de l'indicateur
  const [indicatorY, setIndicatorY] = useState(0);

  // Référence pour stocker les boutons des sections
  const buttonsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Liste des sections avec leurs titres, sous-titres et images
  const sections = [
    {
      title: "Créez un compte",
      subTitle:
        "Inscrivez-vous en quelques minutes et accédez à votre tableau de bord sécurisé.",
      image: "/asset/Content.svg", // Image spécifique pour cette section
    },
    {
      title: "Connectez votre entreprise",
      subTitle:
        "Ajoutez vos informations et configurez vos options de paiement.",
      image: "/asset/HW_img.svg", // Image spécifique pour cette section
    },
    {
      title: "Démarrez vos transactions",
      subTitle:
        "Acceptez et envoyez des paiements en toute sécurité dès votre activation.",
      image: "/asset/HW_img.svg", // Image spécifique pour cette section
    },
    {
      title: "Intégrez notre API",
      subTitle:
        "Notre API robuste a une documentation détaillée facilitant l'intégration rapide et efficace.",
      image: "/asset/img.jpg", // Image spécifique pour cette section
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
    <div className="max-w-6xl mx-auto w-full px-4">
      <div className=" md:mt-0 md:pt-0 mb-3    flex flex-col  ">
        <div className=" gap-4 flex flex-col ">
          {/* Titre principal de la page */}
          <motion.div
            className="w-full  xs:justify-center lg:mt-10 lg:mb-0 mt-9  flex flex-col md:flex-row md:justify-between   items-center mb-8"
            initial={{ opacity: 0, y: 20 }} // Animation d'apparition (légère montée)
            whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
            viewport={{ once: true }} // Déclencher une seule fois
            transition={{ duration: 0.5 }} // Durée de la transition
          >
            <Typography
              variant="Heading_feature_section"
              className=" text-center sm:text-left "
            >
              Comment ça marche ?
            </Typography>
            <Link href="/get-started">
              <Button variant="Demander une démo" className="  ">
                Commencer maintenant
              </Button>
            </Link>
          </motion.div>

          <div className="flex  mb-10 items-center relative flex-col md:flex-row">
            {/* Barre latérale contenant les sections et l'indicateur */}
            <motion.div
              className=" md:w-1/2 h-full p-6 space-y-4 cursor-pointer relative flex flex-col justify-center items-center md:items-start"
              initial={{ opacity: 0, x: -100 }} // Animation de départ (caché à gauche)
              whileInView={{ opacity: 1, x: 0 }} // Animation de glissement et apparition
              viewport={{ once: true }} // Déclencher une seule fois
              transition={{ duration: 0.5, delay: 0.2 }} // Durée et retard
            >
              {/* Indicateur animé avec Framer Motion */}
              <motion.div
                className="z-10 absolute left-2 w-1 bg-blue-500"
                animate={{ top: indicatorY }} // Anime la position verticale
                transition={{ type: "spring", stiffness: 120, damping: 20 }} // Animation fluide
                style={{ height: "84px" }} // Hauteur de l'indicateur mise à 84px
              />
              <div className="ml-1 top-10 left-1 z-0 absolute w-1 bottom-7 md:bottom-10  bg-[#F2F4F7]"></div>
              {/* Liste des sections cliquables */}
              {sections.map((section, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    buttonsRef.current[index] = el;
                  }} // Associe chaque bouton à sa référence dans le tableau `buttonsRef`
                  onClick={() => setActiveSection(index)} // Met à jour la section active
                  className={`cursor-pointer flex items-center px-4 py-2 rounded-md transition duration-200 relative w-full ${
                    activeSection === index // Si cette section est active, applique un style spécifique
                      ? "bg-blue-100 text-blue-500 font-bold"
                      : "bg-transparent text-black hover:bg-blue-50" // Sinon applique un style par défaut
                  }`}
                >
                  {/* Affichage de l'image à côté du titre de la section */}

                  <div className="ml-4">
                    <div className="text-lg font-inriasans">
                      {section.title}
                    </div>
                    <div className="text-sm font-Inter text-gray-600 w-full">
                      {section.subTitle}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contenu principal affichant la section active */}
            <motion.div
              key={activeSection} // Permet à Framer Motion de réanimer à chaque changement de section
              initial={{ opacity: 0, y: 20 }} // Animation d'apparition (légère montée)
              whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
              viewport={{ once: true }} // Déclencher une seule fois
              transition={{ duration: 0.5, delay: 0.4 }} // Durée et retard
              className="flex  justify-end items-center"
            >
              <img
                src={sections[activeSection].image} // Image spécifique à la section active
                alt={`Image pour ${sections[activeSection].title}`}
                // width={100} // Largeur de l'image réduite
                // height={100} // Hauteur de l'image réduite
                className=" xs:pb-7  md:pb-0  flex  " // Ajustement supplémentaire pour la taille
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
