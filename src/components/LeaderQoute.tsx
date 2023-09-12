"use client";

import { FC, useState } from "react";

import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_IMAGE_URL } from "@/configs";
import { cn } from "@/lib/utils";

type ILeaderQuote = { careerPeople: any };
const LeaderQuote: FC<ILeaderQuote> = ({ careerPeople }) => {
  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();
  const [selected, setSelected] = useState<number>(0);

  const settings = {
    dots: false,
    //     autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    afterChange: (index: any) => {
      setSelected(index);
    },
  };
  const settingsPerson = {
    dots: false,
    //     autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: true,
    swipeToSlide: true,
    focusOnSelect: true,
  };
  return (
    <div className="w-full">
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...settings}>
        {careerPeople.data.map((item: any, index: number) => {
          return <QuoteItem key={item.attributes.Title} data={item} />;
        })}
      </Slider>

      <div className="w-full  h-[324px] mt-40 py-8 bg-black-0.5">
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          {...settingsPerson}
        >
          {careerPeople.data.map((item: any, index: number) => {
            return (
              <PersonItem
                isSelected={index === selected ? true : false}
                key={item}
                data={item}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default LeaderQuote;

const QuoteItem = ({ data }: any) => {
  return (
    <div className="container mx-auto grid grid-cols-2 overflow-hidden">
      <div className="">
        <div className="text-main-0 font-bold text-[64px]">
          {data.attributes.Title}
        </div>
        <p className="italic text-2xl"> {data.attributes.Position}</p>
        <p className="text-2xl mt-10">{data.attributes.Description}</p>
      </div>
      <div
        // style={{
        //   backgroundImage: `url('${
        //     BASE_IMAGE_URL + data.attributes.Media.data.attributes.url
        //   }')`,
        // }}
        className={
          "flex justify-center w-[600px] h-[522px] bg-perso-bg bg-no-repeat bg-contain bg-center overflow-hidden"
        }
      >
        <Image
          src={BASE_IMAGE_URL + data.attributes.Media.data.attributes.url}
          alt="avatar"
          width={424}
          height={594}
          className="object-contain mb-16 ml-10"
        />
      </div>
    </div>
  );
};

const PersonItem = ({
  isSelected,
  data,
}: {
  isSelected: boolean;
  data: any;
}) => {
  return (
    <div className="flex flex-col h-[260px] justify-between items-center">
      <Image
        src={BASE_IMAGE_URL + data.attributes.Media.data.attributes.url}
        alt="person"
        width={isSelected ? 160 : 120}
        height={isSelected ? 160 : 120}
        className={cn(
          isSelected
            ? "border-[2px] border-main-0 rounded-full transition object-contain object-top bg-contain"
            : "border-[2px] border-white rounded-full transition object-contain object-top bg-contain",
          isSelected ? "w-[160px] h-[160px]" : "w-[120px] h-[120px]"
        )}
      />
      <h4 className="text-[32px] font-semibold text-center">
        {data.attributes.Title}
      </h4>
      <p className="text-lg italic">{data.attributes.Position}</p>
    </div>
  );
};
