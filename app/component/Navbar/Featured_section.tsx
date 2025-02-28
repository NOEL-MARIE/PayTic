import React from "react";
import { Typography } from "../../ui/designSystem/component/Typo/Typography";
import Image from "next/image";
import { Container_int } from "../../ui/designSystem/component/Container_hero/container_int";

export const Featured_section = () => {
  return (
    <div className="max-w-6xl mx-auto w-full px-4">
      <div className="    flex flex-col mt-11     ">
        <div className="   flex flex-col md:flex-col md:gap-20 gap-10   ">
          <div className="flex gap-5 flex-col  ">
            {" "}
            <Typography
              className="  text-left   md:justify-start justify-center flex"
              variant="Heading_feature_section"
            >
              À propos de PayTic
            </Typography>
            <Typography
              className="xs:flex     text-center md:text-left   flex  "
              variant="Supporting_text_feature_section"
              theme="gray"
            >
              Nous croyons en un système de paiement fluide, rapide et
              accessible à tous. PayTic vous offe une plateforme robuste pour
              simplifier et sécuriser vos transactions financières.
            </Typography>
          </div>

          {/* Section avec image et texte */}
          <div className="flex flex-col xs:pb-20 sm:pb-20  gap-8 lg:gap-20 md:flex-row items-center justify-between">
            {/* Partie image */}
            <div className="hidden md:block justify-center items-center lg: xs:h-1/2 w-full">
              <Image
                src="asset/Content.svg"
                width={570}
                height={560}
                alt="PayTic image"
                className="w-full h-auto hidden md:block"
              />
            </div>

            {/* Partie texte */}
            <div className="flex flex-col gap-8 w-full justify-center items-center">
              {/* Bloc Sécurité */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                {/* Icône à gauche en md */}
                <Image
                  src="asset/Key.svg"
                  width={48}
                  height={48}
                  alt="Sécurité"
                  className="mb-4 md:mb-0"
                />

                {/* Texte à droite en md, avec titre en haut et description en bas */}
                <div className="flex flex-col text-center md:text-start">
                  <Typography variant="Text_Icon_Heading">
                    Sécurité avancée et conformité
                  </Typography>
                  <Typography variant="Text_Icon_Supporting_text">
                    Protégez vos paiements avec une sécurité optimale et une
                    conformité aux régulations locales.
                  </Typography>
                </div>
              </div>

              {/* Bloc Transactions instantanées */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                {/* Icône à gauche en md */}
                <Image
                  src="asset/horloge.svg"
                  width={48}
                  height={48}
                  alt="Transactions instantanées"
                  className="mb-4 md:mb-0"
                />

                {/* Texte à droite en md, avec titre en haut et description en bas */}
                <div className="flex flex-col text-center md:text-start">
                  <Typography variant="Text_Icon_Heading">
                    Transactions instantanées
                  </Typography>
                  <Typography variant="Text_Icon_Supporting_text">
                    Envoyez et recevez vos paiements en temps réel, sans délai
                    ni contrainte.
                  </Typography>
                </div>
              </div>

              {/* Bloc Interface intuitive */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                {/* Icône à gauche en md */}
                <Image
                  src="asset/Star.svg"
                  width={48}
                  height={48}
                  alt="Interface intuitive"
                  className="mb-4 md:mb-0"
                />

                {/* Texte à droite en md, avec titre en haut et description en bas */}
                <div className="flex flex-col text-center md:text-start">
                  <Typography variant="Text_Icon_Heading">
                    Interface intuitive et intégration facile
                  </Typography>
                  <Typography variant="Text_Icon_Supporting_text">
                    Une plateforme fluide avec une API puissante pour une
                    gestion simplifiée.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
