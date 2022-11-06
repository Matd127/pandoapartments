import React, { useState, useEffect } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import "../css/ScrollToTop.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        document.querySelector('.top-to-btn').classList.remove("top-to-btn-hidden");
        setShowTopBtn(true);
      } else {
        document.querySelector('.top-to-btn').classList.add("top-to-btn-hidden");
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btn top-to-btn-hidden">
      <ArrowCircleUpIcon className="icon-position" sx={{ fontSize: 50 }} onClick={goToTop}></ArrowCircleUpIcon>
    </div>
  );
};

export default ScrollToTop;
