import { IconBuildingConstruction, IconConstruction } from "@/components/uI/Icons";

const ArticleEmptyView = ({ noun="Este artículo" }) => (
  <div className="bg-main-gradient rounded-3xl px-2 pt-5 pb-16 w-10/12 mx-auto text-center">
    <div className="text-8xl mb-3"> <IconConstruction className="mr-0" /> </div>
    <h2 className="text-4xl mb-5 text-yellow-100">¡Ups! {noun} aún está en construcción...</h2>
    <h3 className="text-3xl text-white">¡Vuelve pronto y descubre qué estamos preparando! <IconBuildingConstruction /> </h3>
  </div>
);

export default ArticleEmptyView;