"use client"
import React from "react";
import { Typography } from "../ui/designSystem/component/Typo/Typography";
import Image from "next/image";
import { motion } from "framer-motion"; // Importation de Framer Motion

export default function Space_dev() {
  return (
    <div className="max-w-6xl mx-auto w-full px-4">
      <div className="  xs:pt-7 md:pt-0  md:mt-0 flex flex-col items-center justify-between  py-12">
        {/* Bloc de texte */}
        <motion.div
          className="flex flex-col w-full  md:items-start gap-8 md:text-left xs:text-center"
          initial={{ opacity: 0, y: 20 }} // Animation de départ (légère montée)
          whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
          viewport={{ once: true }} // Déclencher une seule fois
          transition={{ duration: 0.5 }} // Durée de la transition
        >
          <div className="flex flex-col  gap-4 text-center md:text-start md:px-0">
            <Typography variant="Heading_feature_section">
              Espace Développeur
            </Typography>
            <Typography variant="Supporting_text_feature_section" theme="gray">
              Accédez à notre documentation API, guides d’intégration <br /> et
              outils dédiés aux développeurs.
            </Typography>
          </div>

          <div className="flex flex-row ">
            {/* Image */}
            <motion.div
              className=" w-full h-full  hidden md:block justify-center items-center mt-10"
              initial={{ opacity: 0, x: 100 }} // Animation de départ (caché à droite)
              whileInView={{ opacity: 1, x: 0 }} // Animation de glissement et apparition
              viewport={{ once: true }} // Déclencher une seule fois
              transition={{ duration: 0.5, delay: 0.2 }} // Durée et retard
            >
              <Image
                src="/asset/Content(1).svg"
                width={600}
                height={560}
                alt=""
                className="rounded-lg"
              />
            </motion.div>
            {/* Liste des avantages */}
            <motion.div
              className=" md:ml-10 flex flex-col    text-center md:text-left  justify-center"
              initial={{ opacity: 0, x: -100 }} // Animation de départ (caché à gauche)
              whileInView={{ opacity: 1, x: 0 }} // Animation de glissement et apparition
              viewport={{ once: true }} // Déclencher une seule fois
              transition={{ duration: 0.5, delay: 0.4 }} // Durée et retard
            >
              <Typography
                variant="Supporting_text_feature_section"
                className=" "
                theme="gray"
              >
                Notre API permet une intégration fluide et sécurisée avec vos{" "}
                plateformes existantes, que ce soit pour le e-commerce, les
                services financiers ou les applications mobiles.
              </Typography>

              <div className="space-y-4   mt-5 ">
                {/* Premier bloc */}
                <motion.div
                  className=" flex  flex-col items-center md:flex-row md:items-center  space-x-4"
                  initial={{ opacity: 0, y: 50 }} // Animation de départ (légère montée)
                  whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
                  viewport={{ once: true }} // Déclencher une seule fois
                  transition={{ duration: 0.5, delay: 0.6 }} // Durée et retard
                >
                  <Image
                    src="/asset/check-circle.svg"
                    width={28}
                    height={28}
                    alt=""
                    className=" rounded-lg "
                  />
                  <Typography
                    theme="gray"
                    variant="Supporting_text_feature_section"
                    className="flex    flex-col md:flex-row gap-1 text-center items-center "
                  >
                    <p className="font-extrabold text-center text-[17px]">
                      Endpoints sécurisés
                    </p>
                    {" "}pour gérer vos paiements et transactions
                  </Typography>
                </motion.div>
                {/* Premier bloc */}
                <motion.div
                  className="flex  flex-col md:flex-row items-center space-x-4 "
                  initial={{ opacity: 0, y: 50 }} // Animation de départ (légère montée)
                  whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
                  viewport={{ once: true }} // Déclencher une seule fois
                  transition={{ duration: 0.5, delay: 0.8 }} // Durée et retard
                >
                  <Image
                    src="/asset/check-circle.svg"
                    width={28}
                    height={28}
                    alt=""
                    className="rounded-lg "
                  />
                  <Typography
                    theme="gray"
                    variant="Supporting_text_feature_section"
                    className="flex gap-1 flex-col md:flex-row text-center items-center  "
                  >
                    <p className="font-extrabold text-center text-[17px]">
                      Webhooks et SDKs
                    </p>{" "}
                    pour automatiser vos processus
                  </Typography>
                </motion.div>{" "}
                {/* Premier bloc */}
                <motion.div
                  className=" flex  flex-col md:flex-row items-center space-x-4  "
                  initial={{ opacity: 0, y: 50 }} // Animation de départ (légère montée)
                  whileInView={{ opacity: 1, y: 0 }} // Animation pour rendre l'élément complètement visible
                  viewport={{ once: true }} // Déclencher une seule fois
                  transition={{ duration: 0.5, delay: 1 }} // Durée et retard
                >
                  <Image
                    src="/asset/check-circle.svg"
                    width={28}
                    height={28}
                    alt=""
                    className="rounded-lg "
                  />
                  <Typography
                    theme="gray"
                    variant="Supporting_text_feature_section"
                    className="flex gap-1 flex-col md:flex-row text-center items-center "
                  >
                    <p className="font-extrabold text-center text-[17px]">
                      Assistance technique
                    </p>{" "}
                    dédiée pour vous accompagner
                  </Typography>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
