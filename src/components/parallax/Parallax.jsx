import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
  useEffect(() => {
    gsap.set(".main", {
      position: "fixed",
      background: "#fff",
      width: "100%",
      maxWidth: "1200px",
      height: "70%",
      top: 0,
      left: "50%",
      x: "-50%",
    });
    gsap.set(".scrollDist", { width: "100%", height: "170%" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".scrollDist",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })
      .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
      .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
      .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
      .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
      .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
      .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
      .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);

    const arrowBtn = document.getElementById("arrowBtn");

    arrowBtn.addEventListener("mouseenter", () => {
      gsap.to(".arrow", {
        y: 10,
        duration: 0.8,
        ease: "back.inOut(3)",
        overwrite: "auto",
      });
    });

    arrowBtn.addEventListener("mouseleave", () => {
      gsap.to(".arrow", {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
    });

    arrowBtn.addEventListener("click", () => {
      gsap.to(window, {
        scrollTo: window.innerHeight,
        duration: 1.5,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <div className="h-screen z-0 overflow-y-hidden">
      <div className="scrollDist"></div>
      <div className="main">
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image
                xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg"
                width="1200"
                height="800"
              />
            </g>
          </mask>

          <image
            className="sky"
            xlinkHref="https://assets.codepen.io/721952/sky.jpg"
            width="1200"
            height="590"
          />
          <image
            className="mountBg"
            xlinkHref="https://assets.codepen.io/721952/mountBg.png"
            width="1200"
            height="800"
          />
          <image
            className="mountMg"
            xlinkHref="https://assets.codepen.io/721952/mountMg.png"
            width="1200"
            height="800"
          />
          <image
            className="cloud2"
            xlinkHref="https://assets.codepen.io/721952/cloud2.png"
            width="1200"
            height="800"
          />
          <image
            className="mountFg"
            xlinkHref="https://assets.codepen.io/721952/mountFg.png"
            width="1200"
            height="800"
          />
          <image
            className="cloud1"
            xlinkHref="https://assets.codepen.io/721952/cloud1.png"
            width="1200"
            height="800"
          />
          <image
            className="cloud3"
            xlinkHref="https://assets.codepen.io/721952/cloud3.png"
            width="1200"
            height="800"
          />
          <text fill="#fff" x="350" y="200" className="text-8xl font-black">
            GO! Travel
          </text>

          <g mask="url(#m)">
            <rect fill="#f5f4ef" width="100%" height="100%" />
            <text
              x="400"
              y="200"
              fill="#77ab59"
              className="text-8xl font-black"
            >
              Nomadia
            </text>
            <text
              x="600"
              y="300"
              fill="#31302f"
              className="text-8xl font-black"
            >
              tours
            </text>
          </g>

          <rect
            id="arrowBtn"
            width="100"
            height="100"
            opacity="0"
            x="550"
            y="220"
            style={{ cursor: "pointer" }}
            className="animation-bounce"
          />
        </svg>
      </div>
    </div>
  );
};

export default Parallax;
