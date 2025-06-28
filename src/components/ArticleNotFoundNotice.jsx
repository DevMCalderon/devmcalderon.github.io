import { IconBuildingConstruction, IconConstruction } from "@/components/uI/Icons";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const ArticleNotFoundNotice = ({ noun="Este artículo", className="" }) => {
  const [ t ] = useTranslation("global");
  
  return (
    <div className={
      clsx('bg-main-gradient rounded-3xl px-2 md:px-14 pt-5 pb-16 mx-auto text-center', className)}
    >
      <div className="mb-3"> <IconConstruction className="mr-0 text-7xl" /> </div>
      <h2 className="text-3xl mb-5 text-yellow-100">
        {t(`article_empty_view.header1`)} {noun} {t(`article_empty_view.header2`)}
      </h2>
      <h3 className="text-2xl text-white">{t(`article_empty_view.paragraph`)} <IconBuildingConstruction /> </h3>
    </div>
  );
}; 

export default ArticleNotFoundNotice;