import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface IBadge extends HTMLAttributes<HTMLDivElement> {
  outline?: boolean;
}

const Badge: FC<IBadge> = ({ children, outline }) => {
  return (
    <div
      className={cn(
        "py-1 px-5 rounded-[30px]",
        outline ? "border-[1px] border-main-0 text-main-0" : "bg-main-0"
      )}
    >
      {children}
    </div>
  );
};
export default Badge;
