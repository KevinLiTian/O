import Page404 from "../pages/Page404/Page404";
import HomePage from "../pages/HomePage/HomePage";
import O from "../pages/O/O";

export const pages = {
  404: {
    label: "404",
    component: <Page404 />,
  },
  main: [
    {
      label: "Home",
      component: <HomePage />,
      path: "/",
    },
    {
      label: "O",
      component: <O />,
      path: "/O",
    },
  ],
};
