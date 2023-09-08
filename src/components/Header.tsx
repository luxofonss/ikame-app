import Image from "next/image";
import { FC } from "react";
import Button from "./Button";
import HeaderNav from "./HeaderNav";
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
          <HeaderNav />
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
