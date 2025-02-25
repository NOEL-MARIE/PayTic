"use client";
import clsx from "clsx";
import React from "react";

interface ContainerHeroProps {
  children: React.ReactNode;
  className?: string;
}

export const Container_int = ({ children, className }: ContainerHeroProps) => {
  return (
    <div
      className={clsx(
        "    flex  items-center justify-center w-screen",

        className
      )}
    >
      {children}
    </div>
  );
};
