import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
import Layout from "./Layout";
import HomePageBakcground from "./images/HomePage.png";

export const routes = [
  // {path: "/", component: HomePage, layout: Layout, rootClasses: "home-star-bg", rootStyle: {backgroundImage: `url("${HomeAndNewsPageImg}")`}},
  {
    path: "/",
    component: HomePage,
    layout: Layout,
    rootClasses: "home-page",
    rootStyle: {
      backgroundImage: `url("${HomePageBakcground}")`,
      minHeight: "2905px",
      backgroundRepeat: "none",
      backgroundSize: "100% 100%",
    },
    title:
      "Home Page",
  },
  {
    path: "/contact-us",
    component: HomePage,
    layout: Layout,
    rootClasses: "home-page",
    rootStyle: {
      backgroundImage: `url("${HomePageBakcground}")`,
      minHeight: "2905px",
      backgroundRepeat: "none",
      backgroundSize: "100% 100%",
    },
    title:
      "Contact Us",
  },
];
