"use client";

import Image from "next/image";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

type Props = {};
interface ICarouselItemProps {
  path: string;
}

const CarouselItem: FC<ICarouselItemProps> = ({ path }) => {
  return (
    <div className="flex items-center justify-center h-20 w-[240px] bg-white rounded-3xl">
      <div
        className={`bg-${path} bg-no-repeat bg-cover bg-center w-[211px] h-[64px]`}
      ></div>
    </div>
  );
};

const FooterCarousel: FC<Props> = ({}) => {
  return (
    <Carousel selectedItem={4}>
      <CarouselItem path="google-play" />
      <CarouselItem path="google-cloud" />
      <CarouselItem path="google-ads" />
      <CarouselItem path="apple" />
      <CarouselItem path="mitegral" />
      <CarouselItem path="ironsource" />
    </Carousel>
  );
};
export default FooterCarousel;
