import React from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Work1 from "../images/Work1.png";
import CompositeLayer from "../images/CompositeLayer.png";

import { ArrowForwardRounded } from "@mui/icons-material";

import TopBoxes from "../images/TopBoxes.png";

const useStyles = makeStyles((theme) => ({
  ourWork: {
    width: 300,
    padding: 10,
    margin: 10,
    height: 330,
    background: "rgba(211,211,211, .1555)",
    transition: "all .4s ease",
    "& .hoveredBox": {
      transition: "all .4s ease",
      opacity: 0,
    },
    "&:hover": {
      height: "auto !important",
      "& .hoveredBox": {
        opacity: 1,
      },
      "& .removeOnHover": {
        display: "none",
      },
    },
  },
  topPage: {
    background: `url('${TopBoxes}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPosition: "top",
    [theme.breakpoints.down("md")]: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "140%",
      backgroundPosition: "top",
    },
  },
}));

const OurWork = (props) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.topPage}>
      <props.navbar />
      <div className='d-flex align-items-center justify-content-center flex-column'>
        <br className='d-md-block d-none' />
        <br className='d-md-block d-none' />

        <h1 className='mt-md-5 mt-2'>Our Work</h1>

        <br className='d-md-block d-none' />
        <br className='d-md-block d-none' />
        <br className='d-md-block d-none' />
        <div
          className='container d-flex align-items-start justify-content-center mt-5'
          style={{ flexWrap: "wrap" }}>
          {[0, 1, 2, 3, 4, 5].map((item) => {
            return (
              <div className={classes.ourWork}>
                <img src={Work1} style={{ width: "100%" }} />
                <h6
                  className='mt-2 removeOnHover'
                  style={{ cursor: "pointer" }}>
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
                <div className='hoveredBox'>
                  <h6 className='mt-2'>vr connect </h6>
                  <img src={CompositeLayer} style={{ width: "100%" }} />
                  <p style={{ fontSize: "10px" }}>
                    With different communication channels from you standard sms
                    with web VR all the way through to immersice interactive
                    avatar, VR connect is designed for simulations on
                    communication, Teamwork, Leadership, and Job interview
                    skills
                  </p>
                  <div>
                    <p
                      style={{
                        textAlign: "right",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}>
                      Read More{" "}
                      <span className='ms-2' style={{ color: "white" }}>
                        <ArrowForwardRounded
                          style={{
                            transform: "rotate(-45deg)",
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default OurWork;
