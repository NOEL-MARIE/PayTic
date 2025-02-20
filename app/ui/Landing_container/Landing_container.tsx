import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const LandingContainer = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        "w-[1440px] h-[800px] pt-[7rem] pb-[9rem] gap-[7rem] flex justify-center items-center", // Styles du LandingContainer
        className
      )}
    >
      <div className="w-[1280px] h-[640px] max-w-[1280px] gap-[4rem] flex flex-col">
        {children}
      </div>
    </div>
  );
};
