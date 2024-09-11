import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kz from "../../assets/img/kz.png";
import tjk from "../../assets/img/tj.jpg";
import turkmen from "../../assets/img/turkmen.jpg";
import uzb from "../../assets/img/uzb.jpg";

function CASlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    customPaging: () => (
      <div className="w-8 h-4 bg-white hover:bg-fistash flex items-center justify-center cursor-pointer transition duration-300 ease-in-out mt-[-70px]"></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="slider-container w-full h-full absolute left-0 top-0">
      <Slider {...settings}>
        <div className="relative flex items-center justify-center h-screen">
          <img
            src={kz}
            alt="Kazakhstan"
            className="w-full h-full object-cover"
          />
          <p className="absolute text-white text-2xl z-50">Казахстан</p>
        </div>
        <div className="relative flex items-center justify-center h-screen">
          <img
            src={tjk}
            alt="Tajikistan"
            className="w-full h-full object-cover"
          />
          <p className="absolute text-white text-2xl z-50">Таджикистан</p>
        </div>
        <div className="relative flex items-center justify-center h-screen">
          <img
            src={turkmen}
            alt="Turkmenistan"
            className="w-full h-full object-cover"
          />
          <p className="absolute text-white text-2xl z-50">Туркменистан</p>
        </div>
        <div className="relative flex items-center justify-center h-screen">
          <img
            src={uzb}
            alt="Uzbekistan"
            className="w-full h-full object-cover"
          />
          <p className="absolute text-white text-2xl z-50">Узбекистан</p>
        </div>
      </Slider>
    </div>
  );
}

export default CASlider;
