import clsx from "clsx";
import { ReactNode } from "react";

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
            <div className="justify-start group-hover:ml-1 duration-1000 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="17" height="17" fill="currentColor"><path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></svg>
          </div>
          )}
        </a>
      </p>
    </div>
  );
};

export default ExternalLink;