import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <div className={props.rootClasses} style={props.rootStyle}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
