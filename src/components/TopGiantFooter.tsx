import Link from "next/link";
import { FC } from "react";

type Props = {};
const TopGiantFooter: FC<Props> = ({}) => {
  return (
    <div className="w-full h-[300px] bg-footer-bg bg-no-repeat bg-cover">
      <div className="container mx-auto">
        <div className="italic text-4xl font-semibold text-center pt-[84px]">
          To become the next Top Giant
        </div>
        <div className="flex justify-center mt-4">
          <Link
            className="bg-white text-main-0 font-bold px-[50px] mt-[17px] rounded-[14px] py-[16px]"
            href={"/publish"}
          >
            Publish your App
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TopGiantFooter;
