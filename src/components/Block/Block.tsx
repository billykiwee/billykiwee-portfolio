import { HtmlHTMLAttributes, ReactNode } from "react";
import "./block.scss";

export function Block({
  children,
  label,
  ...restProps
}: {
  children: ReactNode;
  label: string;
} & HtmlHTMLAttributes<HTMLElement>) {
  return (
    <article className="block" {...restProps}>
      <label>{label.toUpperCase()}</label>
      {children}
    </article>
  );
}
