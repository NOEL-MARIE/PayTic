import React from "react";
import { Typography } from "../ui/designSystem/component/Typo/Typography";
import Image from "next/image";
import { Container_int } from "../ui/designSystem/component/Container_hero/container_int";

export const Featured_section = () => {
  return (
    <div className="w-screen    flex flex-col mt-11  px-4 md:px-8 flex-wrap p-20">
      <div className="w-screen  flex flex-col  gap-20 px-4 md:px-8 ">
        <div className="flex gap-5 flex-col">
          {" "}
          <Typography variant="Heading_feature_section">
            À propos de PayTic
          </Typography>
          <Typography variant="Supporting_text_feature_section" theme="gray">
            Nous croyons en un système de paiement fluide, rapide et accessible
            à tous. PayTic vous <br /> offre une plateforme robuste pour
            simplifier et sécuriser vos transactions financières.
          </Typography>
        </div>

        {/* Section avec image et texte */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-20  lg:flex-row items-center justify-between ">
          {/* Partie image */}
          <div className="flex justify-center items-center w-full md:w-1/2">
            <Image
              src="asset/Content.svg"
              width={570}
              height={560}
              alt="PayTic image"
              className="w-full h-auto"
            />
          </div>

          {/* Partie texte */}
          <div className="flex flex-col gap-8 md:gap-12 w-full md:w-1/2 justify-center items-start">
            {/* Bloc Sécurité */}
            <div className="flex items-start gap-4">
              <Image
                src="asset/Key.svg"
                width={48}
                height={48}
                alt="Sécurité"
              />
              <div>
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
            <div className="flex items-start gap-4">
              <Image
                src="asset/horloge.svg"
                width={48}
                height={48}
                alt="Transactions instantanées"
              />
              <div>
                <Typography variant="Text_Icon_Heading">
                  Transactions instantanées
                </Typography>
                <Typography variant="Text_Icon_Supporting_text">
                  Envoyez et recevez vos paiements en temps réel, sans délai ni
                  contrainte.
                </Typography>
              </div>
            </div>

            {/* Bloc Interface intuitive */}
            <div className="flex items-start gap-4">
              <Image
                src="asset/Star.svg"
                width={48}
                height={48}
                alt="Interface intuitive"
              />
              <div>
                <Typography variant="Text_Icon_Heading">
                  Interface intuitive et intégration facile
                </Typography>
                <Typography variant="Text_Icon_Supporting_text">
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
