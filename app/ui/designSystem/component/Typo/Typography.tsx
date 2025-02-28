"use client"
import clsx from "clsx";

interface Props {
  variant?:
    | "Heading_hero_section"
    | "Supporting_text_hero_section"
    | "Heading_feature_section"
    | "Supporting_text_feature_section"
    | "Text_feature_section"
    | "Text_Icon_Heading"
    | "Text_Icon_Supporting_text"
    | "Button_text"
    | "Logo_text"
    | "NavText"; // Ajout du NavText
  children: React.ReactNode;
  className?: string;
  theme?: "black" | "white" | "blue" | "gray";
}

export const Typography = ({
  variant = "Heading_hero_section",
  theme = "black",
  children,
  className,
}: Props) => {
  let variant_styles = "";
  let theme_styles = "";

  // Gestion des styles selon le variant
  switch (variant) {
    case "Heading_hero_section":
      variant_styles =
        "font-inriasans xs:text-[34px] font-bold md:text-[51px] text-[49px] leading-[64px]  tracking-[-0.02em]";
      break;
    case "Supporting_text_hero_section":
      variant_styles =
        "font-Inter xs:text-[17px] font-normal text-[18px]  text-text_navigation leading-[26px] tracking-[0em]";
      break;
    case "Heading_feature_section":
      variant_styles =
        "font-inriasans text-[18px] md:text-[36px]  font-bold text-[36px] leading-[44px] tracking-[-0.02em]";
      break;
    case "Supporting_text_feature_section":
    case "Text_feature_section":
      variant_styles =
        "font-Inter md:text-[18px]  font-normal text-[18px] leading-[26px] tracking-[0em]";
      break;
    case "Text_Icon_Heading":
      variant_styles =
        "font-inriasans md:text-[15px] font-bold text-[20px] leading-[30px] tracking-[0em]";
      break;
    case "Text_Icon_Supporting_text":
      variant_styles =
        "font-Inter font-normal  text-[16px] leading-[24px] tracking-[0em]";
      break;
    case "Button_text":
      variant_styles =
        "font-Inter font-semibold text-[16px] leading-[24px] tracking-[0em]";
      break;
    case "Logo_text": // Style pour le texte du logo
      variant_styles =
        "font-Inter font-semibold text-[24px]  ";
      break;
    case "NavText":  // Nouveau style pour le texte de la navigation
      variant_styles =
        "font-Inter font-semibold text-[16px] leading-[24px] tracking-[0em]";
      break;
    default:
      variant_styles = "";
  }

  // Gestion des styles selon le thème
  switch (theme) {
    case "black":
      theme_styles = "text-black";
      break;
    case "white":
      theme_styles = "text-white";
      break;
    case "blue":
      theme_styles = "btn_col";
      break;
    case "gray":
      theme_styles = "text-text_navigation";
      break;
    default:
      theme_styles = "";
  }

  // Styles pour le bouton (avec la couleur btn_col)
  const button_styles = theme === "blue" ? "bg-[#007AFF]" : "";

  return (
    <div
      className={clsx(variant_styles, theme_styles, className, button_styles)}
    >
      {children}
    </div>
  );
  
};
