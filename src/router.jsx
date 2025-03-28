import { createBrowserRouter, Outlet } from "react-router-dom";

import { routes } from "./routes";
import NotFound from "./views/NotFound/NotFound";
import ScrollRestoration from "@/components/ScrollRestoration/ScrollRestoration";
// import { ScrollRestoration } from "react-router-dom";

import App from "./App";
import ArticleLayout from "./layouts/ArticleLayout";
import ProjectsCategoryOverview from "./views/Projects/ProjectsCategoryOverview";
import AllProjectCategoryList from "./views/Projects/AllProjectCategoryList";
import ProjectDetail from "./views/Projects/ProjectDetail";
import ProjectsCategoryCommon from "./components/Projects/ProjectsCategoryCommon";

const RootLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          index: true,
          element: <App />,
        },
        {
          element: <ArticleLayout />,
          children:
          [
            {
              path: routes["Projects"],
              element: <AllProjectCategoryList />,
            },
            {
              path: routes["Web Platforms & Applications"],
              // element: <ProjectsCategoryOverview categoryIndex="0" />,
            },
            {
              path: routes["Interface Design"],
              // element: <ProjectsCategoryOverview categoryIndex="1" />,
            },
            {
              path: routes["Community Contributions"],
              // element: <ProjectsCategoryOverview categoryIndex="2" />,
            },
            {
              path: "/projects/:idCategory/:idProject",
              // element: <ProjectsCategoryCommon />,
              element: <ProjectDetail />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: "/" } // Cambia el basename si es necesario.
);

export default router;
