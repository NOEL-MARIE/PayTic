"use client";
import clsx from "clsx";

interface Props {
  variant?: "Besoin d’aide" | "Demander une démo" | "Demo" | "Nous contacter";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = "Demander une démo",
  disabled,
  children,
  className,
}: Props) => {
  let variantStyles = "";

  switch (variant) {
    case "Demander une démo":
      variantStyles =
        "w-[177px] h-[44px] px-6 py-[10px] border border-[#007AFF] bg-[#007AFF] text-white text-[14px] font-semibold rounded-[8px] shadow-[0px_1px_2px_0px_#1018280D] hover:bg-[#005FCC] hover:text-white transition-all duration-300 ease-in-out";
      break;

    case "Besoin d’aide":
      variantStyles =
        "w-[200px] h-[44px] px-6 py-[10px] border border-[#007AFF] bg-white text-[#007AFF] text-[14px] font-semibold rounded-[8px] shadow-[0px_1px_2px_0px_#1018280D] hover:bg-[#007AFF] hover:text-white transition-all duration-300 ease-in-out";
      break;

    case "Demo":
      variantStyles =
        "w-[168px] h-[48px] px-[22px] py-[10px] border border-[#007AFF] bg-white text-[#007AFF] text-[14px] font-semibold rounded-[8px] shadow-[0px_1px_2px_0px_#1018280D] hover:bg-[#007AFF] hover:text-white transition-all duration-300 ease-in-out";
      break;

    case "Nous contacter":
      variantStyles =
        "w-[128px] h-[48px] px-[22px] py-[10px] border border-[#D1D1D1] bg-white text-[#101828] text-[14px] font-semibold rounded-[8px] shadow-[0px_1px_2px_0px_#1018280D] hover:bg-[#D1D1D1] hover:text-white transition-all duration-300 ease-in-out";
      break;

    default:
      break;
  }

  return (
    <button
      type="button"
      className={clsx(
        "w-auto min-w-[126px] h-[44px] px-6 py-[10px] border border-[#007AFF] text-[14px] font-semibold rounded-[8px] shadow-[0px_1px_2px_0px_#1018280D] flex items-center justify-center transition-all duration-300 ease-in-out",
        variantStyles,
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
