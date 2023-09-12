"use client";

import { BASE_IMAGE_URL } from "@/configs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function AboutIntroductionCarousel({
  aboutUsTimeline,
}: {
  aboutUsTimeline: any;
}) {
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
    speed: 1000,
    arrows: false,
    afterChange: (index: any) => {
      setSelected(index);
    },
  };

  const settingsNavigation = {
    dots: false,
    //     autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: aboutUsTimeline.data.length,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 1000,
    arrows: true,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return (
    <div className={"relative w- h-[900px] overflow-hidden"}>
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...settings}>
        {aboutUsTimeline.data.map((item: any) => {
          return (
            <div
              key={item.attributes.Title}
              style={{
                backgroundImage: `url('')`,
              }}
              className={
                "relative w-full bg-no-repeat bg-about-bg bg-cover bg-center h-[900px] overflow-hidden"
              }
            >
              <div className="container flex flex-col items-center  mx-auto mt-64">
                <h1 className="font-bold text-center text-[64px] text-main-0">
                  {item.attributes.Title}
                </h1>
                <div className="w-24 h-[6px] bg-main-0 my-5"></div>
                <p className="text-2xl font-medium text-center px-40">
                  {item.attributes.Description}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="container absolute  left-1/2 transform -translate-x-1/2 -bottom-0 h-64">
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          {...settingsNavigation}
        >
          {aboutUsTimeline.data.map((item: any, index: number) => {
            return (
              <div
                //  style={{
                //    backgroundImage: `url('${
                //      BASE_IMAGE_URL + item.attributes.Media.data.attributes.url
                //    }')`,
                //  }}
                //  className="bg-no-repeat bg-contain bg-center w-full h-full"
                key={item}
                className={cn(
                  "relative cursor-pointer p-0 h-64 w-full rounded-lg",
                  selected === index ? "bg-main-gradient" : ""
                )}
              >
                {selected !== index && (
                  <Image
                    src={
                      BASE_IMAGE_URL + item.attributes.Media.data.attributes.url
                    }
                    alt="item"
                    width={100}
                    height={100}
                    className="w-full h-full object-contain object-center"
                  />
                )}
                <p className="absolute text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {item.attributes.Title}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
