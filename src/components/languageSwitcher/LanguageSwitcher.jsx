import React from "react";
import { useTranslation } from "react-i18next";
import { languages } from "../../const/language";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lngKey) => {
    i18n.changeLanguage(lngKey);
    localStorage.setItem("language", lngKey);
  };

  return (
    <>
      <div className="flex justify-around items-center w-24 cursor-pointer absolute">
        {languages.map((lang) => (
          <button
            className={`px-2 py-1 text-sm ${
              currentLanguage === lang.key
                ? "bg-[#77ab59] rounded-sm text-white"
                : "text-black"
            }`}
            key={lang.key}
            onClick={() => changeLanguage(lang.key)}
          >
            {lang.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default LanguageSwitcher;
