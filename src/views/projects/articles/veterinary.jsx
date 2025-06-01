import { Trans, useTranslation } from "react-i18next";

import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/uI/ArticleVideoSection";
import Heading from "@/components/uI/Heading";
import DependenciesSection from "@/components/projects/article/DependenciesSection";
import ExternalLink from "@/components/uI/ExternalLink";
import { IconGitHub } from "@/components/uI/Icons";

const dependencies = {
  hasDependencies: true,
  backend: {
    composerJSON: [
      "Barryvdh/laravel-dompdf",
      "Doctrine/dbal",
      "Facade/ignition",
      "Fakerphp/faker",
      "Fruitcake/laravel-cors",
      "Guzzlehttp/guzzle",
      "Intervention/image",
      "Laravel/framework",
      "Laravel/sail",
      "Laravel/sanctum",
      "Laravel/socialite",
      "Laravel/tinker",
      "Laravel/ui",
      "Mockery/mockery",
      "Nunomaduro/collision",
      "Phpunit/phpunit",
      "Socialiteproviders/facebook",
    ],
  },
  frontend: {
    packageJSON: [
      "Axios" ,
      "Bootstrap",
      "Laravel-mix",
      "Lodash",
      "Postcss",
      "Resolve-url-loader",
      "Sass",
      "Sass-loader",
      "Vue",
      "Vue-loader",
      "Vue-template-compiler",
      "Jquery",
      "Sweetalert2",
    ],
  },
};

const veterinary = {
  Links: () => {
    const { t } = useTranslation("global");
    return (
      <ExternalLink
        icon={<IconGitHub />}
        text={t(`projectDetail.repository_link_text`)}
        href={import.meta.env.VITE_VETERINARY_REPOSITORY_URL}
      />
    )
  },
  Dependencies: () => <DependenciesSection dependencies={dependencies} />,
  ExtendedDescription: () => 
  {
    const { t } = useTranslation("projectVeterinary");
    return (
    <>
      <Heading tag="h4" className="text-2xl font-semibold mb-5 text-white">{t('veterinary.title')}</Heading>
      <p className="article-description-paragraph">
        <Trans
          i18nKey={t('veterinary.paragraph1')}
          components={[ <HighlightText/> ]}
        />
      </p>
      <p className="article-description-paragraph">{t('veterinary.paragraph2')}</p>
      <Heading tag="h5">{t('veterinary.backendHeading')}</Heading>
      <ul className="article-description-list">
        <li>
          <Trans
            i18nKey={t('veterinary.backendList.0')}
            components={[ <HighlightText/> ]}
          />
        </li>
        <li>{t('veterinary.backendList.1')}</li>
        <li>{t('veterinary.backendList.2')}</li>
        <li>{t('veterinary.backendList.3')}</li>
      </ul>
      <Heading tag="h5">{t('veterinary.frontendHeading')}</Heading>
      <ul className="article-description-list">
        <li>{t('veterinary.frontendList.0')}</li>
        <li>{t('veterinary.frontendList.1')}</li>
      </ul>
      <Heading tag="h5">{t('veterinary.organizationHeading')}</Heading>
      <ul className="article-description-list">
        <li>{t('veterinary.organizationList.0')}</li>
        <li>{t('veterinary.organizationList.1')}</li>
      </ul>
    </>
  )},
  Features: () => {
    const { t } = useTranslation("projectVeterinary");
    return (
    <>
      <ArticleVideoSection 
        labelledby="client-create" 
        title={t('veterinary.videos.clientCreate.title')}
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1743551200/cliente-crear_lhizi2.mp4"
        caption={t('veterinary.videos.clientCreate.caption')}
      />
      <ArticleVideoSection 
        labelledby="client-edit"
        title={t('veterinary.videos.clientEdit.title')}
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1743478270/ycbipkgdwuqpnrpe9uom.mp4"
      />
      <ArticleVideoSection 
        labelledby="client-show"
        title={t('veterinary.videos.clientShow.title')}
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745197274/cliente-detalle_befbzl.mp4"
      />
      <ArticleVideoSection 
        labelledby="client-destroy"
        title={t('veterinary.videos.clientDestroy.title')}
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/portfolio_videos/veterinary/cliente-eliminar.mp4"
      />
      <ArticleVideoSection 
        labelledby="empresa-edit"
        title={t('veterinary.videos.empresaEdit.title')}
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745209407/portfolio_videos/veterinary/zpbidilyvla2ei3eoxtm.mp4"
      />
      <ArticleVideoSection 
        labelledby="pet-create"
        title={t('veterinary.videos.petCreate.title')}
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745209627/portfolio_videos/veterinary/cdbg6z29qymilhxuthxu.mp4"
      />
      <ArticleVideoSection 
        labelledby="pet-destoy"
        title={t('veterinary.videos.petDestroy.title')}
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745211407/portfolio_videos/veterinary/ralnmtfoytilmgg8becy.mp4"
      />
      <ArticleVideoSection 
        labelledby="register-create-empresa"
        title={t('veterinary.videos.register.title')}
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745211520/portfolio_videos/veterinary/joaojdbthvi8embyeifr.mp4"
      />
    </>
  )},
};

export default veterinary;
