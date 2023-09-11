"use client";

import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import Badge from "./Badge";

type IJobSectionProps = {
  tabs: any;
};
const JobSection: FC<IJobSectionProps> = ({ tabs }) => {
  const [selected, setSelected] = useState(0);
  return (
    <section className="container mx-auto py-[84px]">
      <h3 className="text-center text-[48px]">
        Ready to build Giant App Together?{" "}
      </h3>
      <h3 className="text-center text-[48px] font-bold">
        Check out our available positions
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
          {tabs.map((tab: any, index: number) => {
            return (
              <div
                className={cn(
                  "flex flex-col gap-7",
                  index === selected ? "flex" : "hidden"
                )}
                key={tab.title}
              >
                {tab.jobs.map((job: any) => {
                  return (
                    <div
                      className="py-8 px-10 rounded-[28px] bg-main-3"
                      key={job.title}
                    >
                      <div className="flex gap-5">
                        <h4 className="text-2xl font-bold">{job.title}</h4>
                        <Badge outline>{job.type}</Badge>
                        {job.isHot ? <Badge>Hot</Badge> : null}
                      </div>
                      <div className="flex gap-5 text-xl">
                        <div>
                          {job.salary.type}: {job.salary.value}
                        </div>
                        <div>|</div>
                        <div>{job.date}</div>
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
