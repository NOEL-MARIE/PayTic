"use client";
import React, { useState } from "react";
import Image from "next/image";

import { Button } from "@/app/ui/designSystem/button/buttons";
import { Container_Nav } from "@/app/ui/designSystem/container/container_Nav";
import { Typography } from "@/app/ui/designSystem/Typo/Typography";
import { Container } from "@/app/ui/designSystem/container/container_";
import { FaTimes, FaBars } from "react-icons/fa"; // Utilisation des icônes React (FaTimes pour quitter et FaBars pour hamburger)

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State pour gérer l'ouverture du menu sur mobile

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Container_Nav>
        <Container className="">
          {/* Logo et titre */}
          <div className="flex items-center gap-2 w-1/4">
            <Typography variant="Logo_text" className="pt-[6px]">
              <Image
                src="/asset/Paytic(3).svg"
                width={111.96522521972656}
                height={26}
                alt="PayTic.svg"
              />
            </Typography>
          </div>

          {/* Menu navigation pour les écrans larges */}
          <div className="hidden md:flex gap-4 ">
            <Typography variant="NavText">
              <p>Nos services</p>
            </Typography>
            <Typography variant="NavText" theme="gray">
              <p>Nos tarifs</p>
            </Typography>
            <Typography variant="NavText" theme="gray">
              <p>Comment ça marche ?</p>
            </Typography>
          </div>

          {/* Boutons */}
          <div className="hidden md:flex gap-4">
            <Button variant="besoinAide">Besoin d’aide</Button>
            <Button variant="demanderDemo">Demander une démo</Button>
          </div>

          {/* Icône hamburger pour mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? (
                <FaTimes /> // Icône de fermeture
              ) : (
                <FaBars /> // Icône hamburger
              )}
            </button>
          </div>

          {/* Menu déroulant sur mobile */}
          {isMenuOpen && (
            <div className="md:hidden bg-white h-full  absolute top-0 left-0 w-full  p-6 flex flex-col items-center gap-4">
              {/* Logo + Icône de fermeture */}
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                  <Typography variant="Logo_text" className="pt-[6px]">
                    <Image
                      src="/asset/Paytic(3).svg"
                      width={111.96522521972656}
                      height={26}
                      alt="PayTic.svg"
                    />
                  </Typography>
                </div>
                <button onClick={toggleMenu} className="text-2xl">
                  <FaTimes /> {/* Icône pour quitter */}
                </button>
              </div>

              {/* Liens du menu */}
              <div className="flex flex-col items-center justify-around pl-10 gap-4">
                <Typography variant="NavText" theme="gray">
                  <p className="hover:bg-btn_col">Nos services</p>
                </Typography>
                <Typography variant="NavText" theme="gray">
                  <p className="hover:bg-btn_col">Nos tarifs</p>
                </Typography>
                <Typography variant="NavText" theme="gray">
                  <p className="hover:bg-btn_col">Comment ça marche ?</p>
                </Typography>
              </div>

              {/* Boutons dans le menu */}
              <div className="flex flex-col gap-4 mt-6">
                <Button variant="besoinAide">Besoin d’aide</Button>
                <Button variant="demanderDemo">Demander une démo</Button>
              </div>
            </div>
          )}
        </Container>
      </Container_Nav>
    </div>
  );
}
