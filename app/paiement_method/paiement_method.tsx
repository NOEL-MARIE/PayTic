import React from "react";
import { Typography } from "../ui/designSystem/component/Typo/Typography";
import Image from "next/image";
import { Button } from "../ui/designSystem/Typo/button/buttons";

export default function Paiement_method() {
  return (
    <div className=" mb-6 md:pb-0 justify-centr items-enter md:mb-0 md:pt-16 lg:mb-16 sm:pt-48 pt-9 mt-3  flex flex-col    px-4  md:px-8  ">
      {/* Contenu principal */}
      <div className="  flex flex-col items-center gap-8  text-center">
        
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
        <div className=" gap-2 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8">
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
            src="/asset/VISA.svg"
            alt="Moyens de paiement"
            width={1280}
            height={88}
            className="w-full  max-w-4xl h-auto"
          />
          <Image
            src="/asset/T MONNEY.svg"
            alt="Moyens de paiement"
            width={1280}
            height={88}
            className="w-full  max-w-4xl h-auto"
          />
          <Image
            src="/asset/RéseauFREE.svg"
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
          <Image
            src="/asset/MASTER CARD.svg"
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
