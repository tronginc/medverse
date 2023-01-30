"use client";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useCallback, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <nav className="fixed inset-x-0 z-10 flex">
      <Container className="items-center justify-between h-[106px] hidden lg:flex px-6">
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
            <li key={item.label}>
              <a className="hover:text-[#2C79E1] transition-colors" href={item.link}>
                {item.label}
              </a>
            </li>
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

      <div className="w-full items-center justify-between h-[86px] flex lg:hidden bg-black/70">
        <div className="flex items-center w-full px-4">
          <div className="w-full">
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

          <button onClick={toggleMenu} className="">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_429_11066)">
                <path
                  d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                  stroke="#cccccc"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_429_11066">
                  <rect width={24} height={24} fill="white" transform="translate(0 0.000915527)" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <Transition
          show={isOpen}
          as="div"
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute top-[86px] bg-black/70 inset-x-0 py-6"
        >
          <ul className="flex flex-col gap-6 text-white text-[16px]">
            {menuItems.map((item) => (
              <li className="px-6" key={item.label}>
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
            <div className="px-6 space-y-4">
              <button className="bg-[#2C79E1] text-white text-[12px] font-bold py-3 px-[30px] w-full rounded-md">
                Join
              </button>
              <button className="bg-[#000000] text-white justify-between text-[12px] font-bold py-3 px-[30px] flex items-center gap-x-2  w-full rounded-md">
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
          </ul>
        </Transition>
      </div>
    </nav>
  );
}
