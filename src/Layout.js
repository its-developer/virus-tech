import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = (props) => {
  return (
    <>
      <div className={props.rootClasses} style={props.rootStyle}>
        <props.element navbar={Navbar} />
      </div>
      <Footer hideBox={props.hideBox} />
    </>
  );
};

export default Layout;
