import AchievementRound from "@/components/AchievementRound";
import BlurRound from "@/components/BlurRournd";
import Button from "@/components/Button";
import OutStandingProductSection from "@/components/OutstandingProductSection";
import ProductItem from "@/components/ProductItem";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface IWorkItem {
  color: string;
  svg: string;
  title: string;
  desc: string;
}

const workItems = [
  {
    color: "bg-[#F9AD96]",
    svg: "/message.svg",
    title: "Introduction",
    desc: "Communicate to know each other and find a way to work.",
  },
  {
    color: "bg-[#C1CF73]",
    svg: "/code.svg",
    title: "Evaluation",
    desc: "Share your app data for us to analyze and feedback on how to grow your app.",
  },
  {
    color: "bg-[#ABBE46]",
    svg: "/test.svg",
    title: "Introduction",
    desc: "Run UA campaigns with a specific budget, then identify the scalability and improvement in-app.",
  },
  {
    color: "bg-[#D6B872]",
    svg: "/like.svg",
    title: "Official Partner",
    desc: "We discuss the agreement, then both sign and officially become partners.",
  },
  {
    color: "bg-[#DB9266]",
    svg: "/up.svg",
    title: "Optimize & Scale",
    desc: "Analyze metrics, create an interaction roadmap, promote & monetize the app.",
  },
  {
    color: "bg-[#E2B74E]",
    svg: "/money.svg",
    title: "Get profits",
    desc: "We celebrate success with millions of profits together!",
  },
];

export default function Publishing() {
  return (
    <div className="bg-[#131313]">
      {/* QOUTE */}
      <section className="relative w-full bg-no-repeat bg-cover bg-center h-[900px] bg-banner-publishing overflow-hidden">
        <BlurRound className=" w-[361px] h-[361px] absolute top-[161px] left-[433px]" />
        <BlurRound className=" w-[353px] h-[353px] absolute top-[595px] left-[-63px]" />
        <BlurRound className=" w-[206px] h-[206px] absolute top-[582px] right-[-60px]" />
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="pt-[281px] flex flex-col gap-4">
              <h1 className="font-bold text-[60px] ">
                <span className="text-main-0">Publish</span> with us
              </h1>
              <p className="font-bold text-[24px]">
                Your App Journey Starts Here
              </p>
              <div>
                <Button>Join us as Partners</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ACHIEVEMENT */}
      <section className="w-full bg-no-repeat bg-contain bg-bottom h-[798px] bg-download-bg">
        <div className="container h-full mx-auto flex justify-between items-center">
          <AchievementRound
            src="/download-icon.svg"
            alt="download"
            number="Top 1"
            desc="Download in ASEA"
          />
          <AchievementRound
            src="/user-icon.svg"
            alt="user"
            number="5M+"
            desc="Daily  Active Users"
          />
          <AchievementRound
            src="/users-icon.svg"
            alt="users"
            number="1.8 B+"
            desc="Total Download"
          />
          <AchievementRound
            src="/product-icon.svg"
            alt="products"
            number="100+"
            desc="Successful Products"
          />
        </div>
      </section>
      {/* PROS  */}
      <section className="container mx-auto py-[120px]">
        <div className="flex flex-col gap-[50px]">
          <div className="grid grid-cols-2">
            <div className="w-full flex flex-col justify-between items-center h-[342px] bg-main-0 pt-[26px] px-[35px] pb-[30px] rounded-l-[28px]">
              <Image src="/user-tag.svg" alt="user" width={100} height={100} />
              <div className="text-[30px] font-bold ">Professional team</div>
              <p className="text-2xl text-center">
                UA expertise, Market researcher, Monetizer, Idea Creative,
                Product operator are passionate about joining projects.
              </p>
            </div>
            <div className="bg-pub-1 w-full h-[342px] rounded-r-[28px]"></div>
          </div>
          <div className="grid grid-cols-2">
            <div className="bg-pub-2 w-full h-[342px] rounded-r-[28px]"></div>
            <div className="w-full flex flex-col justify-between items-center h-[342px] bg-[#05303B] pt-[26px] px-[35px] pb-[30px] rounded-l-[28px]">
              <Image src="/flag.svg" alt="flag" width={100} height={100} />
              <div className="text-[30px] font-bold ">Best in class</div>
              <p className="text-2xl text-center">
                You receive key factors and market insights to make a successful
                product global from us.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="w-full flex flex-col justify-between items-center h-[342px] bg-[#05303B] pt-[26px] px-[35px] pb-[30px] rounded-l-[28px]">
              <Image
                src="/question.svg"
                alt="question"
                width={100}
                height={100}
              />
              <div className="text-[30px] font-bold "> Ultimate support</div>
              <p className="text-2xl text-center">
                Do not worry if any difficulties arise, we are always by your
                side.
              </p>
            </div>
            <div className="bg-pub-3 w-full h-[342px] rounded-r-[28px]"></div>
          </div>
          <div className="grid grid-cols-2">
            <div className="bg-pub-4 w-full h-[342px] rounded-r-[28px]"></div>
            <div className="w-full flex flex-col justify-between items-center h-[342px] bg-[#05303B] pt-[26px] px-[35px] pb-[30px] rounded-l-[28px]">
              <Image
                src="/commitment.svg"
                alt="commitment"
                width={100}
                height={100}
              />
              <div className="text-[30px] font-bold ">
                Commitment & Transparency
              </div>
              <p className="text-2xl text-center">
                Access the Top-tier BI and data analysis systems that meet
                international standards
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="w-full flex flex-col justify-between items-center h-[342px] bg-[#05303B] pt-[26px] px-[35px] pb-[30px] rounded-l-[28px]">
              <Image src="/money.svg" alt="money" width={100} height={100} />
              <div className="text-[30px] font-bold "> Financial Coverage</div>
              <p className="text-2xl text-center">
                We take care of all marketing expenses throughout the
                application&apos;s growth phase.
              </p>
            </div>
            <div className="bg-pub-5 w-full h-[342px] rounded-r-[28px]"></div>
          </div>
        </div>
      </section>

      {/* WORK TOGETHER  */}
      <section className="container mx-auto py-[120px]">
        <div className="flex justify-center text-[48px] font-bold">
          How do we work together?
        </div>
        <div className="grid grid-cols-3 gap-[66px]">
          {workItems.map((item) => {
            return <WorkItem key={item.title} {...item} />;
          })}
        </div>
      </section>

      {/* OUTSTANDING PRODUCT  */}
      <OutStandingProductSection />
    </div>
  );
}

const WorkItem: FC<IWorkItem> = ({ svg, title, color, desc }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "w-[101px] h-[101px] rounded-full flex items-center justify-center",
          color
        )}
      >
        <Image src={svg} alt="title" width={50} height={50} />
      </div>
      <div className="mt-8 p-10 h-[288px] bg-[#1F1F1F] rounded-[40px] flex flex-col items-between">
        <h3 className="font-bold text-4xl text-center">{title}</h3>
        <p className="text-2xl text-center mt-6">{desc}</p>
      </div>
    </div>
  );
};
