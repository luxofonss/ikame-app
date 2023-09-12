import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

import ApplyJobForm from "@/components/JobApplyForm";
import Image from "next/image";
import fetchContent from "@/lib/fetch";

const JobDetail = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);

  const jobDesc = await fetchContent({
    url: "/hr-jobs/" + params.id,
  });

  console.log("jobDesc:: ", jobDesc);
  if (!jobDesc.data) return <div>no data</div>;
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
            <div className="container mx-auto grid grid-cols-3 bg-black-1 gap-20">
              <div className="col-span-2 mt-9 leading-9">
                {ReactHtmlParser(jobDesc.data.attributes.Description)}
              </div>
              <ApplyJobForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default JobDetail;
