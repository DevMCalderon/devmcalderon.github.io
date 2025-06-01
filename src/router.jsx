import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy} from "react";

import { routes } from "@/routes";
import NotFound from "@/views/notFound/NotFound";
import ArticleLayout from "@/layouts/ArticleLayout";
import AllProjectCategoryList from "@/views/projects/AllProjectCategoryList";
import ProjectDetail from "@/views/projects/ProjectDetail";
import Loading from "@/views/loading/Loading";
import Home from "@/views/pages/Home";
import ProjectsCategoryOverview from "./views/projects/ProjectsCategoryOverview";

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
              element: <AllProjectCategoryList selectedCategoryId="" />,
            },
            {
              path: routes["projects-web"],
              element: <AllProjectCategoryList selectedCategoryId="projects-web" />,
            },
            {
              path: routes["projects-interfaces"],
              element: <AllProjectCategoryList selectedCategoryId="projects-interfaces" />,
            },
            {
              path: routes["projects-contributions"],
              element: <AllProjectCategoryList selectedCategoryId="projects-contributions" />,
            },
            {
              path: routes["Projects"] + "/:idCategory/:idProject",
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
