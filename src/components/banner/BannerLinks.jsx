import { IconGitHub, OpenFileFolder } from "@/components/uI/Icons";
import ExternalLink from "@/components/uI/ExternalLink";
import SocialIconsSmall from "@/components/socialIconsSmall/SocialIconsSmall";

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
      <div className="flex flex-wrap">
        <p className="mb-3 h-full md:my-auto text-xl paragraphStyles text-left mr-2">Mis redes sociales:</p>
        <SocialIconsSmall />
      </div>
    </>
  );
};

export default BannerLinks;