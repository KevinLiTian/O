import Page404 from "../pages/Page404/Page404";
import HomePage from "../pages/HomePage/HomePage";

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
  ],
};
