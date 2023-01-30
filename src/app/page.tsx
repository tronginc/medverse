import SectionVideo from "@/components/LandingPage/SectionVideo";
import SectionWorld from "@/components/LandingPage/SectionWorld";
import SectionMap from "@/components/LandingPage/SectionMap";
import SectionMarketplace from "@/components/LandingPage/SectionMarketplace";
import SectionSlider from "@/components/LandingPage/SectionBlog";
import SectionPartner from "@/components/LandingPage/SectionPartner";
import SectionEdit from "@/components/LandingPage/SectionEdit";

export default function Home() {
  return (
    <>
      <SectionVideo />
      <SectionWorld />
      <SectionMap />
      <SectionMarketplace />
      <SectionEdit />
      <SectionSlider />
      <SectionPartner />
    </>
  );
}
