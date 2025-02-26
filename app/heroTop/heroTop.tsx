import { Container_Hero } from "../ui/designSystem/component/Container_hero/Container_hero";
import { Button } from "@/app/ui/designSystem/button/buttons";
import { Typography } from "@/app/ui/designSystem/component/Typo/Typography";
import Image from "next/image";
import React from "react";

export default function HeroTop() {
  return (
    <>
      <div className="w-screen flex flex-col mt-11 xs:mt-0 px-4  flex-wrap   p-20">
        <div className="w-screen flex   md:flex-col md:items-center gap-20 px-4 ">
          {/* Section Texte */}
          <div className="flex flex-col w-full md:px-16 md:items-center  xs:text-center  h-full   2xl:w-1/2  ">
            <Typography
              variant="Heading_hero_section"
              theme="black"
               className="font-semibold flex"
            >
              Simplifiez et sécurisez <br /> vos paiements avec <br /> PayTic
            </Typography>

            <Typography
              variant="Supporting_text_hero_section"
              theme="gray"
              className="  mt-4 text-left w-full xs:px-7 xs:text-center  flex  "
            >
              La solution idéale pour les entreprises, commerçants 
              et entrepreneurs qui souhaitent une gestion efficace 
              et rapide des paiements en ligne.
            </Typography>

            <div className="mt-4 text-left xs:justify-center w-full xs:gap-3   gap-7 flex">
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
          <div className=" rounded-lg hidden md:block md:w-full    h-[640px] w-1/2 bg-cover bg-[30%] bg-[url(/asset/img.jpg)]">
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
