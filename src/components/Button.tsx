import { cn } from "@/lib/utils";
import { FC } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button: FC<IButtonProps> = ({
  className,
  children,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn(
        "py-[10px] px-5 bg-button-gradient rounded-[14px]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
