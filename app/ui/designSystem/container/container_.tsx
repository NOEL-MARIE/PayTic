"use client";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={clsx(
        "w-screen  flex justify-between items-center px-4 md:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};
