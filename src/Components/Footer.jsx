import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Toolbar, Box, AppBar, Button, IconButton } from "@mui/material";

import { makeStyles } from "@mui/styles";
import FooterBackgroup from "../images/FooterBackgroup.png";

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
    marginRight: 60,
    opacity: 0.8,
    color: "white",
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
}));

const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div>
      <div style={{ backgroundImage: `url('${FooterBackgroup}')` }}>
        <div className='container'>
          <div className='row py-5 d-flex align-items-center justify-content-center'>
            <h1 className='text-white text-center'>Virus Tech</h1>
            <div className='d-flex align-items-center justify-content-center mt-3'>
              <Link exact to='/' className={classes.appBarLink}>
                Home
              </Link>
              <Link exact to='/our-work' className={classes.appBarLink}>
                Our Work
              </Link>
              <Link exact to='/team' className={classes.appBarLink}>
                Team
              </Link>
              <Link exact to='/contact-us' className={classes.appBarLink}>
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
