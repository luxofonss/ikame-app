import Image from "next/image";
import { FC } from "react";

interface IIntroduceItemProps {
  src: string;
  heading: string;
  description: string;
  textLeft: boolean;
}
const IntroduceItem: FC<IIntroduceItemProps> = ({
  src,
  heading,
  description,
  textLeft,
}) => {
  if (textLeft)
    return (
      <div className="grid grid-cols-2 gap-20">
        <div className="w-full h-full relative">
          <Image layout="fill" objectFit="cover" src={src} alt="heading" />
        </div>
        <div>
          <h3 className="text-left text-main-0 font-semibold text-[32px]">
            {heading}
          </h3>
          <p className="text-left text-white text-[24px]">
            {description}
          </p>
        </div>
      </div>
    );
  else
    return (
      <div className="grid grid-cols-2 gap-20">
        <div>
          <h3 className="text-right text-main-0 font-semibold text-[32px]">
            {heading}
          </h3>
          <p className="text-right text-white text-[24px]">
            {description}
          </p>
        </div>
        <div className="w-full h-full relative">
          <Image layout="fill" objectFit="cover" src={src} alt="heading" />
        </div>
      </div>
    );
};
export default IntroduceItem;
