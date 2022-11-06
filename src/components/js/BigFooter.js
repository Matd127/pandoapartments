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
      <div className="d-flex flex-row justify-content-between pt-3 flex-wrap">
        <div className="d-flex flex-column flex-start p-5">
          <div>
            <h3>Skontaktuj się z nami</h3>
            <div className="line"></div>
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

        <div className="d-flex flex-column flex-start p-5">
          <div className="d-flex flex-column align-items-start">
            <h3>Tytuł</h3>
            <div className="line"></div>
            <div className="content__wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
              tortor eget augue consectetur accumsan eu sit amet tellus.
              <br />
              <br />
              Donec in suscipit ex. Morbi aliquet aliquam velit non facilisis.
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-start p-5">
          <div className="d-flex flex-column align-items-start">
            <h3>Partnerzy</h3>
            <div className="line"></div>
            <div className="mt-2">
              <div>Zdjęcie 1</div>

              <div>Zdjęcie 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigFooter;
