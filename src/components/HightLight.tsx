import { FC } from "react";
import AchievementRound from "./AchievementRound";
import { BASE_IMAGE_URL } from "@/configs";
import fetchContent from "@/lib/fetch";

type Props = {};
const HightLight: FC<Props> = async ({}) => {
  const hightLight = await fetchContent({
    url: "/highlights?populate=*",
  });
  return (
    <section className="w-full bg-no-repeat bg-contain bg-bottom h-[798px] bg-download-bg">
      <div className="container h-full mx-auto flex justify-between items-center">
        {hightLight.data.map((item: any, index: number) => {
          return (
            <AchievementRound
              key={item.attributes.Title}
              src={
                BASE_IMAGE_URL + item.attributes.Media.data[0].attributes.url
              }
              alt={item.attributes.Title}
              number={item.attributes.Title}
              desc={item.attributes.Description}
            />
          );
        })}
      </div>
    </section>
  );
};
export default HightLight;
