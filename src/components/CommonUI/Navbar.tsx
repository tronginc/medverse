import Image from "next/image";
import Container from "./Container";

const menuItems = [
  {
    label: "MedWorld",
    link: "#",
  },
  {
    label: "MedMap",
    link: "#map",
  },
  {
    label: "NFT Marketplace",
    link: "#marketplace",
  },
  {
    label: "MedEdit",
    link: "#edit",
  },
  {
    label: "Blog",
    link: "#blog",
  },
  {
    label: "Exchange",
    link: "#exchange",
  },
  {
    label: "Whitepaper",
    link: "#whitepaper",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 z-10">
      <Container className="flex items-center justify-between h-[106px]">
        <div>
          <Image
            priority
            quality={100}
            src="/logo.png"
            alt="MedPing"
            className="w-[116px]"
            width={464}
            height={260}
          />
        </div>
        <ul className="flex gap-x-9 text-white text-[13px]">
          {menuItems.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
        <div className="flex">
          <button className="bg-[#2C79E1] text-white text-[12px] font-bold py-3 px-[30px]">
            Join
          </button>
          <button className="bg-[#000000] text-white text-[12px] font-bold py-3 px-[30px] flex items-center gap-x-2">
            Launch
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.04688 7.125L0.53125 0.875001L7.5625 0.875L4.04688 7.125Z"
                fill="#2C79E1"
              />
            </svg>
          </button>
        </div>
      </Container>
    </nav>
  );
}
