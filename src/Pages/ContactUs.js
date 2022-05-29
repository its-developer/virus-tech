import React from "react";
import { useTheme } from "@mui/material/styles";

import { makeStyles } from "@mui/styles";
import { Mail, LocationOn } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  simpleBox: {
    background: "rgba(211,211,211, .1555)",
    width: 330,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  input: {
    width: "100%",
    background: "rgba(211,211,211, .1555)",
    padding: 10,
    border: "none",
    outline: "none",
    color: "white",
    marginTop: 5,
  },
}));

function ContactUs(props) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <p className='mt-5 h2'>Get in Touch</p>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6 col-12 px-4 order-md-first order-last'>
            <div className={`${classes.simpleBox} mx-md-0 mx-auto p-3 mb-2`}>
              <p
                className='m-0 d-flex align-items-center justyf-content-center'
                style={{ fontSize: 12 }}>
                <div className='mx-3'>
                  <Mail />
                </div>
                info@virtustech.co.uk
              </p>
            </div>
            <div className={`${classes.simpleBox} mx-md-0 mx-auto p-3 mb-2`}>
              <p
                className='m-0 d-flex align-items-center justyf-content-center'
                style={{ fontSize: 12 }}>
                <div className='mx-3'>
                  <LocationOn />
                </div>
                Tramshed Tech Pendyris St Cardiff CF11 9PH
              </p>
            </div>
            <br />
            <br />
            <br />
          </div>
          <div className='col-md-6 col-12 px-4 mt-md-0 mt-3 order-md-last order-first'>
            <form>
              <label>
                Name <span style={{ color: "#E73B6A" }}>*</span>
              </label>
              <input type='text' className={classes.input} />
              <div className='row mt-1'>
                <div className='col-md-6'>
                  <label>
                    Email <span style={{ color: "#E73B6A" }}>*</span>
                  </label>
                  <input type='text' className={classes.input} />
                </div>
                <div className='col-md-6'>
                  <label>
                    Company <span style={{ color: "#E73B6A" }}>*</span>
                  </label>
                  <input type='text' className={classes.input} />
                </div>
              </div>
              <label>
                Tell us about your project{" "}
                <span style={{ color: "#E73B6A" }}>*</span>
              </label>
              <textarea
                type='text'
                className={classes.input}
                style={{ resize: "none", height: 150 }}
              />
            </form>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
