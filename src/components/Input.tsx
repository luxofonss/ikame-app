import { FC, HTMLAttributes } from "react";

interface IInput extends HTMLAttributes<HTMLInputElement> {
  label: string;
  isRequired?: boolean;
}
const Input: FC<IInput> = ({ id, label, isRequired, ...props }) => {
  return (
    <div className="flex flex-col gap-[2]">
      <label className="leading-9" htmlFor={id}>
        {label} {isRequired ? <span className="text-required">*</span> : null}
      </label>
      <input
        className="h-11 px-3 bg-transparent rounded-lg border-[1px] border-border transition"
        id={id}
        type="text"
        {...props}
      />
    </div>
  );
};
export default Input;
