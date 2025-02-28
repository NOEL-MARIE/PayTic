"use client";

import { Container_Hero } from "../ui/designSystem/component/Container_hero/Container_hero";
import { Button } from "@/app/ui/designSystem/button/buttons";
import { Typography } from "@/app/ui/designSystem/component/Typo/Typography";
import Image from "next/image";
import React from "react";

export default function HeroTop() {
  return (
    <>
    <div className="max-w-6xl mx-auto w-full px-4"> 
      <div className="   flex flex-col pt-11 xs:mt-0  ">
        <div className=" flex flex-col md:justify-between md:flex-row md:gap-20 gap-1 ">
          {/* Section Texte */}
          <div className="flex flex-col   items-start  h-full ">
            <div className="   mt-20">
              {" "}
              <Typography
                variant="Heading_hero_section"
                theme="black"
                className="font-semibold text-center md:text-left"
              >
                Simplifiez et sécurisez <br /> vos paiements avec <br /> PayTic
              </Typography>
              <Typography
                variant="Supporting_text_hero_section"
                theme="gray"
                className="mt-4 px-11 md:px-0 text-center md:text-left "
              >
                La solution idéale pour les entreprises, commerçants et
                entrepreneurs qui souhaitent une gestion efficace et rapide des
                paiements en ligne.
              </Typography>
            </div>

            <div className="mt-4 w-full  flex flex-col items-center md:flex-row md:justify-start  justify-center gap-3">
              <Button
                variant="demo"
                className="flex flex-row gap-3 justify-center xs:justify-start items-center"
              >
                <Image
                  src="asset/Icon.svg"
                  alt="Icon_play.svg"
                  width={24}
                  height={24}
                />
                Demo
              </Button>
              <Button variant="nousContacter" className="xs:mt-0">
                Nous contacter
              </Button>
            </div>
          </div>

          {/* Section Image */}
          <div className="rounded-lg hidden  md:block md:w-screen h-[640px] W-[740px] bg-cover  bg-[30%] bg-[url(/asset/img.jpg)]">
            {/* <img
              src="/asset/img.jpg"
              alt="Icon_play.svg"
              className="w-full h-full"
            /> */}
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
