import clsx from "clsx";

interface HTWContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const HTW_Container = ({ children, className }: HTWContainerProps) => {
  return (
    <div
      className={clsx(
        " max-w-[384px] md:max-w-[288px]   h-auto min-w-[95px] flex flex-col lg:flex-col items-center justify-center gap-6  sm:p-5", // Utilisation de flex-col pour les petits écrans et flex-row pour les grands écrans
        className
      )}
    >
      {children}
    </div>
  );
};
