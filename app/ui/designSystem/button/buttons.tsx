"use client";
import clsx from "clsx";

interface ButtonProps {
  variant?:
    | "besoinAide"
    | "demanderDemo"
    | "demo"
    | "nousContacter"
    | "sAbonner";
  disabled?: boolean;
  isLoading?: boolean;
  className?: string; // Correction : className au lieu de ClassName
  children?: React.ReactNode;
}

export const Button = ({
  variant = "demanderDemo", // Valeur par défaut
  disabled,
  children,
  className, // Correction : className au lieu de ClassName
}: ButtonProps) => {
  // Déclaration des styles pour chaque bouton
  let variantStyles: string = "";

  switch (variant) {
    case "besoinAide":
      variantStyles = `w-[126px] h-[44px] pt-[10px] pr-[spacing-xl] pb-[10px] pl-[spacing-xl] gap-[spacing-sm] border-[1px] border-[#E7E7E7] bg-[#FFFFFF] shadow-[0px_1px_2px_0px_#1018280D] rounded-md`;
      break;
    case "demanderDemo":
      variantStyles = `w-[177px] text-white h-[44px] pt-[10px] pr-[spacing-xl] pb-[10px] pl-[spacing-xl] gap-[spacing-sm] border-[1px] border-[#007AFF] bg-[#007AFF] shadow-[0px_1px_2px_0px_#1018280D] rounded-md`;
      break;
    case "demo":
      variantStyles = `w-[128px] h-[48px] pt-[10px] pr-[22px] pb-[10px] pl-[22px] gap-[10px] border-[1px] border-[#D1D1D1] bg-[#FFFFFF] shadow-[0px_1px_2px_0px_#1018280D] rounded-md`;
      break;
    case "nousContacter":
      variantStyles = `w-[168px] h-[48px] pt-[10px] pr-[22px] pb-[10px] pl-[22px] gap-[10px] border-[1px] border-[#007AFF] bg-[#007AFF] shadow-[0px_1px_2px_0px_#1018280D] rounded-md`;
      break;
    case "sAbonner":
      variantStyles = `w-[105px] text-white h-[44px] pt-[10px] pr-[spacing-xl] pb-[10px] pl-[spacing-xl] gap-[spacing-sm] border-[1px] border-[#007AFF] bg-[#007AFF] shadow-[0px_1px_2px_0px_#1018280D] rounded-md`;
      break;
    default:
      variantStyles = `w-[177px] h-[44px] pt-[10px] pr-[spacing-xl] pb-[10px] pl-[spacing-xl] gap-[spacing-sm] border-[1px] border-[#007AFF] bg-[#007AFF] shadow-[0px_1px_2px_0px_#1018280D] rounded-md`;
      break;
  }

  return (
    <button
      type="button"
      className={clsx(variantStyles, className)} // Ajout de className ici
      disabled={disabled}
    >
      {children}
    </button>
  );
};
