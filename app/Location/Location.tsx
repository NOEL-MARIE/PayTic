"use client";
import React, { useState } from "react";
import { Typography } from "../ui/designSystem/component/Typo/Typography";
import Image from "next/image";

export default function Location() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email soumis : ${email}`);
  };
  return (
    <div className="w-screen h-screen flex flex-row  pt-10   md:px-8   sm:p-10 bg-feature">
      <div className=" flex flex-col  h-screen justify-center items-start md:px-8">
        <Typography variant="Heading_feature_section">
          Où nous sommes disponibles ?
        </Typography>
        <Typography variant="Supporting_text_feature_section" theme="gray">
          Actuellement disponible en{" "}
          <span className=" font-extrabold ">Côte d'Ivoire</span> , nous
          travaillons activement pour <br /> élargir notre présence dans
          d’autres pays africains. Restez connectés,
          <br />
          <span className=" font-extrabold ">
            PayTic arrive bientôt près de chez vous !
          </span>
        </Typography>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex gap-4 pt-5 w-full flex-col justi items-start"
          >
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
            <p>S'inscrire à notre newsletter.</p>
          </form>
        </div>
      </div>
      <div>
        <Image
          src="/asset/Group.svg"
          alt=""
          width={509.76513671875}
          height={492.3746032714844}
        />
      </div>
    </div>
  );
}
