import React from "react";
import about from "../../assets/img/about.jpg";
import img from "../../assets/img/tourBanner.jpg";

function About() {
  return (
    <>
      <div className="w-full h-full relative">
        <div className="px-24">
          <img
            src={about}
            alt="about us page"
            className="w-full h-64 object-cover saturate-50 absolute top-0 left-0"
          />
          <div className="relative flex flex-col items-center justify-center h-64 mt-14">
            <q className="text-4xl text-white leading-loose block ">
              People have always been and remain a part of nature, <br /> no
              matter how high they rise above it
            </q>
            <p className="text-3xl text-white font-black mt-4 block ml-[750px]">
              Chingiz Aitmatov
            </p>
          </div>
          <div className="relative mt-10">
            <h1 className="text-3xl my-2">Our mission</h1>
            <p className="text-xl leading-8 px-24">
              At Nomadia, our mission is to provide unforgettable travel
              experiences that immerse our guests in the stunning natural beauty
              and rich culture of Kyrgyzstan. We are dedicated to offering
              personalized, authentic journeys that inspire and connect people
              with the spirit of adventure.
            </p>
          </div>
          <div className="w-full h-full flex justify-center relative my-20">
            <div className="card w-3/6 h-64 rounded-md bg-white shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex justify-around gap-5">
              <div className="w-32 flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="gray"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-timer-reset"
                >
                  <path d="M10 2h4" />
                  <path d="M12 14v-4" />
                  <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
                  <path d="M9 17H4v5" />
                </svg>
                <p className="w-full text-center mt-10">Fast feedback</p>
              </div>
              <div className="w-32 flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="gray"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-hand-helping"
                >
                  <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
                  <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                  <path d="m2 13 6 6" />
                </svg>
                <p className="w-full text-center mt-10">Help with VISA</p>
              </div>
              <div className="w-32  flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="gray"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-badge-dollar-sign"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  <path d="M12 18V6" />
                </svg>
                <p className="w-full text-center mt-10">DISCOUNT</p>
              </div>
            </div>
          </div>
          <div className="relative mt-10"></div>
          <h1 className="text-3xl mb-20">Why choose Nomadia Tours</h1>
          <p></p>
          <div className="relative mb-10 flex w-full justify-between">
            <div className="w-80 h-80 bg-white flex flex-col shadow-md -rotate-6">
              <div w-72>
                <img src={img} alt="" className=" p-5 rounded-sm grayscale" />
              </div>
            </div>
            <div className="w-80 h-80 bg-white flex flex-col shadow-md -rotate-2 -mt-10">
              <div w-72>
                <img src={img} alt="" className=" p-5 rounded-sm grayscale" />
              </div>
            </div>
            <div className="w-80 h-80 bg-white flex flex-col shadow-md rotate-2 mt-5">
              <div w-72>
                <img src={img} alt="" className=" p-5 rounded-sm grayscale" />
              </div>
            </div>
          </div>
          <div className="relative my-10">
            <p className="text-xl leading-8 px-24">
              Choose Nomadia for a truly unique experience. With expert guides,
              deep local knowledge, and a passion for discovery, we ensure every
              trip is tailored to your interests. From breathtaking landscapes
              to vibrant traditions, we promise an adventure that goes beyond
              expectations.
            </p>
          </div>
          <div className="relative my-10">
            <h1 className="text-3xl mb-10">Our Story</h1>
            <p className="text-xl leading-8 px-24">
              Nomadia was born out of a love for exploration and a desire to
              share Kyrgyzstan’s hidden gems with the world. Founded by locals
              with a deep connection to the land, we take pride in curating
              adventures that reflect the heart and soul of our beautiful
              country. Let us guide you through the paths less traveled!
            </p>
            <div className="w-96 h-96 bg-white shadow-md relative">
              <img
                src={img}
                alt=""
                className="w-full h-40 object-cover -hue-rotate-60 absolute"
              />
              <div className="relative flex justify-center">
                <div className="w-40 h-40 bg-white rounded-full relative mt-24">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    alt=""
                    className="w-36 h-36 rounded-full object-cover p-2 ml-2 hover:w-full hover:h-full hover:rounded hover:object-cover"
                  />
                </div>
              </div>
              <div className="px-10">
                <p className="text-center">Kanay</p>
                <p className="text-center">THE Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
