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
  return (
    <motion.div
      className="container mx-auto p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-center text-3xl font-bold mb-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Drapeaux des pays de l'UEMOA
      </motion.h1>
      <motion.div
        className="grid grid-cols-4 gap-4"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Bénin */}
        <motion.div
          className="flex flex-col items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-6 h-6">
            <p className="absolute top-0 left-0 right-0 text-center text-xs font-semibold text-gray-700">
              Bientôt disponible
            </p>
            {/* <Image
              src="/asset/VISA.svg"
              alt="Bénin"
              width={24}
              height={24}
              className="w-full h-full grayscale opacity-60"
            /> */}
          </div>
        </motion.div>

        {/* Burkina Faso */}
        <motion.div
          className="flex flex-col items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-6 h-6">
            <p className="absolute top-0 left-0 right-0 text-center text-xs font-semibold text-gray-700">
              Bientôt disponible
            </p>
            {/* <Image
              src="/asset/T MONNEY.svg"
              alt="Burkina Faso"
              width={24}
              height={24}
              className="w-full h-full grayscale opacity-60"
            /> */}
          </div>
        </motion.div>

        {/* Côte d'Ivoire */}
        <motion.div
          className="flex flex-col items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-6 h-6">
            <p className="absolute top-0 left-0 right-0 text-center text-xs font-semibold text-gray-700">
              Bientôt disponible
            </p>
            {/* <Image
              src="/asset/RéseauFREE.svg"
              alt="Côte d'Ivoire"
              width={24}
              height={24}
              className="w-full h-full grayscale opacity-60"
            /> */}
          </div>
        </motion.div>

        {/* Guinée-Bissau */}
        <motion.div
          className="flex flex-col items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-6 h-6">
            <p className="absolute top-0 left-0 right-0 text-center text-xs font-semibold text-gray-700">
              Bientôt disponible
            </p>
            {/* <Image
              src="/asset/MASTER CARD.svg"
              alt="Guinée-Bissau"
              width={24}
              height={24}
              className="w-full h-full grayscale opacity-60"
            /> */}
          </div>
        </motion.div>

        {/* Mali */}
        <motion.div
          className="flex flex-col items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-6 h-6">
            <p className="absolute top-0 left-0 right-0 text-center text-xs font-semibold text-gray-700">
              Bientôt disponible
            </p>
            {/* <Image
              src="/asset/MALI.svg"
              alt="Mali"
              width={24}
              height={24}
              className="w-full h-full grayscale opacity-60"
            /> */}
          </div>
        </motion.div>

        {/* Niger */}
        <motion.div
          className="flex flex-col items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-6 h-6">
            <p className="absolute top-0 left-0 right-0 text-center text-xs font-semibold text-gray-700">
              Bientôt disponible
            </p>
            {/* <Image
              src="/asset/NIGER.svg"
              alt="Niger"
              width={24}
              height={24}
              className="w-full h-full grayscale opacity-60"
            /> */}
          </div>
        </motion.div>

        {/* Sénégal */}
        <motion.div
          className="flex flex-col items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-6 h-6">
            <p className="absolute top-0 left-0 right-0 text-center text-xs font-semibold text-gray-700">
              Bientôt disponible
            </p>
            {/* <Image
              src="/asset/SENEGAL.svg"
              alt="Sénégal"
              width={24}
              height={24}
              className="w-full h-full grayscale opacity-60"
            /> */}
          </div>
        </motion.div>

        {/* Togo */}
        <motion.div
          className="flex flex-col items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-6 h-6">
            <p className="absolute top-0 left-0 right-0 text-center text-xs font-semibold text-gray-700">
              Bientôt disponible
            </p>
            {/* <Image
              src="/asset/TOGO.svg"
              alt="Togo"
              width={24}
              height={24}
              className="w-full h-full grayscale opacity-60"
            /> */}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
