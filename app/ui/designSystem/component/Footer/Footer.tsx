"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Container_Footer } from "./component/container_footer";
import { Typography } from "../Typo/Typography";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear(); // Récupère l'année actuelle
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email soumis : ${email}`);
  };
  return (
    <Container_Footer>
      <div className="w-full ">
        <div className="flex flex-row items-center gap-48 justify-around ">
          {/* bloc du haut */}
          <div>
            {/* bloc de gauche */}
            <div className="gap-7 flex flex-col ">
              <Image
                src="/asset/Paytic(2).svg"
                alt="Paytic"
                width={111.96522521972656}
                height={32}
                className="items-start"
              />
              <div className="flex-row gap-7 flex ml-1">
                <p>Nos services</p>
                <p>Comment ça marche ?</p>
                <p>Documentation API</p>
              </div>
            </div>
            {/* bloc du bas */}
          </div>
          <div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex gap-4 p-2 w-full flex-col"
              >
                <p>S'inscrire à notre newsletter.</p>
                {/* Champ de saisie */}
                <div className="flex gap-5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Saisissez votre e-mail"
                    className="w-[239px] h-[44px] pt-2 pr-6 pb-2 pl-6 gap-2 border-1 border-gray-300 text-NavBar_col  rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  {/* Bouton d'abonnement */}
                  <button
                    type="submit"
                    className="w-[105px] h-[44px] flex items-center justify-center pt-2 pr-8 pb-2 pl-8 gap-2 border-1 border-gray-300 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
                  >
                    S'abonner
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className=" flex  justify-center item">
          <div className="flex flex-row w-screen  items-center gap-72 justify-between border-t border-gray-300 pt-4">
            <div className="mr-1">
              © {currentYear} DevStudio. All rights reserved.
            </div>
            <div className="flex gap-6">
              <p className="hover:underline cursor-pointer">Conditions</p>
              <p className="hover:underline cursor-pointer">Vie privée</p>
              <p className="hover:underline cursor-pointer">Cookies</p>
            </div>
          </div>
        </div>
      </div>
    </Container_Footer>
  );
};
