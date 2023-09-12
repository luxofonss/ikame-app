import { BASE_IMAGE_URL } from "@/configs";
import fetchContent from "@/lib/fetch";
import Image from "next/image";
import { FC } from "react";

type Props = {};
const OutStandingProductSection: FC<Props> = async ({}) => {
  const products = await fetchContent({
    url: "/product-top-products?populate=*",
  });

  return (
    <section className="py-[120px]">
      <div className="container mx-auto">
        {products.data.map((product: any, index: number) => {
          if (index % 2 === 0)
            return (
              <div
                key={product.attributes.LinkGoogleStore}
                className="grid grid-cols-2"
              >
                <div
                  style={{
                    backgroundImage: `url('${
                      BASE_IMAGE_URL +
                      product.attributes.Media.data[0].attributes.url
                    }')`,
                  }}
                  className="w-full bg-no-repeat bg-cover bg-center h-[360px] rounded-2xl"
                ></div>
                <div className="flex flex-col gap-6 pl-[120px]">
                  <div className="font-bold text-[48px] leading-[60px]">
                    {product.attributes.Tittle}
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-[rgba(255, 255, 255, 0.10)] rounded-xl w-[50px] h-[50px] flex items-center justify-center">
                      <Image
                        src="/user.svg"
                        alt="user"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="font-bold text-2xl">
                      {product.attributes.DescriptionDownload}
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-[rgba(255, 255, 255, 0.10)] rounded-xl w-[50px] h-[50px] flex items-center justify-center">
                      <Image
                        src="/award.svg"
                        alt="award"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="font-bold text-2xl">
                      {product.attributes.DescriptionRanking}
                    </div>
                  </div>
                  <Image
                    src="/gg-play-download.svg"
                    alt="gg-play"
                    width={182}
                    height={54}
                  />
                </div>
              </div>
            );
          else {
            return (
              <div
                key={product.attributes.LinkGoogleStore}
                className="grid grid-cols-2 mt-[120px]"
              >
                <div className="flex flex-col gap-6 ">
                  <div className="font-bold text-[48px] leading-[60px]">
                    {product.attributes.Title}
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-[rgba(255, 255, 255, 0.10)] rounded-xl w-[50px] h-[50px] flex items-center justify-center">
                      <Image
                        src="/user.svg"
                        alt="user"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="font-bold text-2xl">
                      {product.attributes.DescriptionDownload}
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-[rgba(255, 255, 255, 0.10)] rounded-xl w-[50px] h-[50px] flex items-center justify-center">
                      <Image
                        src="/award.svg"
                        alt="award"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="font-bold text-2xl">
                      {product.attributes.DescriptionRanking}
                    </div>
                  </div>
                  <Image
                    src="/gg-play-download.svg"
                    alt="gg-play"
                    width={182}
                    height={54}
                  />
                </div>
                <div
                  style={{
                    backgroundImage: `url('${
                      BASE_IMAGE_URL +
                      product.attributes.Media.data[0].attributes.url
                    }')`,
                  }}
                  className="w-full bg-no-repeat bg-cover bg-center h-[360px] rounded-2xl"
                ></div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};
export default OutStandingProductSection;
