import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

function SimpleSlider() {
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    pauseOnHold: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="w-full backdrop-blur-sm p-2 rounded-md text-white">
            <p className="mt-3">
              <span className="text-xl text-green-600">
                {t("sliderTitle1")}
              </span>
              <br />
              {t("sliderDesc1")}
            </p>
          </div>
        </div>
        <div>
          <div className="w-full backdrop-blur-md p-2 rounded-md text-white">
            <p className="mt-3">
              <span className="text-xl text-green-600">
                {t("sliderTitle2")}
              </span>
              <br />
              {t("sliderDesc2")}
            </p>
          </div>
        </div>
        <div>
          <div className="w-full backdrop-blur-md p-2 rounded-md text-white">
            <p className="mt-3">
              <span className="text-xl text-green-600">
                {t("sliderTitle3")}
              </span>
              <br />
              {t("sliderDesc3")}
            </p>
          </div>
        </div>
        <div>
          <div className="w-full backdrop-blur-md p-2 rounded-md text-white">
            <p className="mt-3">
              <span className="text-xl text-green-600">
                {t("sliderTitle4")}
              </span>
              <br />
              {t("sliderDesc4")}
            </p>
          </div>
        </div>
        <div>
          <div className="w-full backdrop-blur-md p-2 rounded-md text-white">
            <p className="mt-3">
              <span className="text-xl text-green-600">
                {t("sliderTitle5")}
              </span>
              <br />
              {t("sliderDesc5")}
            </p>
          </div>
        </div>
        <div>
          <div className="w-full backdrop-blur-md p-2 rounded-md text-white">
            <p className="mt-3">
              <span className="text-xl text-green-600">
                {t("sliderTitle6")}
              </span>
              <br />
              {t("sliderDesc6")}
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
