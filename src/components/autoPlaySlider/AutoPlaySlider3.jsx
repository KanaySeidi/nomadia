import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlaySlider3() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Добавил задержку для автопрокрутки
    pauseOnHover: false, // Остановка при наведении
    arrows: false,
    centerMode: false,
    cssEase: "linear",
  };

  return (
    <div className="slider-container w-full">
      {" "}
      <Slider {...settings}>
        <div className="w-20 h-20 bg-red-500 flex justify-center items-center mx-4">
          <h3 className="text-white">1</h3>
        </div>
        <div className="w-20 h-20 bg-red-500 flex justify-center items-center mx-4">
          <h3 className="text-white">2</h3>
        </div>
        <div className="w-20 h-20 bg-red-500 flex justify-center items-center mx-4">
          <h3 className="text-white">3</h3>
        </div>
        <div className="w-20 h-20 bg-red-500 flex justify-center items-center mx-4">
          <h3 className="text-white">4</h3>
        </div>
        <div className="w-20 h-20 bg-red-500 flex justify-center items-center mx-4">
          <h3 className="text-white">5</h3>
        </div>
        <div className="w-20 h-20 bg-red-500 flex justify-center items-center mx-4">
          <h3 className="text-white">6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlaySlider3;
