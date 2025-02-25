import React from "react";
import { Typography } from "../ui/designSystem/component/Typo/Typography";
import Image from "next/image";
import { Button } from "../ui/designSystem/Typo/button/buttons";

export default function Paiement_method() {
  return (
    <div className="w-screen  flex flex-col justify-center items-center h-screen  pt-10   md:px-8 ">
      <div className="w-screen h-screen  flex flex-col justify-center items-center gap-14 md:px-8">
        <Typography variant="Heading_feature_section" className="text-center">
          Moyens de paiement disponibles
        </Typography>

        <Typography
          theme="gray"
          variant="Supporting_text_feature_section"
          className="text-center w-[768px] h-[104px] overflow-auto mx-auto"
        >
          Nous mettons à votre disposition une large gamme de solutions de
          paiement, adaptées aux besoins des entreprises et des particuliers,
          garantissant des transactions rapides, sécurisées et accessibles à
          tous. De nouveaux moyens de paiement seront bientôt disponibles pour
          encore plus de flexibilité.
        </Typography>

        <div>
          <Image
            src="/asset/Container(1).svg"
            alt=""
            width={1280}
            height={88}
          />
        </div>
        <div>
          <Button variant="Demander une démo">Nous contacter</Button>
        </div>
      </div>
    </div>
  );
}
