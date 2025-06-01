import { useTranslation } from "react-i18next";

const ProjectsCategoryOverview = ({ categoryData }) => {
  const [ t ] = useTranslation("global");
  return (
    <>
      <hr className="hr1 text-indigo-400 lg:max-w-screen-2xl  mb-4 my-7 w-10/12 mx-auto"/>
      <h2 className="text-center font-bold text-blue-200 text-2xl mb-1">{t(`projects.selected_category`)}</h2>
      <h1 className="text-center font-bold text-white text-4xl mb-4">{categoryData.category}</h1>
      <p className="mx-auto text-white mb-5 w-[90%] md:w-4/5">{categoryData.description}</p>
    </>
  );
};

export default ProjectsCategoryOverview;