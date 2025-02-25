"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/ui/designSystem/button/buttons";
import { Container_Nav } from "@/app/ui/designSystem/container/container_Nav";
import { Typography } from "@/app/ui/designSystem/Typo/Typography";
import { Container } from "@/app/ui/designSystem/container/container_";
import { FaTimes, FaBars } from "react-icons/fa"; // Icônes hamburger & fermeture

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État du menu mobile

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"; // Empêche le scroll sur mobile
  };

  return (
    <Container_Nav>
      <Container>
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/asset/Paytic(3).svg"
            width={112}
            height={26}
            alt="PayTic"
            className="w-[112px] h-auto"
          />
        </div>

        {/* Menu pour les écrans larges */}
        <nav className="hidden lg:mr-8  lg:flex gap-8 ml-24 items-center">
          <Typography
            variant="NavText"
            className="hover:text-indigo-600 cursor-pointer"
          >
            Nos services
          </Typography>
          <Typography
            variant="NavText"
            className="hover:text-indigo-600 cursor-pointer"
          >
            Nos tarifs
          </Typography>
          <Typography
            variant="NavText"
            className="hover:text-indigo-600 cursor-pointer"
          >
            Comment ça marche ?
          </Typography>
        </nav>

        {/* Boutons */}
        <div className="hidden lg:flex gap-4">
          <Button variant="besoinAide">Besoin d’aide</Button>
          <Button variant="demanderDemo">Demander une démo</Button>
        </div>

        {/* Icône hamburger pour mobile */}
        <button onClick={toggleMenu} className="lg:hidden text-3xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu mobile */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-6`}
        >
          {/* Logo et bouton de fermeture */}
          <div className="absolute top-6 left-6">
            <Image
              src="/asset/Paytic(3).svg"
              width={112}
              height={26}
              alt="PayTic"
            />
          </div>
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-3xl"
          >
            <FaTimes />
          </button>

          {/* Liens du menu mobile */}
          <nav className="flex flex-col items-center gap-4 text-lg">
            <Typography
              variant="NavText"
              className="hover:text-indigo-600 cursor-pointer"
            >
              Nos services
            </Typography>
            <Typography
              variant="NavText"
              className="hover:text-indigo-600 cursor-pointer"
            >
              Nos tarifs
            </Typography>
            <Typography
              variant="NavText"
              className="hover:text-indigo-600 cursor-pointer"
            >
              Comment ça marche ?
            </Typography>
          </nav>

          {/* Boutons dans le menu mobile */}
          <div className="flex flex-col gap-4">
            <Button variant="besoinAide">Besoin d’aide</Button>
            <Button variant="demanderDemo">Demander une démo</Button>
          </div>
        </div>
      </Container>
    </Container_Nav>
  );
}
