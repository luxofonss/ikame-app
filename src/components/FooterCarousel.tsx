"use client";

import { FC, HTMLProps } from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils";
import { it } from "node:test";
import { BASE_IMAGE_URL } from "@/configs";

type Props = { data: any };

export const CarouselItem = ({ image }: { image: string }) => {
  return (
    <div
      className={
        "flex mx-[46px] items-center justify-center h-20 w-[240px] bg-white rounded-3xl"
      }
    >
      <div
        className={`bg-no-repeat bg-contain bg-center w-[211px] h-[64px]`}
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
    </div>
  );
};

const FooterCarousel: FC<Props> = ({ data }) => {
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
        {data?.data?.map((item: any) => {
          return (
            <CarouselItem
              key={item.attributes.Title}
              image={BASE_IMAGE_URL + item.attributes.Media.data.attributes.url}
            />
          );
        })}
      </Slider>
    </div>
  );
};
export default FooterCarousel;
