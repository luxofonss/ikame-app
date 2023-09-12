import AboutIntroductionCarousel from "@/components/AboutIntroductionCarousel";
import { BASE_IMAGE_URL } from "@/configs";
import fetchContent from "@/lib/fetch";
import ReactHtmlParser from "react-html-parser";

export default async function About() {
  const aboutUsPage = await fetchContent({ url: "/about-us-pages?populate=*" });
  const aboutUsCoreValue = await fetchContent({
    url: "/about-us-core-values?populate=*",
  });
  const aboutUsTimeline = await fetchContent({
    url: "/about-us-time-lines?populate=*",
  });
  console.log("aboutUsTimeline:: ", aboutUsTimeline);

  return (
    <div className="bg-[#020202]">
      {/* QUOTE */}
      <section>
        <AboutIntroductionCarousel aboutUsTimeline={aboutUsTimeline} />
      </section>

      <section className="container mx-auto py-[120px]">
        <div className="grid grid-cols-2 gap-20">
          <div
            style={{
              backgroundImage: `url('${
                BASE_IMAGE_URL +
                aboutUsPage.data[0].attributes.Media.data.attributes.url
              }')`,
            }}
            className={
              "relative w-full h-[412px] bg-no-repeat bg-cover bg-center overflow-hidden"
            }
          ></div>
          <div className="flex flex-col">
            <div>
              <h2 className="text-[48px] font-bold text-main-0">
                {aboutUsPage.data[0].attributes.BlockTitle1}
              </h2>
              <div className="text-2xl">
                {ReactHtmlParser(
                  aboutUsPage.data[0].attributes.BlockDescription1
                )}
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-[48px] font-bold text-main-0">
                {aboutUsPage.data[0].attributes.BlockTitle2}
              </h2>
              <div className="text-2xl">
                {ReactHtmlParser(
                  aboutUsPage.data[0].attributes.BlockDescription2
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
