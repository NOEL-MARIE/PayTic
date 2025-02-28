import React from "react";
import { Typography } from "../ui/designSystem/Typo/Typography";
import Image from "next/image";
import { HTW_Container } from "./component/HTW_Container";

export const HowToWork = () => {
  return (
    <div className="bg-feature">
      <div className=" pb-2   flex flex-col  bg-feature    ">
        <Typography
          variant="Heading_feature_section"
          theme="black"
          className=" text-center mt-5  "
        >
          Nos Services
        </Typography>
        <div className=" mb-7  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8  justify-items-center">
            <HTW_Container className="Md:mt-7">
              <Image
                src="asset/First_Icon.svg"
                width={48}
                height={48}
                alt="first image"
              />
              <Typography variant="HeaderIcon_Section">
                Encaissements en ligne
              </Typography>
              <Typography variant="Text_featico" className="">
                {" "}
                Acceptez Mobile Money, cartes bancaires, virements et bien plus.
                PayTic prend en charge une large gamme de méthodes de paiement
                pour offrir à vos clients plus de flexibilité et maximiser votre
                taux de conversion.
              </Typography>
            </HTW_Container>

            <HTW_Container>
              <Image
                src="asset/Second_Icon.svg"
                width={48}
                height={48}
                alt="second image"
              />
              <Typography variant="HeaderIcon_Section">
                Versements de masse
              </Typography>
              <Typography variant="Text_featico">
                {" "}
                Automatisez vos paiements vers plusieurs bénéficiaires en un
                seul clic. Idéal pour les entreprises qui gèrent des paiements
                réguliers comme la paie, les remboursements ou les paiements
                fournisseurs
              </Typography>
            </HTW_Container>

            <HTW_Container>
              <Image
                src="asset/Third_Icon.svg"
                width={48}
                height={48}
                alt="third image"
              />
              <Typography variant="HeaderIcon_Section">
                API & Intégration
              </Typography>
              <Typography variant="Text_featico">
                {" "}
                Intégrez facilement PayTic à vos plateformes e-commerce, ERP et
                applications via une API puissante et flexible. Une
                documentation claire et des outils dédiés aux développeurs
                simplifient le processus d’intégration.
              </Typography>
            </HTW_Container>

            <HTW_Container>
              <Image
                src="asset/Forth_Icon.svg"
                width={48}
                height={48}
                alt="forth image"
              />
              <Typography variant="HeaderIcon_Section">
                Tableau de bord avancé
              </Typography>
              <Typography variant="Text_featico">
                {" "}
                Surveillez et analysez vos transactions en temps réel grâce à un
                tableau de bord détaillé. Obtenez des insights précieux, suivez
                vos flux financierset optimisez votre gestion de trésorerie en
                quelques clics.
              </Typography>
            </HTW_Container>

            <HTW_Container>
              <Image
                src="asset/Fith_Icon.svg"
                width={48}
                height={48}
                alt="fifth image"
              />
              <Typography variant="HeaderIcon_Section">
                Support client 24/7
              </Typography>
              <Typography variant="Text_featico">
                {" "}
                Bénéficiez d’un service client réactif et personnalisé,
                disponible 24h/24 et 7j/7 pourvous accompagner dans la gestion
                de vos paiements et répondre à toutes vos questions.
              </Typography>
            </HTW_Container>
          </div>
        </div>
      </div>
    </div>
  );
};
