import React from "react";
import { Typography } from "../ui/designSystem/component/Typo/Typography";
import Image from "next/image";
import { Button } from "../ui/designSystem/Typo/button/buttons";

export default function Paiement_method() {
  return (
    <div className="w-screen pt-60 md:pt-0 h-screen flex flex-col items-center justify-center py-10 px-4 sm:px-6 md:px-8 xs:mt-6 lg:px-12 xl:px-16">
      {/* Contenu principal */}
      <div className="w-full max-w-7xl flex flex-col items-center gap-8 Md:gap-14 text-center">
        
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
        <div className="w-full Md:w-[4440px] flex justify-center">
          <Image
            src="/asset/Container(1).svg"
            alt="Moyens de paiement"
            width={1280}
            height={88}
            className="w-full  max-w-4xl h-auto"
          />
        </div>

        {/* Bouton */}
        <div>
          <Button variant="Demander une démo">Nous contacter</Button>
        </div>
      </div>
    </div>
  );
}
