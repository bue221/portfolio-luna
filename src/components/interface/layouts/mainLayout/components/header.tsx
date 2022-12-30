// Next
import Image from "next/image";
import Link from "next/link";
// Context
import { useContext } from "react";
import { CursorContext } from "context/cursorContext";
// Component's
import MobileNav from "./mobileNav";
import Socials from "./Socials";

export const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Porfilio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link href="/">
          <Image src="/img/header/logo2.svg" alt="" width={200} height={50} />
        </Link>
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          {routes.map((route) => (
            <Link
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              key={route.path}
              href={route.path}
              className="text-[#696c6d] hover:text-primary transition"
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;
