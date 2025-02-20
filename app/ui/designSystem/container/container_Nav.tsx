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
        "w-full h-[80px] border-b border-[#F6F6F6] flex flex-row justify-center items-center",
        className
      )}
    >
       
      {children}
    </div>
  );
};


