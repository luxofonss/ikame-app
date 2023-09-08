import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Button from "./Button";
import LangSwitch from "./LangSwitch";

type Props = {};
const Header: FC<Props> = () => {
  return (
    <div className="w-full z-50 bg-header-transparent fixed top-0 ">
      <header className="container mx-auto flex justify-between items-center w-full h-[101px] p-t-[9px] pb-8 ">
        <div>
          <Image
            src="/logo.png"
            alt="iKame logo"
            width={168}
            height={60}
            priority
          />
        </div>
        <div className="flex items-center gap-[61px]">
          <nav className="flex gap-11">
            <Link className="text-main-2 font-bold" href="/">
              Home
            </Link>
            <Link className="text-white font-bold" href="/">
              Products
            </Link>
            <Link className="text-white font-bold" href="/">
              Publishing
            </Link>
            <Link className="text-white font-bold" href="/">
              Career
            </Link>
            <Link className="text-white font-bold" href="/">
              About us
            </Link>
          </nav>
          <div className="flex gap-8 items-center">
            <Button>Join us as Partners</Button>
            <LangSwitch />
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
