import React from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Paper, Skeleton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FooterBackgroup from "../images/FooterBackgroup.png";
import OwlCarousel from "react-owl-carousel";
import { ArrowForwardRounded } from "@mui/icons-material";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Importing all images
import Image1 from "../images/image1.png";
import Image2 from "../images/image2.png";
import Image3 from "../images/image3.png";
import Image4 from "../images/image4.png";

import Work1 from "../images/Work1.png";
import Work2 from "../images/Work2.png";
import Work3 from "../images/Work3.png";
import Work4 from "../images/Work4.png";

import BoxImage1 from "../images/Kerfin7_NEA_234.png";
import BoxImage2 from "../images/Kerfin7_NEA_247.png";
import BoxImage3 from "../images/Network Sphere.png";

import RectangleBg from "../images/Rectangle 10.png";

const useStyles = makeStyles((theme) => ({
  middleBoxImage: {
    [theme.breakpoints.up("md")]: {
      marginTop: "-95px",
      width: 240,
      paddingBottom: 40,
    },
  },
  simpleBox: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "row !important",
    },
  },
  accessibleDevice: {
    width: 200,
    background: "rgba(0,0,0,.3)",
    padding: "20px 0",
    margin: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  workBox: {
    "& .hoveredText": {
      transition: ".5s ease-in-out",
      marginTop: 20,
      display: "none",
    },
    "&:hover": {
      "& img": {
        transition: ".5s ease-in-out",
        zIndex: 99999,
        transform: "scale(1.1)",
      },
      "& .hoveredText": {
        display: "block",
      },
    },
  },
}));
const responsive = {
  0: {
    items: 1,
  },
  576: {
    items: 2,
  },
  767: {
    items: 3,
  },
  1000: {
    items: 4,
  },
};

