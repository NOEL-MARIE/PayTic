"use client";

import { Container_Hero } from "../ui/designSystem/component/Container_hero/Container_hero";
import { Button } from "@/app/ui/designSystem/button/buttons";
import { Typography } from "@/app/ui/designSystem/component/Typo/Typography";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Importation de Framer Motion
import Link from "next/link";
import UsersReviews from "../component/users_reviews/page";

export default function HeroTop() {
  return (
    <>
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="flex flex-col pt-11 xs:mt-0">
          <div className="flex flex-col md:justify-between md:flex-row md:gap-20 gap-1">
            {/* Section Texte */}
            <motion.div
              className="flex flex-col items-start h-full"
              initial={{ opacity: 0, x: -100 }} // Position de départ (caché à gauche)
              whileInView={{ opacity: 1, x: 0 }} // Animation de glissement et apparition
              viewport={{ once: true }} // Déclencher une seule fois
              transition={{ duration: 0.5 }} // Durée de l'animation
            >
              <div className="mt-20">
                <Typography
                  variant="Heading_hero_section"
                  theme="black"
                  className="font-semibold text-center md:text-left"
                >
                  Simplifiez et sécurisez <br /> vos paiements avec <br />{" "}
                  PayTic
                </Typography>
                <Typography
                  variant="Supporting_text_hero_section"
                  theme="gray"
                  className="mt-4 px-11 md:px-0 text-center md:text-left"
                >
                  La solution idéale pour les entreprises, commerçants et
                  entrepreneurs qui souhaitent une gestion efficace et rapide
                  des paiements en ligne.
                </Typography>
              </div>

              <div className="mt-4 w-full flex flex-col items-center md:flex-row md:justify-start justify-center gap-3">
                <Link href="/demo">
                  <Button
                    variant="demo"
                    className="flex flex-row gap-3 justify-center xs:justify-start items-center"
                  >
                    <Image
                      src="asset/Icon.svg"
                      alt="Icon_play.svg"
                      width={24}
                      height={24}
                    />
                    Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="nousContacter" className="xs:mt-0">
                    Nous contacter
                  </Button>
                </Link>

              </div>
              <div>

                <UsersReviews/>
              </div>
            </motion.div>

            {/* Section Image */}
            <motion.div
              className="rounded-lg hidden md:block md:w-screen h-[640px] W-[740px] bg-cover bg-[30%] bg-[url(/asset/img.jpg)]"
              initial={{ opacity: 0, x: 100 }} // Position de départ (caché à droite)
              whileInView={{ opacity: 1, x: 0 }} // Animation de glissement et apparition
              viewport={{ once: true }} // Déclencher une seule fois
              transition={{ duration: 0.5, delay: 0.2 }} // Durée et retard
            >
              <Image
                src="/asset/Line.svg"
                alt="Icon_play.svg"
                width={8000}
                height={8000}
                className="md:w-1/2  md:pt-44 md:z-30 hidden md:block   md:overflow-visible md:absolute md:mt-52 md:right-5"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
