import React from "react";
import Navbar from "../Navbar/NavBar";
// import { Container_Nav } from "../../container/container_Nav";
// import { Container } from "../../container/container_";

interface Props {
  children: React.ReactNode;
  ClassName?: string;
}

export default function Layout({ }: Props) {
  return (
    <>
      <Navbar />
    </>
  );
}
