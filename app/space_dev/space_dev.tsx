import React from "react";
import { Typography } from "../ui/designSystem/component/Typo/Typography";
import Image from "next/image";

export default function Space_dev() {
  return (
    <div className="w-screen h-screen flex flex-row  mb-16    md:px-8  sm:p-10 ">
      <div className="flex flex-col  w-screen h-screen justify-center items-start md:px-8 gap-16 ">
        {" "}
        <div className="flex flex-col gap-5 mt-6">
          <Typography variant="Heading_feature_section">
            Espace Développeur
          </Typography>
          <Typography variant="Supporting_text_feature_section">
            Accédez à notre documentation API, guides d’intégration <br /> et
            outils dédiés aux développeurs.
          </Typography>
        </div>
        <div className="flex flex-row">
          <div>
            <Image
              src="/asset/Content(1).svg"
              width={600}
              height={560}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col items-start justify-center space-y-6 pl-28 w-full">
            <Typography
              variant="Supporting_text_feature_section"
              className="w-full"
            >
              Notre API permet une intégration fluide et sécurisée avec vos{" "}
              <br />
              plateformes existantes, que ce soit pour le e-commerce, les
              services <br />
              financiers ou les applications mobiles.
            </Typography>

            <div className="space-y-4 w-full ml-9">
              <div className="flex items-center space-x-3">
                <Image
                  src="/asset/check-circle.svg"
                  width={28}
                  height={28}
                  alt=""
                  className="rounded-lg"
                />
                <Typography variant="Supporting_text_feature_section" className="flex gap-1">
                  <p className="font-extrabold">Endpoints sécurisés</p> pour gérer vos paiements et transactions
                </Typography>
              </div>

              <div className="flex items-center space-x-3">
                <Image
                  src="/asset/check-circle.svg"
                  width={28}
                  height={28}
                  alt=""
                  className="rounded-lg"
                />
                <Typography variant="Supporting_text_feature_section" className="flex gap-1">
                <p className="font-extrabold">Webhooks et SDKs</p> pour automatiser vos processus
                </Typography>
              </div>

              <div className="flex items-center flex-row space-x-3">
                <Image
                  src="/asset/check-circle.svg"
                  width={28}
                  height={28}
                  alt=""
                  className="rounded-lg"
                />
                <Typography variant="Supporting_text_feature_section" className="flex gap-1">
                <p className=" font-extrabold flex">Assistance technique</p> dédiée pour vous accompagner
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
