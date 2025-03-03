"use client";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { motion } from "framer-motion"; // Importation de Framer Motion
import { useState } from "react";

export default function HelpPage() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null); // État pour gérer la question sélectionnée

  const faqs = [
    {
      question: "Comment puis-je créer un compte ?",
      answer:
        "Pour créer un compte, cliquez sur le bouton 'Commencer maintenant'...",
    },
    {
      question: "Comment réinitialiser mon mot de passe ?",
      answer:
        "Si vous avez oublié votre mot de passe, cliquez sur 'Se connecter'...",
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer:
        "Nous acceptons les cartes de crédit (Visa, Mastercard, American Express)...",
    },
    {
      question: "Comment puis-je annuler mon abonnement ?",
      answer: "Pour annuler votre abonnement, connectez-vous à votre compte...",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Oui, la sécurité de vos données est notre priorité...",
    },
    {
      question: "Puis-je exporter mes données ?",
      answer: "Oui, vous pouvez exporter vos données à tout moment...",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };

  const sectionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const handleQuestionClick = (index: number) => {
    setSelectedQuestion(selectedQuestion === index ? null : index); // Basculer la sélection
  };

  return (
    <motion.div
      className="container mx-auto py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold tracking-tight mb-2">Besoin d'aide ?</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trouvez des réponses à vos questions et obtenez le support dont vous
            avez besoin
          </p>
        </motion.div>

        <motion.div
          className="relative mb-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="pl-10 py-2 w-full border rounded-md"
          />
        </motion.div>

        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                className="border-b py-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <summary
                  className={`cursor-pointer font-medium ${
                    selectedQuestion === index ? "text-blue-500" : "text-gray-900"
                  }`}
                  onClick={() => handleQuestionClick(index)} // Gérer la sélection de la question
                >
                  {faq.question}
                </summary>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-100 rounded-lg p-8 text-center mt-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Besoin d'aide supplémentaire ?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Notre équipe de support est prête à vous aider avec toutes vos
            questions. N'hésitez pas à nous contacter directement.
          </p>
          <Link
            href="/contact"
            className="bg-btn_col text-white px-6 py-2 rounded-lg hover:bg-blue-400"
          >
            Contactez-nous
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
