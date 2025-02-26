import React from "react";
import { Typography } from "../ui/designSystem/component/Typo/Typography";
import Image from "next/image";

export default function Space_dev() {
  return (
    <div className="w-full h-auto mt-52 md:mt-0 flex flex-col items-center justify-between px-6 md:px-16 py-12">
      {/* Bloc de texte */}
      <div className="flex flex-col w-full  items-start gap-8 md:text-left xs:text-center">
        <div className="flex flex-col  gap-4  px-5">
          <Typography variant="Heading_feature_section">
            Espace Développeur
          </Typography>
          <Typography variant="Supporting_text_feature_section">
            Accédez à notre documentation API, guides d’intégration <br /> et
            outils dédiés aux développeurs.
          </Typography>
        </div>

        <div className="flex flex-row w-screen ">
          {/* Image */}
          <div className="w-1/2  hidden md:block justify-center items-center mt-10">
            <Image
              src="/asset/Content(1).svg"
              width={600}
              height={560}
              alt=""
              className="rounded-lg max-w-1/2 h-auto"
            />
          </div>
          {/* Liste des avantages */}
          <div className="  flex flex-col  text-center md:text-left px-6 mr-9 justify-center">
            <Typography variant="Supporting_text_feature_section" className=" ">
              Notre API permet une intégration fluide et sécurisée avec vos{" "}
              plateformes existantes, que ce soit pour le e-commerce, les
              services financiers ou les applications mobiles.
            </Typography>

            <div className="space-y-4 ">
              {/* Premier bloc */}
              <div className=" flex flex-col items-center md:flex-row md:items-center  space-x-4">
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
                  className="flex gap-1 flex-col md:flex-row text-center items-center "
                >
                  <p className="font-extrabold text-center">
                    Endpoints sécurisés
                  </p>{" "}
                  pour gérer vos paiements et transactions
                </Typography>
              </div>
              {/* Premier bloc */}
              <div className="flex  flex-col md:flex-row items-center space-x-4 ">
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
                  <p className="font-extrabold text-center">Webhooks et SDKs</p>{" "}
                  pour automatiser vos processus
                </Typography>
              </div>{" "}
              {/* Premier bloc */}
              <div className=" flex  flex-col md:flex-row items-center space-x-4  ">
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
                  <p className="font-extrabold text-center">
                    Assistance technique
                  </p>{" "}
                  dédiée pour vous accompagner
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
