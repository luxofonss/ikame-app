import { HTMLAttributes } from "react";

import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

import BlurRound from "@/components/BlurRournd";
import Button from "@/components/Button";
import LeaderQuote from "@/components/LeaderQoute";
import JobSection from "@/components/JobSection";
import fetchContent from "@/lib/fetch";

const tabs = [
  {
    title: "Biz & MKT department",
    open: 2,
    jobs: [
      {
        title: "Biz & MKT department",
        type: "Fulltime",
        isHot: true,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
      {
        title: "Biz & MKT department",
        type: "Fulltime",
        isHot: false,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
      {
        title: "Biz & MKT department",
        type: "Fulltime",
        isHot: false,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
      {
        title: "Biz & MKT department",
        type: "Fulltime",
        isHot: false,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
    ],
  },
  {
    title: "Biz & MKT department",
    open: 2,
    jobs: [
      {
        title: " 2 Biz & MKT department",
        type: "Fulltime",
        isHot: true,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
      {
        title: "Biz & MKT department",
        type: "Fulltime",
        isHot: false,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
      {
        title: "Biz & MKT department",
        type: "Fulltime",
        isHot: false,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
      {
        title: "Biz & MKT department",
        type: "Fulltime",
        isHot: false,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
    ],
  },
  {
    title: "Biz & MKT department",
    open: 2,
    jobs: [
      {
        title: "3 Biz & MKT department",
        type: "Fulltime",
        isHot: true,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
      {
        title: "Biz & MKT department",
        type: "Fulltime",
        isHot: false,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
      {
        title: "Biz & MKT department",
        type: "Fulltime",
        isHot: false,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
      {
        title: "Biz & MKT department",
        type: "Fulltime",
        isHot: false,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
    ],
  },
  {
    title: "Biz & MKT department",
    open: 2,
    jobs: [
      {
        title: "4 Biz & MKT department",
        type: "Fulltime",
        isHot: true,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
      {
        title: "Biz & MKT department",
        type: "Fulltime",
        isHot: false,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
      {
        title: "Biz & MKT department",
        type: "Fulltime",
        isHot: false,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
      {
        title: "Biz & MKT department",
        type: "Fulltime",
        isHot: false,
        salary: {
          type: "Upto",
          value: "1000$",
        },
        date: "2023-01-30",
      },
    ],
  },
];
interface IPeakItem {
  desc: string;
  img: string;
}

interface IPerfectPartItem extends HTMLAttributes<HTMLDivElement> {}

const peaks: IPeakItem[] = [
  {
    desc: "Inspiring culture where ambition & creativity lead the way ",
    img: "/peak1.svg",
  },
  {
    desc: "Opportunities to work with talented people in world-class projects & with world-class partners",
    img: "/peak2.svg",
  },
  {
    desc: "Environment for Non-stop learning & development: Tuition fee sponsorship of up to 100%",
    img: "/peak3.svg",
  },
  {
    desc: "Frequent Salary review & Performance Bonus: Twice per year",
    img: "/peak4.svg",
  },
  {
    desc: "Generous Monthly Lunch Allowance ",
    img: "/peak5.svg",
  },
  {
    desc: "Frequent Team Fun Days, Company events & holiday activities",
    img: "/peak6.svg",
  },
];

const perfectPartList = [
  "You have/or desire to have a purpose, a personal goal, and die to achieve it",
  "You have a growth mindset, who keep learning & improving yourself everyday",
  "You are always ready to get rid of old habits and thoughts, open to new ideas & suggestions",
  "You have excellent teamwork spirit. You work well to different types of people, and embrace the power of collaboration",
  "You take responsibilities for what you do. You never surrender to the obstacles, but find ways to overcome it by all means",
  "You respect the team and the company’s objectives. You are willing to make long-term contribution to the business.",
];

export default async function Career() {
  const careerPage = await fetchContent({
    url: "/career-pages?populate=*",
  });
  return (
    <div className="relative bg-[#131313] overflow-hidden">
      <BlurRound className=" w-[361px] h-[361px] absolute top-[161px] left-[433px]" />
      <BlurRound className=" w-[353px] h-[353px] absolute top-[595px] left-[-63px]" />
      <BlurRound className=" w-[206px] h-[206px] absolute top-[582px] right-[-60px]" />
      {/* QOUTE */}
      <section className=" w-full bg-no-repeat bg-cover bg-center h-[900px] bg-career-bg overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="pt-[281px] text-[60px] flex flex-col gap-4">
              {/* <h1 className="font-bold text-[60px] text-main-0">
                Career Opportunity
              </h1>
              <p className="font-medium text-[48px]">
                Reach the top of the world with
                <span className="text-main-0">iKame!</span>
              </p> */}
             {ReactHtmlParser(
                  careerPage.data[0].attributes.BlockTitle1
                )}
              <div>
                <Button>Apply</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[120px] container mx-auto">
        <div className="flex justify-center text-[48px] font-bold">
        {ReactHtmlParser(
                  careerPage.data[0].attributes.BlockTitle2
                )}
        </div>
        <div className="grid grid-cols-3 gap-14 mt-20">
          {peaks.map((peak) => (
            <PeakItem key={peak.img} {...peak} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button className="bg-transparent border-[1px] text-main-0 border-main-0 font-medium hover:bg-main-0 hover:text-white transition">
            View all jobs
          </Button>
        </div>
      </section>

      {/* DONT KNOW  */}
      <section className="w-full h-[1080px] bg-career-2 bg-cover bg-position-left bg-no-repeat">
        <div className="grid grid-cols-3 h-full mt-10">
          <div className="col-span-1"></div>
          <div className="col-span-2 bg-black-1 py-[140px] pl-[120px] pr-[308px]">
            <div className="text-[48px] font-bold">
            {ReactHtmlParser(
                  careerPage.data[0].attributes.BlockTitle3
                )}
            </div>
            <div className="flex flex-col gap-10">
              {perfectPartList.map((item: string) => {
                return <PerfectPartItem key={item}>{item}</PerfectPartItem>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LEADER QUOTE  */}
      <section className="py-[120px]">
        <LeaderQuote />
      </section>

      {/* JOBS  */}
      <JobSection careerPage={careerPage} tabs={tabs} />
    </div>
  );
}

const PeakItem = ({ desc, img }: IPeakItem) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[262px] h-[262px] bg-[#1f1f1f] rounded-full flex items-center justify-center">
        <Image src={img} alt="peak" width={142} height={156} />
      </div>
      <p className="mt-7 text-2xl text-center">{desc}</p>
    </div>
  );
};

const PerfectPartItem = ({ children, ...props }: IPerfectPartItem) => {
  return (
    <div className="flex items-center gap-6">
      <Image src="/check.svg" alt="checked" width={32} height={32} />
      <div className="text-2xl" {...props}>
        {children}
      </div>
    </div>
  );
};
