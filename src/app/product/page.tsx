import ReactHtmlParser from "react-html-parser";

import BlurRound from "@/components/BlurRournd";
import OutStandingProductSection from "@/components/OutstandingProductSection";
import ProductItem from "@/components/ProductItem";
import fetchContent from "@/lib/fetch";
import { BASE_IMAGE_URL } from "@/configs";
import TopGiantFooter from "@/components/TopGiantFooter";

export default async function Products() {
  const productPage = await fetchContent({ url: "/product-pages?populate=*" });
  const productListProduct = await fetchContent({
    url: "/product-list-products?populate=*",
  });

  return (
    <div className="bg-[#131313]">
      {/* QUOTE */}
      <section
        style={{
          backgroundImage: `url('${
            BASE_IMAGE_URL +
            productPage.data[0].attributes.MediaBlock1.data.attributes.url
          }')`,
        }}
        className="relative w-full bg-no-repeat bg-cover bg-center h-[900px] overflow-hidden"
      >
        <BlurRound className=" w-[361px] h-[361px] absolute top-[161px] left-[433px]" />
        <BlurRound className=" w-[353px] h-[353px] absolute top-[595px] left-[-63px]" />
        <BlurRound className=" w-[206px] h-[206px] absolute top-[582px] right-[-60px]" />
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="pt-[281px] text-[60px]">
              {/* <h1 className="font-bold text-[60px] ">
                Think <span className="text-main-0">Big,</span>
              </h1>
              <h1 className="font-bold text-[48px]">We Make Apps that</h1>
              <h1 className="font-bold text-[60px] ">
                Make a <span className="text-main-0">Difference</span>
              </h1> */}
              {ReactHtmlParser(productPage.data[0].attributes.TitleBlock1)}
            </div>
          </div>
        </div>
      </section>

      {/* SOME PRODUCTS  */}
      <OutStandingProductSection />

      {/* GIANTS  */}
      <section className="py-[120px] container mx-auto">
        <div className="grid grid-cols-3 gap-[60px]">
          {productListProduct.data.map((product: any) => {
            return (
              <ProductItem
                key={product.attributes.LinkGoogleStore}
                title={product.attributes.Title}
                link={product.attributes.LinkGoogleStore}
                path={
                  BASE_IMAGE_URL + product.attributes.Media.data.attributes.url
                }
              />
            );
          })}
        </div>
      </section>
      {/* TOP GIANT */}
      <TopGiantFooter />
    </div>
  );
}
