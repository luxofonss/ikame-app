"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import ReactHtmlParser from "react-html-parser";
import Badge from "./Badge";
import Link from "next/link";

type IJobSectionProps = {
  tabs: any;
  careerPage: any;
  hrJobs: any;
};
const JobSection: FC<IJobSectionProps> = ({ tabs, careerPage, hrJobs }) => {
  const [selected, setSelected] = useState(0);
  return (
    <section className="container mx-auto py-[84px]">
      <h3 className="text-center text-[48px]">
        {ReactHtmlParser(careerPage.data[0].attributes.BlockTitle4)}
      </h3>

      {/* TABS  */}
      <div className="mt-[82px]">
        <ul className="flex bg-black-0.75 rounded-[28px]">
          {tabs.map((tab: any, index: number) => {
            return (
              <li
                className={cn(
                  "w-full p-3 flex flex-col items-center justify-center cursor-pointer  first:rounded-l-[28px] last:rounded-r-[28px]",
                  index === selected ? "bg-main-0" : ""
                )}
                onClick={() => {
                  setSelected(index);
                }}
                key={tab.title}
              >
                <div className="text-[20px] font-bold">{tab.title}</div>
                <div className="text-lg">({tab.open}) open positions</div>
              </li>
            );
          })}
        </ul>
        <div className="mt-[50px]">
          {hrJobs.data.map((tab: any, index: number) => {
            return (
              <div
                className={cn(
                  "flex flex-col gap-7",
                  index === selected ? "flex" : "hidden"
                )}
                key={tab.attributes.Title}
              >
                {tab.attributes.hr_jobs.data.map((job: any) => {
                  return (
                    <div
                      className="py-8 px-10 rounded-[28px] bg-main-3"
                      key={job.attributes.Title}
                    >
                      <div className="flex gap-5">
                        <Link href={"/career/" + job.id}>
                          <h4 className="text-2xl font-bold">
                            {job.attributes.Title}
                          </h4>
                        </Link>
                        {job.attributes.Tag.split(",").map((tag: string) => {
                          return (
                            <Badge key={tag} outline={tag !== "Hot"}>
                              {tag}
                            </Badge>
                          );
                        })}
                      </div>
                      <div className="flex gap-5 text-xl">
                        <div>upto: ${job.attributes.salary}</div>
                        <div>|</div>
                        <div>{job.attributes.Expired}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default JobSection;
