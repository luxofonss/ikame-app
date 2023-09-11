import Input from "@/components/Input";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {};
const JobDetail: FC<Props> = ({}) => {
  return (
    <div className="relative py-28 bg-[#131313] overflow-hidden">
      {/* QOUTE */}
      <section className=" w-full overflow-hidden">
        <div>
          <Link
            href="/career"
            className="container mx-auto flex gap-2 cursor-pointer"
          >
            <Image src={"/back.svg"} alt="back" width={9} height={9} />
            <div className="text-main-0">Back to all positions</div>
          </Link>
          <div className="bg-black-1">
            <div className="container mx-auto grid grid-cols-3 bg-black-1">
              <div className="col-span-2"></div>
              <div className="col-span-1 mt-3">
                <h3 className="font-bold text-[28px]">Apply here</h3>
                <div className="flex flex-col gap-4">
                  <Input id="first-name" label="First name" isRequired />
                  <Input id="last-name" label="Last name" isRequired />
                  <Input id="email" label="Email" isRequired />
                  <Input id="phone" label="Phone" isRequired />
                  <Input
                    id="linkedin"
                    label="LinkedIn profile URL"
                    isRequired
                  />
                  <div className="flex flex-col gap-[2]">
                    <div className="leading-9">Resume</div>
                    <label
                      className="text-main-0 cursor-pointer"
                      htmlFor="resume"
                    >
                      Attach Resume
                    </label>
                    <input
                      className="h-11 hidden px-3 bg-transparent rounded-lg border-[1px] border-border transition"
                      id="resume"
                      type="file"
                    />
                  </div>
                  <Input
                    id="personal-profile"
                    label="Personal profile URL"
                    isRequired
                  />
                  <div className="flex flex-col gap-[2]">
                    <label
                      className="text-main-0 cursor-pointer leading-9"
                      htmlFor="cover-letter"
                    >
                      Attach Cover Letter
                    </label>
                    <input
                      className="h-11 hidden px-3 bg-transparent rounded-lg border-[1px] border-border transition"
                      id="cover-letter"
                      type="file"
                    />
                  </div>
                  <div className="flex flex-col gap-[2]">
                    <label
                      className="text-main-0 cursor-pointer leading-9"
                      htmlFor="portfolio"
                    >
                      Attach Portfolio
                    </label>
                    <input
                      className="h-11 hidden px-3 bg-transparent rounded-lg border-[1px] border-border transition"
                      id="portfolio"
                      type="file"
                    />
                  </div>
                  <div className="flex flex-col gap-[2]">
                    <label
                      className="text-main-0 cursor-pointer leading-9"
                      htmlFor="personal-note"
                    >
                      Personal note
                    </label>
                    <textarea
                      rows={4}
                      className="px-3 bg-transparent rounded-lg border-[1px] border-border transition"
                      id="personal-note"
                    />
                  </div>
                  <button className="bg-main-0 text-2xl uppercase py-4 flex justify-center rounded-2xl">
                    Submit application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default JobDetail;
