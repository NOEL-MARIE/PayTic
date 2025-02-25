"use client";
import clsx from "clsx";
import React from "react";

interface ContainerHeroProps {
  children: React.ReactNode;
  className?: string;
}

export const Container_Hero = ({ children, className }: ContainerHeroProps) => {
  return (
    <div
      className={clsx(
        className,
        "w-screen h-screen flex   max-w-full overflow-hidden overflow-x-hidden"
      )}
    >
      {children}
    </div>
  );
};
