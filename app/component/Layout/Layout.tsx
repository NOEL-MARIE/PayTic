import React from "react";
import Navbar from "../Navbar/NavBar";
import { Container_Hero } from "@/app/ui/designSystem/component/Container_hero/Container_hero";
import { Footer } from "@/app/ui/designSystem/component/Footer/Footer";

// import { Container_Nav } from "../../container/container_Nav";
// import { Container } from "../../container/container_";

interface Props {
  children: React.ReactNode;
  ClassName?: string;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <>{children}</>
      <Footer/>
    </>
  );
}
