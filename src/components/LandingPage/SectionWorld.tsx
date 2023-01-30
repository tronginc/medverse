import Image from "next/image";
import Button from "../CommonUI/Button";
import Container from "../CommonUI/Container";
import H2 from "../CommonUI/H2";

export default function SectionWorld() {
  return (
    <div className="relative min-h-[620px]">
      <Image
        src="/assets/landing/bg-world.jpg"
        fill
        alt="MedWorld background"
        className="object-cover w-full"
      />
      <Container className="py-[218px] absolute inset-0 px-[40px] lg:px-[122px]">
        <div className="max-w-[510px] w-full bg-cover bg-no-repeat">
          <H2>MedWorld</H2>
          <p className="mt-2.5 mb-8 text-[15px] lg:text-[17px] font-light text-white">
            Explore LANDs owned by users to experience incredible scenes and structures. From a
            space adventure to a medieval dungeon maze to entire villages crafted from the minds of
            community members.
          </p>
          <Button>START EXPLORING</Button>
        </div>
      </Container>
    </div>
  );
}
