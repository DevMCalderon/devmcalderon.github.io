import { createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense, lazy} from "react";

import { routes } from "@/routes";
import NotFound from "@/views/NotFound/NotFound";
import ArticleLayout from "@/layouts/ArticleLayout";
import AllProjectCategoryList from "@/views/Projects/AllProjectCategoryList";
import ProjectDetail from "@/views/Projects/ProjectDetail";
import Loading from "@/views/Loading/Loading";
import Home from "@/views/Pages/Home";

const App = lazy(() => import('./App'));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
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
);

export default router;
