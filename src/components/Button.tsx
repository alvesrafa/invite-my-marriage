import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  children: ReactNode;
}

export function Button({ color, children, ...props }: Props) {
  return (
    <button
      className={`${color} rounded-md p-2 font-bold text-white transition ease-in-out delay-10 m-2`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
