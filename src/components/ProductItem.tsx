import { FC } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface IProductItemProps {
  path: string;
  title: string;
  link: string;
}

const ProductItem: FC<IProductItemProps> = ({ path, title, link }) => {
  return (
    <div className="py-10 h-[430px] px-[66px] rounded-[32px] border-[1px] border-[rgba(255, 255, 255, 0.20)]">
      <div className="flex h-full flex-col justify-between items-center">
        <Image src={path} width={200} height={200} alt="title" />
        <div className="font-bold text-[20px] text-center">{title}</div>
        <Link className="flex-end" href={link}>
          <Image
            src="/gg-play-download.svg"
            alt="gg-play"
            width={182}
            height={54}
          />
        </Link>
      </div>
    </div>
  );
};
export default ProductItem;
