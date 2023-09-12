import { FC } from "react";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

import AchievementRound from "@/components/AchievementRound";
import BlurRound from "@/components/BlurRournd";
import Button from "@/components/Button";
import OutStandingProductSection from "@/components/OutstandingProductSection";
import ProductItem from "@/components/ProductItem";
import fetchContent from "@/lib/fetch";
import { cn } from "@/lib/utils";
import { BASE_IMAGE_URL } from "@/configs";
import HightLight from "@/components/HightLight";
import TopGiantFooter from "@/components/TopGiantFooter";

interface IWorkItem {
  svg: string;
  title: string;
  desc: string;
}

export default async function Publishing() {
  const publishingPage = await fetchContent({
    url: "/publishing-pages?populate=*",
  });

  const benefits = await fetchContent({
    url: "/publishing-benefits?populate=*",
  });

  const publishingWork = await fetchContent({
    url: "/publising-works?populate=*",
  });
  return (
    <div className="bg-[#131313]">
      {/* QOUTE */}
      <section className="relative w-full bg-no-repeat bg-cover bg-center h-[900px] bg-banner-publishing overflow-hidden">
        <BlurRound className=" w-[361px] h-[361px] absolute top-[161px] left-[433px]" />
        <BlurRound className=" w-[353px] h-[353px] absolute top-[595px] left-[-63px]" />
        <BlurRound className=" w-[206px] h-[206px] absolute top-[582px] right-[-60px]" />
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="pt-[281px] flex flex-col gap-4">
              <h1 className="font-bold text-[60px] ">
                {ReactHtmlParser(publishingPage.data[0].attributes.BlockTitle1)}
              </h1>
              <p className="font-bold text-[24px]">
                {ReactHtmlParser(
                  publishingPage.data[0].attributes.BlockDescription1
                )}
              </p>
              <div>
                <Button>Join us as Partners</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HIGHT LIGHT */}
      <HightLight />

      {/* PROS  */}
      <section className="container mx-auto py-[120px]">
        <div className="flex flex-col gap-[50px]">
          {benefits.data.map((item: any, index: number) => {
            if (index % 2 === 0)
              return (
                <div className="grid grid-cols-2">
                  <div className="w-full flex flex-col justify-between items-center h-[342px] bg-main-0 pt-[26px] px-[35px] pb-[30px] rounded-l-[28px]">
                    <Image
                      src="/user-tag.svg"
                      alt="user"
                      width={100}
                      height={100}
                    />
                    <div className="text-[30px] font-bold ">
                      {ReactHtmlParser(item.attributes.Title)}
                    </div>
                    <p className="text-2xl text-center">
                      {ReactHtmlParser(item.attributes.Description)}
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url('${
                        BASE_IMAGE_URL +
                        item.attributes.Media.data.attributes.url
                      }')`,
                    }}
                    className="w-full h-[342px] rounded-r-[28px]"
                  ></div>
                </div>
              );
            else
              return (
                <div className="grid grid-cols-2">
                  <div
                    style={{
                      backgroundImage: `url('${
                        BASE_IMAGE_URL +
                        item.attributes.Media.data.attributes.url
                      }')`,
                    }}
                    className="w-full h-[342px] rounded-r-[28px]"
                  ></div>
                  <div className="w-full flex flex-col justify-between items-center h-[342px] bg-[#05303B] pt-[26px] px-[35px] pb-[30px] rounded-l-[28px]">
                    <Image
                      src="/flag.svg"
                      alt="flag"
                      width={100}
                      height={100}
                    />
                    <div className="text-[30px] font-bold ">
                      {" "}
                      {ReactHtmlParser(item.attributes.Title)}
                    </div>
                    <p className="text-2xl text-center">
                      {ReactHtmlParser(item.attributes.Description)}
                    </p>
                  </div>
                </div>
              );
          })}
        </div>
      </section>

      {/* WORK TOGETHER  */}
      <section className="container mx-auto py-[120px]">
        <div className="flex justify-center text-[48px] font-bold">
          How do we work together?
        </div>
        <div className="grid grid-cols-3 gap-[66px]">
          {publishingWork.data.map((item: any) => {
            return (
              <WorkItem
                key={item.attributes.Title}
                svg={BASE_IMAGE_URL + item.attributes.Media.data.attributes.url}
                title={item.attributes.Title}
                desc={item.attributes.Description}
              />
            );
          })}
        </div>
      </section>

      {/* OUTSTANDING PRODUCT  */}
      <OutStandingProductSection />

      {/* TOP GIANT */}
      <TopGiantFooter />
    </div>
  );
}

const WorkItem: FC<IWorkItem> = ({ svg, title, desc }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "w-[101px] h-[101px] rounded-full flex items-center justify-center"
        )}
      >
        <Image src={svg} alt="title" width={100} height={100} />
      </div>
      <div className="mt-8 p-10 h-[288px] bg-[#1F1F1F] rounded-[40px] flex flex-col items-between">
        <h3 className="font-bold text-4xl text-center">{title}</h3>
        <p className="text-2xl text-center mt-6">{desc}</p>
      </div>
    </div>
  );
};
