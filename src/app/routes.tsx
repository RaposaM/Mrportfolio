import { createHashRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "projects",
        Component: Projects,
      },
    ],
  },
]);
