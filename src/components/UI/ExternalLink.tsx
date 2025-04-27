import clsx from "clsx";
import { ReactNode } from "react";

type ExternalLinkProps = {
  icon?: ReactNode;
  text: string;
  href: string;
  className?: string;
};

const ExternalLink = ({ icon, text, href, className }: ExternalLinkProps) => {
  return (
    <div className={clsx("mb-4", className)}>
      <p className="article-description text-xl"> 
        <a
          className="flex items-center"
          href={ href }
          target="_blank"
          rel="noreferrer noopener"
          >
          { icon && <span className="link">{ icon }</span>}
          <span className="link">{ text }</span>
        </a>
      </p>
    </div>
  );
};

export default ExternalLink;