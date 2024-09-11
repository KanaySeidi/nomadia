import React from "react";
import { CACountry } from "../../utils/CA";
import { Link } from "react-router-dom";

function CA() {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="px-24">
        <div className="w-6/12 h-64 flex gap-5 p-1 bg-transparent">
          {CACountry.map((country) => (
            <Link key={country.id} to={country.href}>
              <div
                className="flex-1 h-full overflow-hidden cursor-pointer rounded-md bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out transform hover:scale-110 filter brightness-50 hover:brightness-100"
                style={{
                  backgroundImage: `url(${country.img})`,
                }}
              >
                <p className="w-full h-full flex items-center justify-center text-white font-black text-2xl uppercase tracking-widest transform rotate-[-90deg] transition-transform duration-500 ease-in-out hover:rotate-0">
                  {country.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CA;
