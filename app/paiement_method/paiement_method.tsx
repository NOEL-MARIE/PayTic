"use client";
import React from "react";
import { Typography } from "../ui/designSystem/component/Typo/Typography";
import Image from "next/image";
import { Button } from "../ui/designSystem/Typo/button/buttons";
import { motion } from "framer-motion"; // Importation de Framer Motion
import Link from "next/link";

export default function Paiement_method() {
  return (
    <div className="max-w-6xl mx-auto w-full px-4">
      <div className=" mb-6 md:pb-0  items-enter md:mb-0 md:pt-16 lg:mb-16 sm:pt-48 pt-9 mt-3  flex flex-col      ">
        {/* Contenu principal */}
        <motion.div
          className="  flex flex-col items-center gap-8  text-center"
          initial={{ opacity: 0, y: 20 }} // Animation de départ (légère montée)
          whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
          viewport={{ once: true }} // Déclencher une seule fois
          transition={{ duration: 0.5 }} // Durée de la transition
        >
          {/* Titre */}
          <Typography className="xs:px-8" variant="Heading_feature_section">
            Moyens de paiement disponibles
          </Typography>

          {/* Texte descriptif */}
          <Typography
            theme="gray"
            variant="Supporting_text_feature_section"
            className="max-w-2xl text-center xs:px-8"
          >
            Nous mettons à votre disposition une large gamme de solutions de
            paiement, adaptées aux besoins des entreprises et des particuliers,
            garantissant des transactions rapides, sécurisées et accessibles à
            tous. De nouveaux moyens de paiement seront bientôt disponibles pour
            encore plus de flexibilité.
          </Typography>

          {/* Image */}
          <motion.div
            className=" gap-2 grid grid-cols-2  md:grid-cols-2 xl:grid-cols-6"
            initial={{ opacity: 0, x: 100 }} // Animation de départ (caché à droite)
            whileInView={{ opacity: 1, x: 0 }} // Animation de glissement et apparition
            viewport={{ once: true }} // Déclencher une seule fois
            transition={{ duration: 0.5, delay: 0.2 }} // Durée et retard
          >
            <Image
              src="/asset/moov.svg"
              alt="Moyens de paiement"
              width={1280}
              height={88}
              className="w-full  max-w-4xl h-auto"
            />
            <Image
              src="/asset/wave (2).svg"
              alt="Moyens de paiement"
              width={1280}
              height={88}
              className="w-full  max-w-4xl h-auto"
            />
            <Image
              src="/asset/orange.svg"
              alt="Moyens de paiement"
              width={1280}
              height={88}
              className="w-full  max-w-4xl h-auto"
            />
            <Image
              src="/asset/mtn.svg"
              alt="Moyens de paiement"
              width={1280}
              height={88}
              className="w-full  max-w-4xl h-auto"
            />
            <div className="relative mt-8 md:mt-0">
              <Image
                src="/asset/VISA.svg"
                alt="Moyens de paiement"
                width={1280}
                height={88}
                className="w-full max-w-4xl h-auto grayscale "
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs  font-semibold text-blue-500">
                Bientôt disponible
              </p>
            </div>

            {/* <div className="relative mt-8 md:mt-0">
              <Image
                src="/asset/T MONNEY.svg"
                alt="Moyens de paiement"
                width={1280}
                height={88}
                className="w-full max-w-4xl h-auto grayscale "
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs font-semibold text-blue-500 font-inriasans">
                Bientôt disponible
              </p>
            </div> */}

            {/* <div className="relative mt-8 md:mt-0">
              <Image
                src="/asset/RéseauFREE.svg"
                alt="Moyens de paiement"
                width={1280}
                height={88}
                className="w-full max-w-4xl h-auto grayscale "
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs font-semibold text-blue-500 font-inriasans">
                Bientôt disponible
              </p>
            </div> */}

            <div className="relative mt-8 md:mt-0">
              <Image
                src="/asset/MASTER CARD.svg"
                alt="Moyens de paiement"
                width={1280}
                height={88}
                className="w-full max-w-4xl h-auto grayscale "
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs font-semibold text-blue-500 font-inriasans">
                Bientôt disponible
              </p>
            </div>
          </motion.div>

          {/* Bouton */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Animation de départ (légère montée)
            whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
            viewport={{ once: true }} // Déclencher une seule fois
            transition={{ duration: 0.5, delay: 0.4 }} // Durée et retard
          >
            <Link href="/contact">
              <Button variant="Demander une démo">Nous contacter</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
