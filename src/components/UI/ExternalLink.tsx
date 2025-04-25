import { ReactNode } from "react";

type ExternalLinkProps = {
  icon?: ReactNode;
  text: string;
  href: string;
};

const ExternalLink = ({ icon, text, href }: ExternalLinkProps) => {
  return (
    <div className="mb-5">
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