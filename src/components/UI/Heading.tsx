import { ReactNode } from "react";
import clsx from "clsx";

type ValidHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  tag?: ValidHeading;
  children: ReactNode;
  id?: string;
  className?: string;
};

const Heading = ({
    tag: Tag = "h5", //h5 default
    children,
    id,
    className,
  }: HeadingProps) => {
  return (
    <Tag 
      id={id} 
      className={clsx(
        {
          "h1-title": Tag === "h1",
          "h2-title": Tag === "h2",
          "h3-title": Tag === "h3",
          "h4-title": Tag === "h4",
          "h5-title": Tag === "h5",
          "h6-title": Tag === "h6",
        },
        className
    )}>
      {children}
    </Tag>
  );
};

export default Heading;