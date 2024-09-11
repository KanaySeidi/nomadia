import React, { useRef } from "react";
import banner from "../../assets/img/banner.png";
import arrow from "../../assets/icon/arrowdown.png";
import { useTranslation } from "react-i18next";

function Banner() {
  const tourSectionRef = useRef(null);

  const scrollToTour = () => {
    tourSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { t } = useTranslation();

  return (
    <>
      <img
        src={banner}
        alt="banner"
        className="w-full h-full object-cover absolute z-0"
      />
      <div className="w-full h-screen">
        <div className="w-auto h-auto flex flex-col items-center justify-center relative z-40 top-32">
          <p className=" text-5xl font-bold text-[#31302f] p-3">
            {t("banner.explore")}
          </p>
          <p className=" backdrop-blur-sm text-5xl text-white text-center font-bold mt-14">
            {t("banner.slogan")}
          </p>
          <img
            src={arrow}
            alt=""
            className="relative z-40 top-[270px] w-12 animate-bounce cursor-pointer"
            onClick={scrollToTour}
          />
        </div>
      </div>
      <div ref={tourSectionRef} className="w-full h-screen"></div>
    </>
  );
}

export default Banner;
