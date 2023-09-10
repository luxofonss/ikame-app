import Image from "next/image";
import { FC } from "react";

type Props = {};
const OutStandingProductSection: FC<Props> = ({}) => {
  return (
    <section className="py-[120px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="w-full bg-no-repeat bg-cover bg-center h-[360px] bg-word-of rounded-2xl"></div>
          <div className="flex flex-col gap-6 pl-[120px]">
            <div className="font-bold text-[48px] leading-[60px]">
              Word Office - PDF, Docx, XLSX
            </div>
            <div className="flex gap-6">
              <div className="bg-[rgba(255, 255, 255, 0.10)] rounded-xl w-[50px] h-[50px] flex items-center justify-center">
                <Image src="/user.svg" alt="user" width={24} height={24} />
              </div>
              <div className="font-bold text-2xl">10M+ Total Users</div>
            </div>
            <div className="flex gap-6">
              <div className="bg-[rgba(255, 255, 255, 0.10)] rounded-xl w-[50px] h-[50px] flex items-center justify-center">
                <Image src="/award.svg" alt="award" width={24} height={24} />
              </div>
              <div className="font-bold text-2xl">TOP 2 Global</div>
            </div>
            <Image
              src="/gg-play-download.svg"
              alt="gg-play"
              width={182}
              height={54}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-[120px]">
          <div className="flex flex-col gap-6 ">
            <div className="font-bold text-[48px] leading-[60px]">
              Cast for Chormecast
            </div>
            <div className="flex gap-6">
              <div className="bg-[rgba(255, 255, 255, 0.10)] rounded-xl w-[50px] h-[50px] flex items-center justify-center">
                <Image src="/user.svg" alt="user" width={24} height={24} />
              </div>
              <div className="font-bold text-2xl">10M+ Total Users</div>
            </div>
            <div className="flex gap-6">
              <div className="bg-[rgba(255, 255, 255, 0.10)] rounded-xl w-[50px] h-[50px] flex items-center justify-center">
                <Image src="/award.svg" alt="award" width={24} height={24} />
              </div>
              <div className="font-bold text-2xl">TOP 2 Global</div>
            </div>
            <Image
              src="/gg-play-download.svg"
              alt="gg-play"
              width={182}
              height={54}
            />
          </div>
          <div className="w-full bg-no-repeat bg-cover bg-center h-[360px] bg-chromecast rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};
export default OutStandingProductSection;
