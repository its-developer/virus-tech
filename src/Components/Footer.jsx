import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Toolbar, Box, AppBar, Button, IconButton } from "@mui/material";

import { makeStyles } from "@mui/styles";
import FooterBackgroup from "../images/FooterBackgroup.png";
import HomePageRectangle from "../images/HomePageRectangle.png";
import BottomLayer from "../images/BottomLayer.png";

// Social Media Icons
import {
  FacebookRounded,
  LinkedIn,
  Twitter,
  Instagram,
} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "none",
    boxShadow: "none",
  },
  appBarLink: {
    textDecoration: "none",
    opacity: 0.8,
    textAlign: "center",
    color: "white",
    marginTop: 10,
    "&:hover": {
      color: "white",
      opacity: 1,
    },
  },
  socialMediaIcon: {
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  homePageRectangle: {
    width: 600,
    height: 600,
    position: "absolute",
    top: -600,
    left: -350,
    opacity: 0.3,
  },
}));

const Footer = ({ hideBox }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div style={{ position: "relative" }}>
      {!hideBox ? (
        <img src={HomePageRectangle} className={classes.homePageRectangle} />
      ) : null}
      <img src={BottomLayer} style={{ height: 150, width: "100%" }} />
      <div style={{ backgroundImage: `url('${FooterBackgroup}')` }}>
        <div className='container'>
          <div className='row py-5 d-flex align-items-center justify-content-center'>
            <h1 className='text-white text-center'>Virus Tech</h1>
            <div className='row d-flex align-items-center justify-content-center mt-3'>
              <Link
                exact
                to='/'
                className={`${classes.appBarLink} col-6 col-md-3`}>
                Home
              </Link>
              <Link
                exact
                to='/our-work'
                className={`${classes.appBarLink} col-6 col-md-3`}>
                Our Work
              </Link>
              <Link
                exact
                to='/team'
                className={`${classes.appBarLink} col-6 col-md-3`}>
                Team
              </Link>
              <Link
                exact
                to='/contact-us'
                className={`${classes.appBarLink} col-6 col-md-3`}>
                Contact Us
              </Link>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-3'>
              <IconButton className={classes.socialMediaIcon}>
                <FacebookRounded style={{ color: "white" }} />
              </IconButton>
              <IconButton className={classes.socialMediaIcon}>
                <LinkedIn style={{ color: "white" }} />
              </IconButton>
              <IconButton className={classes.socialMediaIcon}>
                <Twitter style={{ color: "white" }} />
              </IconButton>
              <IconButton className={classes.socialMediaIcon}>
                <Instagram style={{ color: "white" }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
