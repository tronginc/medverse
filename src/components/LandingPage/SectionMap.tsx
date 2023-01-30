import Image from "next/image";
import Button from "../CommonUI/Button";
import Container from "../CommonUI/Container";
import H2 from "../CommonUI/H2";

export default function SectionMap() {
  return (
    <section id="map" className="relative min-h-[620px]">
      <Image
        src="/assets/landing/bg-map.jpg"
        fill
        alt="MedWorld background"
        className="object-cover w-full"
      />
      <Container className="py-[218px] absolute inset-0 flex lg:justify-end px-[40px] lg:px-[122px]">
        <div className="max-w-[510px] w-full bg-cover bg-no-repeat">
          <H2>MedMap</H2>
          <p className="mt-2.5 mb-8 text-[15px] lg:text-[17px] font-light text-white">
            Create scenes, artworks, challenges and more, using the simple Builder tool, then take
            part in events to win prizes. For more experienced creators, the SDK provides the tools
            to fill the world with social games and applications.
          </p>
          <div className="flex flex-wrap gap-[15px]">
            <Button>START BUILDING</Button>
            <Button outlined>START DEVELOPING</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
