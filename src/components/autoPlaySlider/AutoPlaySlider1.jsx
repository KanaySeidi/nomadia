import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoPlaySlider1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false, // Отключаем стандартную паузу при наведении
  };

  return (
    <div className="w-full overflow-hidden relative">
      <Slider {...settings}>
        {[
          "Image 1",
          "Image 2",
          "Image 3",
          "Image 4",
          "Image 5",
          "Image 6",
          "Image 7",
          "Image 8",
        ].map((image, index) => (
          <div key={index} className="relative">
            <img
              src={`https://via.placeholder.com/600x300?text=${image}`}
              alt={image}
              className="w-82 h-40 object-cover rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlaySlider1;
