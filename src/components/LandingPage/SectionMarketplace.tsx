import Image from "next/image";
import Button from "../CommonUI/Button";
import Container from "../CommonUI/Container";
import H2 from "../CommonUI/H2";

export default function SectionMarketplace() {
  return (
    <Container className="pt-[218px] pb-[56px] inset-0 flex lg:justify-end px-[40px] lg:px-[122px]">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
        <div className="max-w-[510px] w-full bg-cover bg-no-repeat flex items-center">
          <div>
            <H2>NFT Marketplace</H2>
            <p className="mt-2.5 mb-8 text-[15px] lg:text-[17px] font-light text-white">
              Purchase or sell USM Metaverse land, Metamon, and other RACA branded NFTs assets in
              our marketplace. Over $1 billion worth of NFTs were traded since inception.
            </p>
            <Button>Open NFT Market</Button>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src="/assets/landing/nft-marketplace.png"
            alt="NFT Marketplace"
            width={641}
            height={371}
          />
        </div>
      </div>
    </Container>
  );
}
