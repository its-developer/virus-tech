import React from "react";
import { useTheme } from "@mui/material/styles";

function ContactUs(props) {
  const theme = useTheme();

  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <p className='mt-5 h2'>Contact Us</p>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6 col-12 px-4'>
            <div
              className='px-3 py-3 rounded'
              style={{
                background:
                  "linear-gradient(92.98deg, #3053E3 0.95%, #8212F4 100%)",
              }}>
              <p className='h3 text-white'>Advertising</p>
              <p className='text-white'>
                For advertising or promotion enquires, please email to
                promote@earlycoins.io or Telegram -@nftwatcher
              </p>
            </div>
          </div>
          <div className='col-md-6 col-12 px-4 mt-md-0 mt-3'>
            <div
              className='px-3 py-3 rounded'
              style={{
                background:
                  "linear-gradient(92.98deg, #3053E3 0.95%, #8212F4 100%)",
              }}>
              <p className='h3 text-white'>Advertising</p>
              <p className='text-white'>
                For advertising or promotion enquires, please email to
                promote@earlycoins.io or Telegram -@nftwatcher
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
