import clsx from "clsx";

interface HTWContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const HTW_Container = ({ children, className }: HTWContainerProps) => {
  return (
    <div
      className={clsx(
        "w-screen max-w-[384px] md:max-w-[234px] px-6  h-auto min-w-[320px] flex flex-col lg:flex-col items-center justify-center gap-6 p-6 sm:p-4", // Utilisation de flex-col pour les petits écrans et flex-row pour les grands écrans
        className
      )}
    >
      {children}
    </div>
  );
};
