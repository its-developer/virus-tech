import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import OurTeam from "./Pages/OurTeam";
import Layout from "./Layout";
import HomePageBakcground from "./images/HomePage.png";
import OurWorkBackground from "./images/OurWork.png";
import ContactUsBackground from "./images/ContactUs.png";
import OurTeamBackground from "./images/OurTeam.png";

export const routes = [
  // {path: "/", component: HomePage, layout: Layout, rootClasses: "home-star-bg", rootStyle: {backgroundImage: `url("${HomeAndNewsPageImg}")`}},
  {
    path: "/",
    component: HomePage,
    layout: Layout,
    rootClasses: "home-page",
    rootStyle: {
      // backgroundImage: `url("${HomePageBakcground}")`,
      minHeight: "2905px",
      // backgroundRepeat: "none",
      // backgroundSize: "100% 100%",
    },
    title: "Home Page",
  },
  {
    path: "/contact-us",
    component: ContactUs,
    layout: Layout,
    rootClasses: "contact-us",
    rootStyle: {
      // backgroundImage: `url("${ContactUsBackground}")`,
      minHeight: "600px",
      // backgroundRepeat: "none",
      // backgroundSize: "100% 100%",
    },
    hideBox: true,
    title: "Contact Us",
  },
  {
    path: "/our-work",
    component: OurWork,
    layout: Layout,
    rootClasses: "our-work",
    rootStyle: {
      // backgroundImage: `url("${OurWorkBackground}")`,
      minHeight: "1434px",
      // backgroundRepeat: "none",
      // backgroundSize: "100% 100%",
    },
    title: "Our Work",
  },
  {
    path: "/team",
    component: OurTeam,
    layout: Layout,
    rootClasses: "our-team",
    rootStyle: {
      // backgroundImage: `url("${OurTeamBackground}")`,
      minHeight: "1534px",
      // backgroundRepeat: "none",
      // backgroundSize: "100% 100%",
    },
    title: "Our Team",
  },
];
