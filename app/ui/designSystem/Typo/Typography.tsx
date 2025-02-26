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
    | "NavText"
    | "HeaderIcon_Section"
    | "Text_featico"; // Ajout de la nouvelle variante
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
      variant_styles = " text-semibold font-bold text-[56px]  ";
      break;
    case "Supporting_text_hero_section":
      variant_styles = " xs:text-[14px] text-semibold text-text_navigation text-[18px]  ";
      break;
    case "Heading_feature_section":
      variant_styles = " text-semibold font-bold text-[36px]  ";
      break;
    case "Supporting_text_feature_section":
    case "Text_feature_section":
      variant_styles = " text-semibold font-normal text-[18px]  ";
      break;
    case "Text_Icon_Heading":
      variant_styles = " text-semibold font-bold text-[20px]  ";
      break;
    case "Text_Icon_Supporting_text":
      variant_styles = " text-semibold font-normal text-[16px]  ";
      break;
    case "Button_text":
      variant_styles = " text-semibold font-semibold text-[16px]  ";
      break;
    case "Logo_text":
      variant_styles = " text-semibold font-semibold text-[24px]";
      break;
    case "NavText":
      variant_styles =
        "hover:text-btn_col lg:text-[12px] cursor-pointer text-text_navigation text-semibold  font-semibold text-[16px]  ";
      break;
    case "HeaderIcon_Section": // Ajout du style pour le header icon section
      variant_styles = " text-semibold font-semibold text-[20px]   text-center";
      break;
    case "Text_featico": // Ajout du style pour le text featico
      variant_styles = " 2xl:text-[19px] Md:text-[14px]  text-semibold font-normal text-[16px]  text-center";
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
      theme_styles = "text_navigation";
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
