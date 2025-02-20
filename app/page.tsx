import { Button } from "./ui/designSystem/Typo/button/buttons";
import { Typography } from "./ui/designSystem/Typo/Typography";

export default function Home() {
  return (
    <div className="space-y-10 p-8 bg-gray-50">
      {/* Section de titre Hero */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <Typography variant="Heading_hero_section" theme="black">
          Nos Services (Hero Section Title)
        </Typography>
        <Typography variant="Supporting_text_hero_section" theme="gray">
          Découvrez les services que nous offrons avec passion et expertise.
        </Typography>
      </section>
      {/* Section de Feature Title */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <Typography variant="Heading_feature_section" theme="black">
          Nos Services en Détail
        </Typography>
        <Typography variant="Supporting_text_feature_section" theme="gray">
          Apprenez-en plus sur chaque service et comment nous vous accompagnons.
        </Typography>
      </section>
      {/* Section de Text Feature */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <Typography variant="Text_feature_section" theme="gray">
          Notre équipe est dédiée à fournir des solutions adaptées à vos
          besoins.
        </Typography>
      </section>
      {/* Section Text avec Icone */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <Typography variant="Text_Icon_Heading" theme="blue">
          Icon + Service Heading
        </Typography>
        <Typography variant="Text_Icon_Supporting_text" theme="gray">
          Une description brève mais précise accompagnée d&apos;une icône.
        </Typography>
      </section>
      {/* Section bouton */}
      <section className="bg-text_navigation p-6 rounded-lg shadow-md">
        <Typography variant="Button_text" theme="white">
          En savoir plus
        </Typography>
      </section>
      <Button variant="Besoin d’aide">Besoin d’aide</Button>
      <Button variant="Demander une démo">Demander une démo</Button>
      <Button variant="Demo">Nous contacter</Button>
      <Button variant="Nous contacter">Démarrer</Button>
      <Button>Texte dynamique</Button> {/* Fonctionne aussi sans variant */}
    </div>
  );
}
