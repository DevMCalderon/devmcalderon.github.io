import { IconGitHub, OpenFileFolder } from "@/components/uI/Icons";
import ExternalLink from "@/components/uI/ExternalLink";
import SocialIcons from "@/components/socialIcons/SocialIcons";

const BannerLinks = ({ t }) => {
  return (
    <>
      {/* cv */}
      <ExternalLink
        icon={<OpenFileFolder />}
        text={t(`banner.cv2`)}
        href=""
        className="mb-6"
        showDecoration={true}
      />
      
      {/* portfolio source code */}
      <ExternalLink
        icon={<IconGitHub />}
        text={t(`banner.portfolio_source_code_text`)}
        href={import.meta.env.VITE_GITHUB_PORTFOLIO_URL}
        className="mb-6"
        showDecoration={true}
      />

      {/* social networks */}
      <SocialIcons />
    </>
  );
};

export default BannerLinks;