import React from "react";
import "../css/BigFooter.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const BigFooter = () => {
  return (
    <div className="big container-xxl">
      <div className="d-flex flex-row justify-content-between pt-3">
        <div className="d-flex flex-column flex-start p-5">
          <div className="big__title">
            <h3>Skontaktuj się z nami</h3>
            <hr></hr>
          </div>
          <div className="d-flex flex-column justify-content-around m-2">
            <div className="d-flex justify-content-start align-items-center p-1">
              <LocationOnIcon sx={{ fontSize: 50 }}></LocationOnIcon>
              <span className="p-2">Nazwa miejsca</span>
            </div>
            <div className="d-flex justify-content-start align-items-center p-1">
              <LocalPhoneIcon sx={{ fontSize: 50 }}></LocalPhoneIcon>
              <span className="p-2">+48 999 999 999</span>
            </div>
            <div className="d-flex justify-content-start align-items-center p-1">
              <MailIcon sx={{ fontSize: 50 }}></MailIcon>
              <span className="p-2">xxxyyyzzz@xyz.pl</span>
            </div>
            <div className="d-flex justify-content-start">
              <FacebookIcon sx={{ fontSize: 40, margin: 1 }}></FacebookIcon>
              <InstagramIcon sx={{ fontSize: 40, margin: 1 }}></InstagramIcon>
              <YouTubeIcon sx={{ fontSize: 40, margin: 1 }}></YouTubeIcon>
            </div>
          </div>
        </div>
        <div className="big d-flex flex-column flex-start p-5">
          <div className="big__title d-flex flex-column flex-start align-items-start">
            <h3>Partnerzy</h3>
            <hr></hr>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigFooter;
