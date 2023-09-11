"use client";

import { FC, useState } from "react";

import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ILeaderQuote = {};
const LeaderQuote: FC<ILeaderQuote> = ({}) => {
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
        <QuoteItem />
        <QuoteItem />
        <QuoteItem />
        <QuoteItem />
        <QuoteItem />
        <QuoteItem />
        <QuoteItem />
      </Slider>

      <div className="w-full  h-[324px] mt-40 py-8 bg-black-0.5">
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          {...settingsPerson}
        >
          {[0, 1, 2, 3, 4, 5].map((item, index) => {
            return (
              <PersonItem
                isSelected={index === selected ? true : false}
                key={item}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default LeaderQuote;

const QuoteItem = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 overflow-hidden">
      <div className="">
        <div className="text-main-0 font-bold text-[64px]">Tran Duc Trong</div>
        <p className="italic text-2xl">General Manager</p>
        <p className="text-2xl mt-10">
          “Our business is built on the belief in our people who create the
          culture, the technology, and all the success so far. As the leader of
          the team, I am super proud of my inspiring, innovative and talented
          people. I learn from them so much and I aspire how hard and smart they
          put in their work. I believe with that spirit, we can make our success
          infectious to all partnerships as well.”
        </p>
      </div>
    </div>
  );
};

const PersonItem = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <div className="flex flex-col h-[260px] justify-between items-center">
      <Image
        src="/a-trong.png"
        alt="person"
        width={isSelected ? 160 : 120}
        height={isSelected ? 160 : 120}
        className={
          isSelected
            ? "border-[2px] border-main-0 rounded-full transition"
            : "border-[2px] border-white rounded-full transition"
        }
      />
      <h4 className="text-[32px] font-semibold text-center">
        Trong, Tran Duc (Mr.)
      </h4>
      <p className="text-lg italic">General Manager</p>
    </div>
  );
};
