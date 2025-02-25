import { Container_Hero } from "../ui/designSystem/component/Container_hero/Container_hero";
import { Button } from "@/app/ui/designSystem/button/buttons";
import { Typography } from "@/app/ui/designSystem/component/Typo/Typography";
import Image from "next/image";
import React from "react";

export default function HeroTop() {
  return (
    <>
      <div className="w-screen h-screen text-text_navigation pt-40 flex flex-row justify-between items-center    md:px-8 ">
        <div className="w-screen h-screen flex justify-between items-center gap- md:px-8 ">
          {/* Section Texte */}
          <div className="flex flex-col h-full w-1/2 justify-center ">
            <Typography
              variant="Heading_hero_section"
              theme="black"
              className="font-semibold text-center lg:text-left"
            >
              Simplifiez et sécurisez <br /> vos paiements avec <br /> PayTic
            </Typography>

            <Typography
              variant="Supporting_text_hero_section"
              theme="gray"
              className="text-center lg:text-left mt-4"
            >
              La solution idéale pour les entreprises, commerçants <br />
              et entrepreneurs qui souhaitent une gestion efficace <br />
              et rapide des paiements en ligne.
            </Typography>

            <div className="flex flex-col sm:flex-row gap-3 mt-9 items-center justify-center lg:justify-start">
              <Button
                variant="demo"
                className="flex flex-row gap-3 justify-end items-center"
              >
                <Image
                  src="asset/Icon.svg"
                  alt="Icon_play.svg"
                  width={24}
                  height={24}
                />
                Demo
              </Button>
              <Button variant="nousContacter">Nous contacter</Button>
            </div>
          </div>
          {/* Section Image */}
          <div className="rounded-lg  h-[640px] w-1/2 bg-cover bg-[30%] bg-[url(/asset/img.jpg)]">
            {/* <img
              src="/asset/img.jpg"
              alt="Icon_play.svg"
              className=" w-full h-full "
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
