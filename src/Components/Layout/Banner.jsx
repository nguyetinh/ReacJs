import React, { useEffect, useState } from "react";
import "./Css/SlideShow.css";
export default function Banner() {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(n) {
      slides[currentSlide].classList.remove("active");
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add("active");
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 3000);
  }, []);

  return (
    <>
      <div className="boxcenter">
        <div className="row mb">
          <div className="slide active">
            <img alt="Slide 1" src="/layout/images/banner.png" />
          </div>
          <div className="slide">
            <img alt="Slide 2" src="/layout/images/banner1.png" />
          </div>
          <div className="slide">
            <img alt="Slide 3" src="/layout/images/banner2.png" />
          </div>
          <div className="slide">
            <img alt="Slide 4" src="/layout/images/banner3.png" />
          </div>
        </div>
      </div>
    </>
  );
}
