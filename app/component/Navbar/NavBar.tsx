"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      <div className="max-w-6xl mx-auto font-inriasans w-full px-4">
        <Container_Nav>
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Typography variant="Logo_text" className="pt-[6px]">
                <Image
                  src="/asset/Paytic(3).svg"
                  width={112}
                  height={26}
                  alt="PayTic.svg"
                />
              </Typography>
            </Link>

            {/* Menu navigation - Visible à partir de md */}
            <div className="hidden md:flex gap-6">
              <Typography variant="NavText">
                <Link
                  href="/Services"
                  className="hover:text-btn_col transition-all"
                >
                  Nos services
                </Link>
              </Typography>
              <Typography variant="NavText" theme="gray">
                <Link href="" className="hover:text-btn_col transition-all">
                  Nos tarifs
                </Link>
              </Typography>
              <Typography variant="NavText" theme="gray">
                <Link
                  href="/how-it-works"
                  className="hover:text-btn_col transition-all"
                >
                  Comment ça marche ?
                </Link>
              </Typography>
            </div>

            {/* Boutons - Affichés à partir de md */}
            <div className="hidden md:flex gap-4">
              <Button variant="besoinAide" className="md:text-[13px]">
                <Link href="/help"> Besoin d’aide</Link>
              </Button>
              <Button variant="demanderDemo" className="md:text-[px]">
                <Link href="/get-started"> Demander une démo</Link>
              </Button>
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
          className={`fixed w-full inset-0 bg-white transform ${
            isMenuOpen ? "translate-x-0 menu-mobile" : "-translate-x-full"
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
            <nav className="mt-6 flex flex-col border-t border-b divide-">
              <Typography variant="NavText" className="menu-item-left">
                <Link
                  href="/Services"
                  className="hover:bg-gray-100 transition-all"
                >
                  <p className="border-b hover:bg-gray-100 transition-all hover:pl-2">
                    Nos services
                  </p>
                </Link>
              </Typography>

              <Typography variant="NavText" theme="gray" className="menu-item-right">
                <Link
                  href="/nos-tarifs"
                  className="hover:bg-gray-100 transition-all"
                >
                  <p className="border-b hover:bg-gray-100 transition-all hover:pl-2">
                    Nos tarifs
                  </p>
                </Link>
              </Typography>

              <Typography variant="NavText" theme="gray" className="menu-item-left">
                <Link
                  href="/how-it-works"
                  className="hover:bg-gray-100 transition-all"
                >
                  <p className="hover:bg-gray-100 transition-all hover:pl-2">
                    Comment ça marche ?
                  </p>
                </Link>
              </Typography>
            </nav>

            {/* Boutons */}
            <div className="mt-6 flex flex-col gap-4">
              <Button variant="besoinAide" className="md:text-[13px] menu-item-left">
                <Link href="/help">Besoin d’aide</Link>
              </Button>
              <Button variant="demanderDemo" className="md:text-[px] menu-item-right">
                <Link href="/demo">Demander une démo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
