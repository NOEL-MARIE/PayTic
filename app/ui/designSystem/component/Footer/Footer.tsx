"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Container_Footer } from "./component/container_footer";
import { Typography } from "../../Typo/Typography";
import { motion } from "framer-motion"; // Importation de Framer Motion
import Link from "next/link";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear(); // Récupère l'année actuelle

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email soumis : ${email}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };

  const sectionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Container_Footer>
      <motion.div
        className="max-w-6xl mx-auto  font-inriasans w-full px-4   flex flex-col md:items-start  md:justify-between gap-5 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center w-full gap-8 pb-14 "
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Bloc logo & liens */}
          <div className="flex flex-col items-start w-full md: gap-5">
            <Image
              src="/asset/Paytic(2).svg"
              alt="Paytic"
              width={112}
              height={32}
              className="w-[112px] h-auto"
            />
            <div className="flex font-Inter flex-col md:text-[11px] md:flex-row gap-5">
              <Link href="/Services">
                <Typography
                  variant="Supporting_text_hero_section"
                  theme="white"
                  className="cursor-pointer hover:text-Nbg-NavBar_col"
                >
                  Nos services
                </Typography>
              </Link>
              <Link href="/api-docs">
                <Typography
                  variant="Supporting_text_hero_section"
                  theme="white"
                  className="cursor-pointer hover:text-Nbg-NavBar_col"
                >
                  Documentation API
                </Typography>
              </Link>
              <Link href="/contact">
                <Typography
                  variant="Supporting_text_hero_section"
                  theme="white"
                  className="cursor-pointer hover:text-Nbg-NavBar_col"
                >
                  Contact
                </Typography>
              </Link>
            </div>
          </div>

          {/* Formulaire d'inscription à la newsletter */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col 2xl:items-en  md:items-sta gap-4"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* <p className="   font-medium">S'inscrire à notre newsletter</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-center md:items-end 2xl:items-end gap-3 w-full md:w-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Saisissez votre e-mail"
                className="w-full  font-Inter  text-xs text-black h-[44px] px-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <motion.button
                type="submit"
                className="w-full md:w-auto h-[44px] font-Inter flex items-center justify-center px-4  rounded-md bg-btn_col text-white hover:bg-blue-900  transition"
                variants={sectionVariants}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                S'abonner
              </motion.button>
            </form> */}
          </motion.div>
        </motion.div>

        {/* Ligne de séparation et mentions légales */}
        <motion.div
          className="w-full border-t border-[#EDFAFF1A] font-Inter pt-6 flex flex-col md:flex-row md justify-between items-center gap-4 text-sm text-gray-600"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography variant="Supporting_text_hero_section" theme="white">
            &copy; {currentYear} DevStudio. Tous droits réservés.
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
        </motion.div>
      </motion.div>
    </Container_Footer>
  );
};
