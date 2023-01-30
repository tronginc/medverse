import Image from "next/image";
import Button from "../CommonUI/Button";
import Container from "../CommonUI/Container";
import H2 from "../CommonUI/H2";

export default function SectionEdit() {
  return (
    <section id="edit">
      <Container className="py-[56px] inset-0 flex lg:justify-end px-[40px] lg:px-[122px]">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-[101px]">
          <div className="flex flex-col justify-center">
            <Image src="/assets/landing/edit.png" alt="MedEdit" width={523} height={511} />
          </div>
          <div className="max-w-[510px] w-full bg-cover bg-no-repeat flex items-center">
            <div>
              <H2>MedEdit</H2>
              <p className="mt-2.5 mb-8 text-[15px] lg:text-[17px] font-light text-white">
                Create scenes, artworks, challenges and more, using the simple Builder tool, then
                take part in events to win prizes. For more experienced creators, the SDK provides
                the tools to fill the world with social games and applications.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                <Button>START BUILDING</Button>
                <Button outlined>START DEVELOPING</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
