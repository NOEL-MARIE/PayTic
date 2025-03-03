"use client";
import clsx from "clsx";

interface ButtonProps {
  variant?:
    | "besoinAide"
    | "demanderDemo"
    | "demo"
    | "nousContacter"
    | "sAbonner";
  type?: "button" | "submit" | "reset"; // Ajout de la propriété type
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Button = ({
  variant = "demanderDemo",
  type = "button",  // Valeur par défaut "button"
  disabled,
  children,
  className,
}: ButtonProps) => {
  // Déclaration des styles pour chaque bouton
  let variantStyles: string = "";

  switch (variant) {
    case "besoinAide":
      variantStyles = `border border-gray-300 bg-white shadow-sm text-gray-700 hover:bg-gray-100`;
      break;
    case "demanderDemo":
      variantStyles = `border border-blue-500 bg-blue-500 text-white hover:bg-blue-600`;
      break;
    case "demo":
      variantStyles = `border border-gray-400 bg-white text-gray-700 hover:bg-gray-100`;
      break;
    case "nousContacter":
      variantStyles = `border border-blue-500 bg-blue-500 text-white hover:bg-blue-600`;
      break;
    case "sAbonner":
      variantStyles = `border border-blue-500 bg-blue-500 text-white hover:bg-blue-600`;
      break;
    default:
      variantStyles = `border border-blue-500 bg-blue-500 text-white hover:bg-blue-600`;
      break;
  }

  return (
    <button
      type={type}  // Utilisation de la prop `type`
      className={clsx(
        "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
        variantStyles,
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
