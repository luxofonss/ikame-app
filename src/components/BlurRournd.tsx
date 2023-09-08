import { FC } from "react";

import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLElement> {}
const BlurRound: FC<Props> = ({ className }) => {
  return (
    <>
      <div
        className={cn("rounded-full bg-blur-round blur-xl", className)}
      ></div>
    </>
  );
};
export default BlurRound;
