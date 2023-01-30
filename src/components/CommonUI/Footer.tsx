import Image from "next/image";
import Container from "./Container";

const links = [
  {
    label: "Navigation",
    children: [
      {
        label: "Home",
        href: "#",
      },
      {
        label: "News",
        href: "#blog",
      },
      {
        label: "Support",
        href: "#footer",
      },
    ],
  },
  {
    label: "Product",
    children: [
      {
        label: "NFT Marketplace",
        href: "#marketplace",
      },
      {
        label: "MedMap",
        href: "#map",
      },
      {
        label: "MedWorld",
        href: "#world",
      },
    ],
  },
  {
    label: "MedVerse",
    children: [
      {
        label: "MPD",
        href: "#",
      },
      {
        label: "DAO",
        href: "#",
      },
      {
        label: "Brand Kit",
        href: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className="bg-[#0D0600]">
      <Container className="px-12">
        <div className="grid grid-cols-2 lg:grid-cols-7 py-[60px] gap-8">
          <div className="lg:col-span-2">
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
            <div className="text-white/50 text-[10px] mt-5">
              Copyright ©️ 2023 Medverse All Rights Reserved
            </div>
          </div>
          {links.map((link) => (
            <div key={link.label} className="text-white">
              <div className="font-semibold text-[16px] lg:text-[19px]">{link.label}</div>
              <ul className="mt-[18px] space-y-2.5 text-[10px]">
                {link.children.map((child) => (
                  <li key={child.label} className="text-white">
                    <a className="hover:text-[#2C79E1] transition-colors" href={child.href}>
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-2">
            <div className="text-white text-[16px] font-semibold lg:text-[19px]">Contact Team</div>
            <div className="text-white text-[10px] mt-[18px]">admin@medverse.io</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
