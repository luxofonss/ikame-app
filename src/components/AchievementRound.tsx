import Image from "next/image";
import { FC } from "react";

// import Counter from "@/components/animations/Counter";
interface IAchievementRoundProps {
  src: string;
  alt: string;
  number: string;
  desc: string;
}
const AchievementRound: FC<IAchievementRoundProps> = ({
  src,
  alt,
  number,
  desc,
}) => {
  return (
    <div>
      <div className="flex items-center justify-center bg-orange-round w-[223px] h-[223px]">
        <Image width={60} height={60} src={src} alt={alt} />
      </div>
      <span className="block mt-5 text-[64px] text-center font-bold">
        {/* <Counter from={0} to={number}> */}
        {number}
        {/* </Counter> */}
      </span>
      <span className="block mt-4 text-[20px] font-bold">{desc}</span>
    </div>
  );
};
export default AchievementRound;
