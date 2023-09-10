"use client";

import { FC, useState } from "react";

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
      <div>
        <div className="flex rounded-[28px]">
          {tabs.map((tab: any, index: number) => {
            return (
              <div
                className="w-full p-3 flex flex-col items-center justify-center bg-black-0.75"
                onClick={() => {
                  setSelected(index);
                }}
                key={tab.title}
              >
                <div className="text-[20px] font-bold">{tab.title}</div>
                <div className="text-lg">({tab.open}) open positions</div>
              </div>
            );
          })}
        </div>
        <div>
          {tabs.map((tab: any, index: number) => {
            if (index === selected)
              return (
                <div key={tab.title}>
                  {tab.jobs.map((job: any) => {
                    return (
                      <div key={job.title}>
                        <div>
                          <h4>{job.title}</h4>
                          <div>{job.type}</div>
                          {job.isHot ? <div>Hot</div> : null}
                        </div>
                        <div>
                          <div>
                            {job.salary.type}: {job.salary.value}
                          </div>
                          <div>{job.date}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            else return null;
          })}
        </div>
      </div>
    </section>
  );
};
export default JobSection;
