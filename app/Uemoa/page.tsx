"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
};

const sectionVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function UemoaPage() {
  const countries = [
    { name: "Côte d'Ivoire", src: "/asset/CI.svg", alt: "Côte d'Ivoire" },
    { name: "Bénin", src: "/asset/BJ.svg", alt: "Bénin" },
    { name: "Burkina Faso", src: "/asset/BF.svg", alt: "Burkina Faso" },
    { name: "Guinée-Bissau", src: "/asset/GW.svg", alt: "Guinée-Bissau" },
    { name: "Mali", src: "/asset/ML.svg", alt: "Mali" },
    { name: "Niger", src: "/asset/Niger.svg", alt: "Niger" },
    { name: "Sénégal", src: "/asset/SN.svg", alt: "Sénégal" },
    { name: "Togo", src: "/asset/TG.svg", alt: "Togo" },
  ];

  return (
    <motion.div
      className="pt-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {countries.map((country) => (
          <motion.div
            key={country.name}
            className="flex flex-col items-center justify-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className={`relative w-12 h-12 ${
                country.name !== "Côte d'Ivoire" ? "grayscale" : ""
              }`}
            >
              <Image
                src={country.src}
                alt={country.alt}
                width={84}
                height={84}
                className=""
              />
            </div>
            {country.name !== "Côte d'Ivoire" && (
              <div className="capitalize  text-xs font-inriasans text-gray-500">
                Bientôt Disponible
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
