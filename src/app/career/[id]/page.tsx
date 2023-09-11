import Link from "next/link";
import { FC } from "react";

type Props = {};
const JobDetail: FC<Props> = ({}) => {
  return (
    <div>
      <div>
        <span>back</span>
        <Link href="/career">Back to all positions</Link>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2"></div>
        <div className="col-span-1">
          <h3>Apply here</h3>
        </div>
      </div>
    </div>
  );
};
export default JobDetail;
