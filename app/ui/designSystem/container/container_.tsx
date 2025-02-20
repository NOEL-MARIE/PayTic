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
        "w-[1280px] h-[44px] max-w-[container-max-width-desktop] flex justify-between items-center ",
        className
      )}
    >
      {children}
    </div>
  );
};

