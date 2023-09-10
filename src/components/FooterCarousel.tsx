"use client";

import { FC, HTMLProps } from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils";

type Props = {};

export const CarouselItem: FC<HTMLProps<HTMLDivElement>> = ({ className }) => {
  return (
    <div
      className={
        "flex mx-[46px] items-center justify-center h-20 w-[240px] bg-white rounded-3xl"
      }
    >
      <div
        className={cn(
          className,
          `bg-no-repeat bg-cover bg-center w-[211px] h-[64px]`
        )}
      ></div>
    </div>
  );
};

const FooterCarousel: FC<Props> = ({}) => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <div className="h-[260px] px-8 w-full py-[90px]">
      <Slider {...settings}>
        <CarouselItem className="bg-google-play" />
        <CarouselItem className="bg-google-cloud" />
        <CarouselItem className="bg-google-ads" />
        <CarouselItem className="bg-apple" />
        <CarouselItem className="bg-mintegral" />
        <CarouselItem className="bg-ironsource" />
      </Slider>
    </div>
  );
};
export default FooterCarousel;
