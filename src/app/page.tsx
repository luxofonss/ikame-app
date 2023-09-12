import ReactHtmlParser from "react-html-parser";

import { BASE_IMAGE_URL } from "@/configs";

import AchievementRound from "@/components/AchievementRound";
import BestProductItem from "@/components/BestProductItem";
import BlurRound from "@/components/BlurRournd";
import FooterCarousel from "@/components/FooterCarousel";
import IntroduceItem from "@/components/IntroduceItem";
import BottomUpAnimation from "@/components/animations/BottomUpAnimation";
import TopDownAnimation from "@/components/animations/TopDownAnimation";
import fetchContent from "@/lib/fetch";
import HightLight from "@/components/HightLight";

export default async function Home() {
  const homepages = await fetchContent({
    url: "/home-pages?populate=*",
  });
  const homeContent = await fetchContent({
    url: "/home-contents?populate=*",
  });
  const homeTopProduct = await fetchContent({
    url: "/home-top-products?populate=*",
  });
  const homePartner = await fetchContent({
    url: "/home-partners?populate=*",
  });

  return (
    <div>
      {/* QUOTE */}
      <section
        style={{
          backgroundImage: `url('${
            BASE_IMAGE_URL +
            homepages.data[0].attributes.MediaBlock1.data.attributes.url
          }')`,
        }}
        className={
          "relative w-full bg-no-repeat bg-cover bg-center h-[900px] overflow-hidden"
        }
      >
        <BlurRound className=" w-[361px] h-[361px] absolute top-[161px] left-[433px]" />
        <BlurRound className=" w-[353px] h-[353px] absolute top-[595px] left-[-63px]" />
        <BlurRound className=" w-[206px] h-[206px] absolute top-[582px] right-[-60px]" />
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="pt-[281px]">
              <TopDownAnimation className="font-bold text-[60px]">
                {ReactHtmlParser(homepages.data[0].attributes.BlockTitle1)}
              </TopDownAnimation>
              <BottomUpAnimation className="text-2xl leading-10">
                {ReactHtmlParser(
                  homepages.data[0].attributes.DescriptionBlock1
                )}
              </BottomUpAnimation>
            </div>
          </div>
        </div>
      </section>
      {/* SHORT INTRO */}
      <section className="w-full mx-auto bg-main-0 h-[232px] pt-10 pb-[46px]">
        <div className="container mx-auto">
          <div className="text-center text-4xl italic font-bold">
            {ReactHtmlParser(homepages.data[0].attributes.BlockTitle2)}
          </div>
          <div className="mx-auto mt-[18px] w-4/5 text-2xl">
            {ReactHtmlParser(homepages.data[0].attributes.BlockDescription2)}
          </div>
        </div>
      </section>
      {/* HIGHT LIGHT */}
      <HightLight />
      {/* BEST PRODUCTS */}
      <section className="container mx-auto mt-[120px]">
        <div className="flex justify-between">
          {homeTopProduct.data.map((item: any, index: number) => {
            return (
              <BestProductItem
                key={item.attributes.Title}
                src="/secure.png"
                title={item.attributes.Title}
                description={item.attributes.Description}
                link={item.attributes.Description}
              />
            );
          })}
        </div>
      </section>
      {/* MORE INTRODUCE */}
      <section className="mt-40">
        <div className="container mx-auto">
          <h2 className="text-center font-bold text-[48px]">
            {ReactHtmlParser(homepages.data[0].attributes.BlockTitle3)}
          </h2>
          <div className="mt-80 grid gap-20">
            {homeContent.data.map((item: any, index: number) => {
              return (
                <IntroduceItem
                  key={item.attributes.title}
                  textLeft={index % 2 === 0 ? true : false}
                  src={
                    BASE_IMAGE_URL + item.attributes.Media.data.attributes.url
                  }
                  heading={item.attributes.Title}
                  description={item.attributes.Description}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* CAREER */}
      <section className="relative w-full h-[800px] bg-no-repeat bg-cover bg-center bg-career mt-[120px]">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center">
            <div className="mx-auto text-main-0 text-[96px] font-bold mt-[165px]">
              {ReactHtmlParser(homepages.data[0].attributes.BlockTitle4)}
            </div>
            <div className="text-center text-[48px] font-bold ">
              {ReactHtmlParser(homepages.data[0].attributes.SubTitleBlock4)}
            </div>
            <p className="text-center text-2xl mt-8">
              {ReactHtmlParser(
                homepages.data[0].attributes.DescriptionBlock4.replace(
                  "\n",
                  "<br/>"
                )
              )}
            </p>
            <button className="bg-white text-main-0 font-bold px-10 mt-[17px] rounded-[14px] py-[13px]">
              {ReactHtmlParser(homepages.data[0].attributes.ButtonBlock5)}
            </button>
          </div>
        </div>
      </section>
      {/* CAROUSEL  */}
      <FooterCarousel data={homePartner} />
    </div>
  );
}
