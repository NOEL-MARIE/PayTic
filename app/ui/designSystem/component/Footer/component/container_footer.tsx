import React from "react";

interface ContainerFooterProps {
  children: React.ReactNode;
}

export const Container_Footer: React.FC<ContainerFooterProps> = ({ children }) => {
  return (
    <footer className="w-screen p-32 h-[320px] flex flex-col items-center justify-center bg-NavBar_col text-white  gap-20">
      {children}
    </footer>
  );
};
