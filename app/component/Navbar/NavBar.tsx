"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/ui/designSystem/button/buttons";
import { Container_Nav } from "@/app/ui/designSystem/container/container_Nav";
import { Typography } from "@/app/ui/designSystem/Typo/Typography";
import { FaTimes, FaBars } from "react-icons/fa";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto w-full px-4"> 
      <Container_Nav>
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Typography variant="Logo_text" className="pt-[6px]">
              <Image
                src="/asset/Paytic(3).svg"
                width={112}
                height={26}
                alt="PayTic.svg"
              />
            </Typography>
          </div>

          {/* Menu navigation - Visible à partir de md */}
          <div className="hidden md:flex gap-6">
            <Typography variant="NavText">
              <p className="hover:text-btn_col transition-all">Nos services</p>
            </Typography>
            <Typography variant="NavText" theme="gray">
              <p className="hover:text-btn_col transition-all">Nos tarifs</p>
            </Typography>
            <Typography variant="NavText" theme="gray">
              <p className="hover:text-btn_col transition-all">Comment ça marche ?</p>
            </Typography>
          </div>

          {/* Boutons - Affichés à partir de md */}
          <div className="hidden md:flex gap-4">
            <Button variant="besoinAide" className="md:text-[13px]">Besoin d’aide</Button>
            <Button variant="demanderDemo" className="md:text-[px]">Demander une démo</Button>
          </div>

          {/* Icône burger pour mobile (visible uniquement en < md) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </Container_Nav>

      {/* Menu Mobile (couvrant tout l'écran avec effet de transition) */}
      <div
        className={`fixed inset-0 bg-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Contenu du menu mobile */}
        <div className="p-6 h-full flex flex-col">
          {/* Logo et bouton de fermeture */}
          <div className="flex justify-between items-center">
            <Typography variant="Logo_text" className="pt-[6px]">
              <Image
                src="/asset/Paytic(3).svg"
                width={112}
                height={26}
                alt="PayTic.svg"
              />
            </Typography>
            <button onClick={toggleMenu} className="text-2xl">
              <FaTimes />
            </button>
          </div>

          {/* Liens du menu */}
          <nav className="mt-6 flex flex-col gap-4 border-t border-b divide-y">
            {["Nos services", "Nos tarifs", "Comment ça marche ?"].map((item, index) => (
              <Typography key={index} variant="NavText" theme="gray">
                <p className="py-3 hover:bg-gray-100 transition-all hover:pl-2">{item}</p>
              </Typography>
            ))}
          </nav>

          {/* Boutons */}
          <div className="mt-6 flex flex-col gap-4">
            <Button variant="besoinAide">Besoin d’aide</Button>
            <Button variant="demanderDemo">Demander une démo</Button>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}
