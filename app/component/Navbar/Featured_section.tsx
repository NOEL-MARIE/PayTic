import React from "react";
import { Typography } from "../../ui/designSystem/component/Typo/Typography";
import Image from "next/image";
import { Container_int } from "../../ui/designSystem/component/Container_hero/container_int";

export const Featured_section = () => {
  return (
    <div className="w-screen    flex flex-col mt-11  px-4 flex-wrap p-20 xs:p-0">
      <div className="w-screen  flex flex-col  gap-20  px-4 ">
        <div className="flex gap-5 flex-col">
          {" "}
          <Typography
            className=" md:justify-center  xs:justify-center flex"
            variant="Heading_feature_section"
          >
            À propos de PayTic
          </Typography>
          <Typography
            className="xs:flex fy-start  md:px-16 flex xs:justify-center xs:text-center left xs:px-8"
            variant="Supporting_text_feature_section"
            theme="gray"
          >
            Nous croyons en un système de paiement fluide, rapide et accessible
            à tous. PayTic vous <br /> offre une plateforme robuste pour
            simplifier et sécuriser vos transactions financières.
          </Typography>
        </div>

        {/* Section avec image et texte */}
        <div className="flex flex-col xs:pb-20 sm:pb-20 2xl:px-9 gap-8 lg:gap-20 lg:flex-row items-center justify-between">
          {/* Partie image */}
          <div className="hidden md:block justify-center items-center xs:h-1/2 w-full">
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
            <div className="flex flex-col items-center 2xl:items-start gap-4">
              <Image
                src="asset/Key.svg"
                width={48}
                height={48}
                alt="Sécurité"
                className="mb-4"
              />
              <div className="2xl:mt-4 2xl:items-start xs:flex-col xs:px-8 xs:flex">
                <Typography
                  variant="Text_Icon_Heading"
                  className="text-center 2xl:text-left"
                >
                  Sécurité avancée et conformité
                </Typography>
                <Typography
                  variant="Text_Icon_Supporting_text"
                  className="text-center 2xl:text-left"
                >
                  Protégez vos paiements avec une sécurité optimale et une
                  conformité aux régulations locales.
                </Typography>
              </div>
            </div>

            {/* Bloc Transactions instantanées */}
            <div className="flex flex-col items-center 2xl:items-start gap-4">
              <Image
                src="asset/horloge.svg"
                width={48}
                height={48}
                alt="Sécurité"
                className="mb-4"
              />
              <div className="2xl:mt-4 2xl:items-start xs:flex-col xs:px-8 xs:flex">
                <Typography
                  variant="Text_Icon_Heading"
                  className="text-center 2xl:text-left"
                >
                  Transactions instantanées
                </Typography>
                <Typography
                  variant="Text_Icon_Supporting_text"
                  className="text-center 2xl:text-left"
                >
                  Envoyez et recevez vos paiements en temps réel, sans délai ni
                  contrainte.
                </Typography>
              </div>
            </div>

            {/* Bloc Interface intuitive */}
            <div className="flex flex-col items-center 2xl:items-start gap-4">
              <Image
                src="asset/Star.svg"
                width={48}
                height={48}
                alt="Interface intuitive"
                className="mb-4"
              />
              <div className="2xl:mt-4 2xl:items-start xs:flex-col xs:px-8 xs:flex">
                <Typography
                  variant="Text_Icon_Heading"
                  className="text-center 2xl:text-left"
                >
                  Interface intuitive et intégration facile
                </Typography>
                <Typography
                  variant="Text_Icon_Supporting_text"
                  className="text-center 2xl:text-left"
                >
                  Une plateforme fluide avec une API puissante pour une gestion
                  simplifiée.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
