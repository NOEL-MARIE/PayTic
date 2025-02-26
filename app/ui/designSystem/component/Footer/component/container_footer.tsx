import React from "react";

interface ContainerFooterProps {
  children: React.ReactNode;
}

export const Container_Footer: React.FC<ContainerFooterProps> = ({ children }) => {
  return (
    <footer className="w-full h-auto p-4 md:p-16 lg:p-32 flex flex-col md:flex-row items-center justify-between bg-NavBar_col text-white gap-10">
      {children}
    </footer>
  );
};
