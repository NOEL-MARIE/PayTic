import { Featured_section } from "@/app/component/Navbar/Featured_section";
import HeroTop from "@/app/heroTop/heroTop";
import { HowToWork } from "@/app/HowToWork/HowToWork";
import { HW_Dash } from "@/app/HW_Dash/HW_Dash";
import Location from "@/app/Location/Location";
import Paiement_method from "@/app/paiement_method/paiement_method";
import Space_dev from "@/app/space_dev/space_dev";

export const LandingPageView = () => {
  return (
    <div className="max-w-6xl   mx-auto ">
      <HeroTop />
      <Featured_section />
      <HowToWork />
      <HW_Dash />
      <Location />
      <Paiement_method />
      <Space_dev />
    </div>
  );
};
