import React from "react";
import kyrgyzBanner from "../../../assets/img/valley.jpg";
import SimpleSlider from "../../../components/slider/SimpleSlider";
import { CloudDrizzle } from "lucide-react";
import { Mountain } from "lucide-react";
import { FlameKindling } from "lucide-react";
import banner from "../../../assets/img/valley.jpg";
import { useTranslation } from "react-i18next";
import CANav from "../../../components/CANav/CANav";

function Tadjikistan() {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full">
      <img
        src={kyrgyzBanner}
        alt="Kyrgyzstan Banner"
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 mr-2">
        <CANav />
      </div>
      <div className="px-24 relative">
        <h1 className="text-5xl font-black mt-40 bg-white w-fit p-2 pl-0 rounded-lg">
          Tadjikistan
        </h1>
        <p className="text-2xl font-black w-fit bg-white rounded-lg mt-3 p-1 pl-0">
          {t("HeartOfCA")}
        </p>
        <div className="flex gap-4 mt-8">
          <div className="w-3/6 backdrop-blur-md p-2 pl-0 rounded-md text-white">
            <SimpleSlider />
          </div>
        </div>
      </div>
      <div className="w-full mt-20 h-auto flex justify-between items-center  relative px-24 py-20">
        <div className="flex flex-col justify-center items-center w-80 bg-fistash p-4 h-96 rounded-lg shadow-2xl">
          <CloudDrizzle size={100} color="white" />
          <p className="mt-4 font-bold text-cher text-lg">
            Четыре сезона за один день
          </p>
          <p className="text-center mt-2 text-white">
            В Кыргызстане благодаря разнообразному ландшафту и высотам можно в
            один день ощутить все четыре времени года: утро на заснеженных
            вершинах, день в цветущей долине, вечер в жарком городе и ночь на
            осенних равнинах.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-80 bg-fistash p-4 h-96 rounded-lg shadow-lg">
          <Mountain size={100} color="white" />
          <p className="mt-4 font-bold text-cher text-lg">
            Высокогорная страна
          </p>
          <p className="text-center mt-2 text-white">
            Средняя высота Кыргызстана — около 2750 метров над уровнем моря, что
            делает его одной из самых высокогорных стран мира с разнообразным
            климатом и круглый год заснеженными вершинами.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-80 bg-fistash p-4 h-96 rounded-lg shadow-lg">
          <FlameKindling size={100} color="white" />
          <p className="mt-4 font-bold text-cher text-lg">Древние петроглифы</p>
          <p className="text-center mt-2 text-white">
            В Кыргызстане находятся тысячи древних наскальных рисунков, таких
            как петроглифы в Саймалуу-Таш, возраст которых достигает 4000 лет,
            отражающих жизнь и культуру древних кочевников.
          </p>
        </div>
      </div>
      <div className="w-full mt-20 h-full flex flex-wrap gap-10 justify-between items-center bg-fistash relative px-24 py-20">
        <div className="w-80 h-44 transform transition-transform duration-500 relative overflow-hidden hover:scale-125 group cursor-pointer rounded-md">
          <img
            src={banner}
            alt="banner"
            className="h-full w-full object-cover rounded-md"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-50 text-white">
            <p className="font-bold text-xl">Winter Ski Tour</p>
            <div className="transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              <p>
                Duration:{" "}
                <span className="font-black text-lg text-yellow-500">
                  3 days
                </span>
              </p>
              <p>
                Price: from{" "}
                <span className="font-black text-lg text-yellow-500">
                  1400$
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-80 h-44 transform transition-transform duration-500 relative overflow-hidden hover:scale-125 group cursor-pointer rounded-md ">
          <img
            src={banner}
            alt="banner"
            className="h-full w-full object-cover rounded-md"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-50 text-white">
            <p className="font-bold text-xl">Winter Ski Tour</p>
            <div className="transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              <p>
                Duration:{" "}
                <span className="font-black text-lg text-yellow-500">
                  3 days
                </span>
              </p>
              <p>
                Price: from{" "}
                <span className="font-black text-lg text-yellow-500">
                  1400$
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tadjikistan;
