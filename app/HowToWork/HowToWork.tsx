"use client";
import React from "react";
import { Typography } from "../ui/designSystem/Typo/Typography";
import Image from "next/image";
import { HTW_Container } from "./component/HTW_Container";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa"; // Icône de sécurité

export default function HowToWork() {
  return (
    <div className="bg-feature ">
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="pb-2 flex flex-col bg-feature">
          <Typography
            variant="Heading_feature_section"
            theme="black"
            className="text-center mt-5"
          >
            Nos Services
          </Typography>
          <div className="mb-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="Md:mt-7"
              >
                <HTW_Container>
                  <div className="bg-white w-[48px] h-[48px] flex items-center shadow-md justify-center rounded-lg">
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7H23M3 1H21C22.1046 1 23 1.89543 23 3V15C23 16.1046 22.1046 17 21 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1Z"
                        stroke="#007AFF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <Typography variant="HeaderIcon_Section">
                    Encaissements en ligne
                  </Typography>
                  <Typography variant="Text_featico" theme="gray">
                    Acceptez Mobile Money, cartes bancaires, virements et bien
                    plus. PayTic prend en charge une large gamme de méthodes de
                    paiement pour offrir à vos clients plus de flexibilité et
                    maximiser votre taux de conversion.
                  </Typography>
                </HTW_Container>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <HTW_Container>
                  <div className="bg-white w-[48px] h-[48px] flex items-center shadow-md justify-center rounded-lg">
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M23 19V17C22.9993 16.1137 22.7044 15.2528 22.1614 14.5523C21.6184 13.8519 20.8581 13.3516 20 13.13M16 1.13C16.8604 1.3503 17.623 1.8507 18.1676 2.55231C18.7122 3.25392 19.0078 4.11683 19.0078 5.005C19.0078 5.89317 18.7122 6.75608 18.1676 7.45769C17.623 8.1593 16.8604 8.6597 16 8.88M13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5Z"
                        stroke="#007AFF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <Typography variant="HeaderIcon_Section">
                    Versements de masse
                  </Typography>
                  <Typography variant="Text_featico" theme="gray">
                    Automatisez vos paiements vers plusieurs bénéficiaires en un
                    seul clic. Idéal pour les entreprises qui gèrent des
                    paiements réguliers comme la paie, les remboursements ou les
                    paiements fournisseurs.
                  </Typography>
                </HTW_Container>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <HTW_Container>
                  <div className="bg-white w-[48px] h-[48px] flex items-center shadow-md justify-center rounded-lg">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1C15.2044 1 14.4413 1.31607 13.8787 1.87868C13.3161 2.44129 13 3.20435 13 4V16C13 16.7956 13.3161 17.5587 13.8787 18.1213C14.4413 18.6839 15.2044 19 16 19C16.7956 19 17.5587 18.6839 18.1213 18.1213C18.6839 17.5587 19 16.7956 19 16C19 15.2044 18.6839 14.4413 18.1213 13.8787C17.5587 13.3161 16.7956 13 16 13H4C3.20435 13 2.44129 13.3161 1.87868 13.8787C1.31607 14.4413 1 15.2044 1 16C1 16.7956 1.31607 17.5587 1.87868 18.1213C2.44129 18.6839 3.20435 19 4 19C4.79565 19 5.55871 18.6839 6.12132 18.1213C6.68393 17.5587 7 16.7956 7 16V4C7 3.20435 6.68393 2.44129 6.12132 1.87868C5.55871 1.31607 4.79565 1 4 1C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4C1 4.79565 1.31607 5.55871 1.87868 6.12132C2.44129 6.68393 3.20435 7 4 7H16C16.7956 7 17.5587 6.68393 18.1213 6.12132C18.6839 5.55871 19 4.79565 19 4C19 3.20435 18.6839 2.44129 18.1213 1.87868C17.5587 1.31607 16.7956 1 16 1Z"
                        stroke="#007AFF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <Typography variant="HeaderIcon_Section">
                    API & Intégration
                  </Typography>
                  <Typography variant="Text_featico" theme="gray">
                    Intégrez facilement PayTic à vos plateformes e-commerce, ERP
                    et applications via une API puissante et flexible. Une
                    documentation claire et des outils dédiés aux développeurs
                    simplifient le processus d’intégration.
                  </Typography>
                </HTW_Container>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <HTW_Container>
                  <div className="bg-white w-[48px] h-[48px] flex items-center shadow-md justify-center rounded-lg">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 6L13.5 15.5L8.5 10.5L1 18M23 6H17M23 6V12"
                        stroke="#007AFF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <Typography variant="HeaderIcon_Section">
                    Tableau de bord avancé
                  </Typography>
                  <Typography variant="Text_featico" theme="gray">
                    Surveillez et analysez vos transactions en temps réel grâce
                    à un tableau de bord détaillé. Obtenez des insights
                    précieux, suivez vos flux financiers et optimisez votre
                    gestion de trésorerie en quelques clics.
                  </Typography>
                </HTW_Container>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <HTW_Container>
                  <div className="bg-white w-[48px] h-[48px] flex items-center shadow-md justify-center rounded-lg">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 15.9201V18.9201C21.0011 19.1986 20.9441 19.4743 20.8325 19.7294C20.7209 19.9846 20.5573 20.2137 20.3521 20.402C20.1468 20.5902 19.9046 20.7336 19.6407 20.8228C19.3769 20.912 19.0974 20.9452 18.82 20.9201C15.7428 20.5857 12.787 19.5342 10.19 17.8501C7.77382 16.3148 5.72533 14.2663 4.18999 11.8501C2.49997 9.2413 1.44824 6.27109 1.11999 3.1801C1.095 2.90356 1.12787 2.62486 1.21649 2.36172C1.30512 2.09859 1.44756 1.85679 1.63476 1.65172C1.82196 1.44665 2.0498 1.28281 2.30379 1.17062C2.55777 1.05843 2.83233 1.00036 3.10999 1.0001H6.10999C6.5953 0.995321 7.06579 1.16718 7.43376 1.48363C7.80173 1.80008 8.04207 2.23954 8.10999 2.7201C8.23662 3.68016 8.47144 4.62282 8.80999 5.5301C8.94454 5.88802 8.97366 6.27701 8.8939 6.65098C8.81415 7.02494 8.62886 7.36821 8.35999 7.6401L7.08999 8.9101C8.51355 11.4136 10.5864 13.4865 13.09 14.9101L14.36 13.6401C14.6319 13.3712 14.9751 13.1859 15.3491 13.1062C15.7231 13.0264 16.1121 13.0556 16.47 13.1901C17.3773 13.5286 18.3199 13.7635 19.28 13.8901C19.7658 13.9586 20.2094 14.2033 20.5265 14.5776C20.8437 14.9519 21.0122 15.4297 21 15.9201Z"
                        stroke="#007AFF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <Typography variant="HeaderIcon_Section">
                    Support client 24/7
                  </Typography>
                  <Typography variant="Text_featico" theme="gray">
                    Bénéficiez d’un service client réactif et personnalisé,
                    disponible 24h/24 et 7j/7 pour vous accompagner dans la
                    gestion de vos paiements et répondre à toutes vos questions.
                  </Typography>
                </HTW_Container>
              </motion.div>

              {/* Nouveau bloc "Sécurité et Stabilité" */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <HTW_Container>
                  <div className="bg-white w-[48px] h-[48px] flex items-center shadow-md justify-center rounded-lg">
                    <FaShieldAlt color="#3b82f6" size={24} />
                  </div>
                  <Typography variant="HeaderIcon_Section">
                    Sécurité et Stabilité
                  </Typography>
                  <Typography variant="Text_featico" theme="gray">
                    Protégez vos données et respectez les réglementations grâce
                    à une infrastructure fiable et sécurisée. Nous mettons en
                    place des mesures de sécurité avancées. 
                  </Typography>
                </HTW_Container>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
