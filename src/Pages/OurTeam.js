import React from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import PersonImg from "../images/PersonImg.png";

import { ArrowForwardRounded } from "@mui/icons-material";

import TopBoxes from "../images/TopBoxes.png";

const useStyles = makeStyles((theme) => ({
  OurTeam: {
    width: 250,
    padding: 10,
    margin: 20,
    background: "rgba(211,211,211, .1555)",
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

const OurTeam = (props) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.topPage}>
      <props.navbar />
      <div className='d-flex align-items-center justify-content-center flex-column'>
        <br className='d-md-block d-none' />
        <br className='d-md-block d-none' />

        <h1 className='mt-md-5 mt-2'>Our Team</h1>

        <br className='d-md-block d-none' />
        <br className='d-md-block d-none' />
        <br className='d-md-block d-none' />
        <div
          className='container d-flex align-items-start justify-content-center mt-5'
          style={{ flexWrap: "wrap" }}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return (
              <div className={classes.OurTeam}>
                <img src={PersonImg} style={{ width: "100%" }} />
                <p style={{ fontSize: 12 }} className='m-0'>
                  George
                </p>
                <p style={{ fontSize: 12 }} className='m-0 text-muted'>
                  Co-founder & CEO
                </p>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default OurTeam;
