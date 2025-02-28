"use client";

import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container_Nav = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        className,
       "   mt-3 flex justify-between items-center "
      )}
    >
      {children}
    </div>
  );
};
