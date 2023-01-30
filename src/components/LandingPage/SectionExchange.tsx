import Image from "next/image";
import Container from "../CommonUI/Container";

const brands = [
  {
    name: "Huobi",
    logo: "/assets/landing/exchange-huobi.png",
    height: 51,
    width: 230,
  },
  {
    name: "Eokx",
    logo: "/assets/landing/exchange-eokx.png",
    height: 31,
    width: 100,
  },
  {
    name: "Gate",
    logo: "/assets/landing/exchange-gate.png",
    height: 41,
    width: 132,
  },
  {
    name: "MEXC",
    logo: "/assets/landing/exchange-mexc.png",
    height: 51,
    width: 251,
  },
  {
    name: "Bybit",
    logo: "/assets/landing/exchange-bybit.png",
    height: 41,
    width: 104,
  },

  {
    name: "Kucoin",
    logo: "/assets/landing/exchange-kucoin.png",
    height: 41,
    width: 176,
  },
];

export default function SectionExchange() {
  return (
    <section id="exchange">
      <Container className="py-[56px] px-[40px] lg:px-[122px]">
        <div className="text-[20px] lg:text-[23px] text-[#FCF5E5] text-center">Exchange</div>
        <div className="grid gap-16 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <div className="flex items-center justify-center" key={brand.name}>
              <Image src={brand.logo} alt={brand.name} width={brand.width} height={brand.height} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
