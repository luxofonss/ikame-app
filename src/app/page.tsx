import ReactHtmlParser from "react-html-parser";

import { BASE_API_URL, BASE_IMAGE_URL } from "@/configs";

import AchievementRound from "@/components/AchievementRound";
import BestProductItem from "@/components/BestProductItem";
import BlurRound from "@/components/BlurRournd";
import FooterCarousel from "@/components/FooterCarousel";
import IntroduceItem from "@/components/IntroduceItem";
import { cn } from "@/lib/utils";

async function getHomepage() {
  const response = await fetch(BASE_API_URL + "/home-pages?populate=*", {
    cache: "default",
  });
  return await response.json();
}

async function getHomeContent() {
  const response = await fetch(BASE_API_URL + "/home-contents?populate=*", {
    cache: "default",
  });
  return await response.json();
}

async function getHomeTopProduct() {
  const response = await fetch(BASE_API_URL + "/home-top-products?populate=*", {
    cache: "default",
  });
  return await response.json();
}

async function getHomePartner() {
  const response = await fetch(BASE_API_URL + "/home-partners?populate=*", {
    cache: "default",
  });
  return await response.json();
}

async function getHightLight() {
  const response = await fetch(BASE_API_URL + "/highlights?populate=*", {
    cache: "default",
  });
  return await response.json();
}

export default async function Home() {
  const homepages = await getHomepage();
  const homeContent = await getHomeContent();
  const homeTopProduct = await getHomeTopProduct();
  const homePartner = await getHomePartner();
  const hightLight = await getHightLight();

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
              <div className="font-bold text-[60px]">
                {ReactHtmlParser(homepages.data[0].attributes.BlockTitle1)}
              </div>

              <div className="text-2xl leading-10">
                {ReactHtmlParser(
                  homepages.data[0].attributes.DescriptionBlock1
                )}
              </div>
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
      {/* ACHIEVEMENT */}
      <section className="w-full bg-no-repeat bg-contain bg-bottom h-[798px] bg-download-bg">
        <div className="container h-full mx-auto flex justify-between items-center">
          {hightLight.data.map((item: any, index: number) => {
            return (
              <AchievementRound
                key={item.attributes.Title}
                src={
                  BASE_IMAGE_URL + item.attributes.Media.data[0].attributes.url
                }
                alt={item.attributes.Title}
                number={item.attributes.Title}
                desc={item.attributes.Description}
              />
            );
          })}
        </div>
      </section>
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
