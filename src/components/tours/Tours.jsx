import React from "react";
import tourBanner from "../../assets/img/tourBanner.jpg";

function Tours() {
  return (
    <>
      <img
        src={tourBanner}
        alt="Banner of tours"
        className="absolute top-0 left-0 w-full h-screen object-fill"
      />
      <div className="w-full h-full relative">
        <h1>Туры</h1>
        <h1>Туры</h1>
        <h1>Туры</h1>
        <h1>Туры</h1>
        <h1>Туры</h1>
        <h1>Туры</h1>
        <h1>Туры</h1>
        <h1>Туры</h1>
      </div>
    </>
  );
}

export default Tours;
