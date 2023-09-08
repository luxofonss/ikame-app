import Image from "next/image";
import { FC } from "react";

type ILangSwitchProps = {};
const LangSwitch: FC<ILangSwitchProps> = ({}) => {
  return (
    <div>
      <button className="flex">
        <Image
          width={30}
          height={30}
          className="rounded-full"
          src="/vn.png"
          alt="vn"
        />
        <Image
          width={30}
          height={30}
          className=""
          src="/chevron-down.svg"
          alt="down"
        />
      </button>
    </div>
  );
};
export default LangSwitch;
