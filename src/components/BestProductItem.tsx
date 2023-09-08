import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type IBestProductItemProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};
const BestProductItem: FC<IBestProductItemProps> = ({
  src,
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image width={280} height={280} src={src} alt={title} />
      <h3 className="text-center mt-[60px] text-[32px] font-bold">{title}</h3>
      <p className="text-center text-gray text-[24px] max-w-[620px] mt-4">
        {description}
      </p>
      <Link href={link}>
        <Image
          className="mt-6"
          src={"/google-play.png"}
          alt="google-play"
          width={135}
          height={40}
        />
      </Link>
    </div>
  );
};
export default BestProductItem;