const HomePage = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={`d-flex flex-column justify-content-center py-5`}>
        <h1 className='text-center display-3'>Virus Tech</h1>
        <p className='mx-auto text-center' style={{ fontSize: 19 }}>
          A no-code VR platform for businesses, where users can build and deploy
          <br />
          their own virtual reality worlds.
        </p>
      </div>
      <div style={{ height: 300 }} />
      <div
        className='py-5'
        style={{ backgroundImage: `url('${FooterBackgroup}')` }}>
        <h1 className='text-center'>Trusted By</h1>
        <br />
        <OwlCarousel
          className='owl-theme'
          autoplayTimeout={2000}
          responsive={responsive}
          URLhashListener
          startPosition='URLHash'
          center
          loop
          margin={30}>
          <div className='item d-flex align-items-center justify-content-center'>
            <img style={{ height: 110, width: "230px" }} src={Image1} />
          </div>
          <div className='item d-flex align-items-center justify-content-center'>
            <img style={{ height: 110, width: "230px" }} src={Image2} />
          </div>
          <div className='item d-flex align-items-center justify-content-center'>
            <img style={{ height: 110, width: "230px" }} src={Image3} />
          </div>
          <div className='item d-flex align-items-center justify-content-center'>
            <img style={{ height: 110, width: "230px" }} src={Image4} />
          </div>
        </OwlCarousel>
      </div>

      <div style={{ height: 200 }} />
      <div className='container'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div
            className={`col-md-3 col-12 mx-2 d-flex align-items-center justify-content-center flex-column px-4 pt-2 pb-3 mt-3 ${classes.simpleBox}`}
            style={{
              background: "rgba(255, 255, 255, 0.10196078431372549)",
            }}>
            <img src={BoxImage2} style={{ width: 200 }} />
            <div className='w-100'>
              <h4 className={"m-0 p-0"}>Digi</h4>
              <h2 className={"m-0 p-0"}>
                <b>Verse</b>
              </h2>
              <p className='m-0 p-0 small mt-2' style={{ fontSize: 13 }}>
                The Digivirse is a VR platform unlocking the metaverse for
                businesses, allowing users to access different virtual reality
                worlds through all mediums.
              </p>
            </div>
          </div>
          <div
            className={`col-md-3 col-12 mx-2 d-flex align-items-center justify-content-center flex-column px-4 pt-2 pb-3 mt-3 ${classes.simpleBox}`}
            style={{
              background: `url("${RectangleBg}")`,
              backgroundRepeat: "none",
              backgroundSize: "cover",
            }}>
            <img
              src={BoxImage1}
              style={{ width: 200 }}
              className={classes.middleBoxImage}
            />
            <div className='w-100'>
              <h4 className={"m-0 p-0"}>Digi</h4>
              <h2 className={"m-0 p-0"}>
                <b>Verse</b>
              </h2>
              <p className='m-0 p-0 small mt-2' style={{ fontSize: 13 }}>
                The Digivirse is a VR platform unlocking the metaverse for
                businesses, allowing users to access different virtual reality
                worlds through all mediums.
              </p>
            </div>
          </div>
          <div
            className={`col-md-3 col-12 mx-2 d-flex align-items-center justify-content-center flex-column px-4 pt-2 pb-3 mt-3 ${classes.simpleBox}`}
            style={{
              background: "rgba(255, 255, 255, 0.10196078431372549)",
            }}>
            <img src={BoxImage3} style={{ width: 200 }} className='p-4' />
            <div className='w-100'>
              <h4 className={"m-0 p-0"}>Digi</h4>
              <h2 className={"m-0 p-0"}>
                <b>Verse</b>
              </h2>
              <p className='m-0 p-0 small mt-2' style={{ fontSize: 13 }}>
                The Digivirse is a VR platform unlocking the metaverse for
                businesses, allowing users to access different virtual reality
                worlds through all mediums.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: 200 }} />
      <div className='w-75 row mx-auto'>
        <h1 className='col-md-4 col-12'>Accessible on all devices</h1>
        <div className='col-md-8 col-12 d-flex align-items-center justify-content-center flex-wrap'>
          <div className={`${classes.accessibleDevice}`}>
            <img src={BoxImage2} style={{ width: 100 }} />
            <p>Computer</p>
          </div>
          <div className={`${classes.accessibleDevice}`}>
            <img src={BoxImage2} style={{ width: 100 }} />
            <p>Computer</p>
          </div>
          <div className={`${classes.accessibleDevice}`}>
            <img src={BoxImage2} style={{ width: 100 }} />
            <p>Computer</p>
          </div>
          <div className={`${classes.accessibleDevice}`}>
            <img src={BoxImage2} style={{ width: 100 }} />
            <p>Computer</p>
          </div>
          <div className={`${classes.accessibleDevice}`}>
            <img src={BoxImage2} style={{ width: 100 }} />
            <p>Computer</p>
          </div>
        </div>
      </div>
      <div style={{ height: 150 }} />

      <div>
        <h1 className='text-center display-5'>Our Work</h1>
        <div style={{ height: 30 }} />
        <OwlCarousel
          className='owl-theme py-4'
          autoplayTimeout={2000}
          responsive={responsive}
          loop>
          <div
            className={`item d-flex flex-column justify-content-center ${classes.workBox}`}>
            <img
              style={{ height: 300, width: "100%", cursor: "pointer" }}
              src={Work1}
            />
            <div className={`${classes.hoveredText} hoveredText w-100`}>
              <h6 className='mt-2' style={{ cursor: "pointer" }}>
                vr connect{" "}
                <span
                  className='ms-2'
                  style={{ color: theme.palette.primary.main }}>
                  <ArrowForwardRounded
                    style={{
                      transform: "rotate(-45deg)",
                      color: theme.palette.primary.main,
                    }}
                  />
                </span>
              </h6>
            </div>
          </div>
          <div
            className={`item d-flex flex-column justify-content-center ${classes.workBox}`}>
            <img
              style={{ height: 300, width: "100%", cursor: "pointer" }}
              src={Work2}
            />
            <div className={`${classes.hoveredText} hoveredText w-100`}>
              <h6 className='mt-2' style={{ cursor: "pointer" }}>
                vr connect{" "}
                <span
                  className='ms-2'
                  style={{ color: theme.palette.primary.main }}>
                  <ArrowForwardRounded
                    style={{
                      transform: "rotate(-45deg)",
                      color: theme.palette.primary.main,
                    }}
                  />
                </span>
              </h6>
            </div>
          </div>
          <div
            className={`item d-flex flex-column justify-content-center ${classes.workBox}`}>
            <img
              style={{ height: 300, width: "100%", cursor: "pointer" }}
              src={Work3}
            />
            <div className={`${classes.hoveredText} hoveredText w-100`}>
              <h6 className='mt-2' style={{ cursor: "pointer" }}>
                vr connect{" "}
                <span
                  className='ms-2'
                  style={{ color: theme.palette.primary.main }}>
                  <ArrowForwardRounded
                    style={{
                      transform: "rotate(-45deg)",
                      color: theme.palette.primary.main,
                    }}
                  />
                </span>
              </h6>
            </div>
          </div>
          <div
            className={`item d-flex flex-column justify-content-center ${classes.workBox}`}>
            <img
              style={{ height: 300, width: "100%", cursor: "pointer" }}
              src={Work4}
            />
            <div className={`${classes.hoveredText} hoveredText w-100`}>
              <h6 className='mt-2' style={{ cursor: "pointer" }}>
                vr connect{" "}
                <span
                  className='ms-2'
                  style={{ color: theme.palette.primary.main }}>
                  <ArrowForwardRounded
                    style={{
                      transform: "rotate(-45deg)",
                      color: theme.palette.primary.main,
                    }}
                  />
                </span>
              </h6>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default HomePage;
