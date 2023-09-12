import ReactHtmlParser from "react-html-parser";

import BlurRound from "@/components/BlurRournd";
import OutStandingProductSection from "@/components/OutstandingProductSection";
import ProductItem from "@/components/ProductItem";
import fetchContent from "@/lib/fetch";
import { BASE_IMAGE_URL } from "@/configs";

const products = [
  {
    title: "Word Office - PDF, Docx, XLSX",
    path: "/word-office.png",
    link: "https://play.google.com/store/apps/details?id=com.begamob.word.office.pdf.docx.xlsx",
  },
  {
    title: "Cast for Chromecast & TV Cast",
    path: "/cast-chrome.png",
    link: "https://play.google.com/store/apps/details?id=com.begamob.word.office.pdf.docx.xlsx",
  },
  {
    title: "Saver For WA Status",
    path: "/saver.png",
    link: "https://play.google.com/store/apps/details?id=com.begamob.word.office.pdf.docx.xlsx",
  },
  {
    title: "Remote Control for RokuTV",
    path: "/rokutv.png",
    link: "https://play.google.com/store/apps/details?id=com.begamob.word.office.pdf.docx.xlsx",
  },
  {
    title: "AppLock - Locker, Fingerprint",
    path: "/secure.png",
    link: "https://play.google.com/store/apps/details?id=com.begamob.word.office.pdf.docx.xlsx",
  },
  {
    title: "Document Office: Read & Sign",
    path: "/docs-office.png",
    link: "https://play.google.com/store/apps/details?id=com.begamob.word.office.pdf.docx.xlsx",
  },
  {
    title: "Equalizer - Volume Booster",
    path: "/volume-equalizer.png",
    link: "https://play.google.com/store/apps/details?id=com.begamob.word.office.pdf.docx.xlsx",
  },
  {
    title: "Prank Sounds - Fart & Haircut",
    path: "/prank-sound.png",
    link: "https://play.google.com/store/apps/details?id=com.begamob.word.office.pdf.docx.xlsx",
  },
  {
    title: "Step Counter: Daily Steps",
    path: "/step-counter.png",
    link: "https://play.google.com/store/apps/details?id=com.begamob.word.office.pdf.docx.xlsx",
  },
  {
    title: "Yoga Poses: Yoga For Beginners",
    path: "/yoga-poses.png",
    link: "https://play.google.com/store/apps/details?id=com.begamob.word.office.pdf.docx.xlsx",
  },
  {
    title: "ChatAI: AI Chatbot App",
    path: "/chat-ai.png",
    link: "https://play.google.com/store/apps/details?id=com.begamob.word.office.pdf.docx.xlsx",
  },
  {
    title: "Document Scanner - PDF Scanner",
    path: "/doc-scanner.png",
    link: "https://play.google.com/store/apps/details?id=com.begamob.word.office.pdf.docx.xlsx",
  },
];

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
    </div>
  );
}
