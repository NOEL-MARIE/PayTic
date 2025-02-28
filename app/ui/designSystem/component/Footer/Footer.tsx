"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Container_Footer } from "./component/container_footer";
import { Typography } from "../../Typo/Typography";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear(); // Récupère l'année actuelle

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email soumis : ${email}`);
  };

  return (
    <Container_Footer>
      <div className="  w-full    flex flex-col md:items-start  md:justify-between gap-5 ">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 pb-14 ">
          {/* Bloc logo & liens */}
          <div className="flex flex-col items-start w-full md: gap-5">
            <Image
              src="/asset/Paytic(2).svg"
              alt="Paytic"
              width={112}
              height={32}
              className="w-[112px] h-auto"
            />
            <div className="flex flex-col md:text-[11px] md:flex-row gap-5">
              <Typography
                variant="Supporting_text_hero_section"
                theme="white"
                className="cursor-pointer hover:text-Nbg-NavBar_col"
              >
                Nos services
              </Typography>
              <Typography
                variant="Supporting_text_hero_section"
                theme="white"
                className="cursor-pointer hover:text-Nbg-NavBar_col"
              >
                Comment ça marche ?
              </Typography>
              <Typography
                variant="Supporting_text_hero_section"
                theme="white"
                className="cursor-pointer hover:text-Nbg-NavBar_col"
              >
                Documentation API
              </Typography>
            </div>
          </div>

          {/* Formulaire d'inscription à la newsletter */}
          <div className="w-full md:w-1/2 flex flex-col 2xl:items-end  md:items-start gap-4">
            <p className="   font-medium">
              S'inscrire à notre newsletter
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-center md:items-end 2xl:items-end gap-3 w-full md:w-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Saisissez votre e-mail"
                className="w-full md:w-[190px] h-[44px] px-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="w-full md:w-auto h-[44px] flex items-center justify-center px-4 border border-gray-300 rounded-md bg-NavBar_col text-white hover:bg-indigo-700 transition"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Ligne de séparation et mentions légales */}
        <div className="w-full border-t border-[#EDFAFF1A] pt-6 flex flex-col md:flex-row md justify-between items-center gap-4 text-sm text-gray-600">
          <Typography variant="Supporting_text_hero_section" theme="white">
            © {currentYear} DevStudio. Tous droits réservés.
          </Typography>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Typography
              variant="Supporting_text_hero_section"
              theme="white"
              className="hover:underline cursor-pointer"
            >
              Conditions
            </Typography>
            <Typography
              variant="Supporting_text_hero_section"
              theme="white"
              className="hover:underline cursor-pointer"
            >
              Vie privée
            </Typography>
            <Typography
              variant="Supporting_text_hero_section"
              theme="white"
              className="hover:underline cursor-pointer"
            >
              Cookies
            </Typography>
          </div>
        </div>
      </div>
    </Container_Footer>
  );
};
