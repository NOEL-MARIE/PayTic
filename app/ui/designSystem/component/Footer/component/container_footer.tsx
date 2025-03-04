"use client";
import React from "react";

interface ContainerFooterProps {
  children: React.ReactNode;
}

export const Container_Footer: React.FC<ContainerFooterProps> = ({
  children,
}) => {
  return (
    <footer className="  p-4 md:p-16  flex flex-col md:flex-row items-center justify-between bg-NavBar_col text-white gap-10">
      {children}
    </footer>
  );
};
