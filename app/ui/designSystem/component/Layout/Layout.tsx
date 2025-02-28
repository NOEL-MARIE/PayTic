import React from "react";
import { Footer } from "../Footer/Footer";
import NavBar from "@/app/component/Navbar/NavBar";
import { Container } from "../container_/Container";

interface Props {
  children: React.ReactNode;
  ClassName?: string;
}

export default function Layout({ children }: Props) {
  return (
    <>
      {/* Ajout de max-w-6xl */}
      <NavBar />
      {children}

      <Footer />
    </>
  );
}
