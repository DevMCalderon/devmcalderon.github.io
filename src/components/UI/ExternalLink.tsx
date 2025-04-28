import clsx from "clsx";
import { ReactNode } from "react";
import { IconRightArrowCircle } from "@/components/Icons";

type ExternalLinkProps = {
  icon?: ReactNode;
  text: string;
  href: string;
  className?: string;
  showDecoration?: boolean;
};

const ExternalLink = ({ icon, text, href, className, showDecoration=false }: ExternalLinkProps) => {
  return (
    <div className={clsx("mb-4 flex", className)}>
      <p className="article-description text-xl"> 
        <a
          className="flex items-center group"
          href={ href }
          target="_blank"
          rel="noreferrer noopener"
          >
          { icon && <span className="link">{ icon }</span>}
          <span className="link">{ text }</span>

          { showDecoration && (
            <div className="justify-start ml-2 group-hover:ml-5 duration-500 ease-in-out transition-all ">
            <IconRightArrowCircle />
          </div>
          )}
        </a>
      </p>
    </div>
  );
};

export default ExternalLink;