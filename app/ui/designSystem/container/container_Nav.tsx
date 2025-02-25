"use client";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container_Nav = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={clsx(
        "w-screen min-h-[60px] md:min-h-[80px] border-b border-[#F6F6F6] flex flex-row justify-between items-center px-4 md:px-8 flex-wrap",
        className
      )}
    >
      {children}
    </div>
  );
};
