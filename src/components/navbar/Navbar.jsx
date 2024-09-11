// import React, { useEffect, useState } from "react";
// import Parallax from "../parallax/Parallax";
// import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
// import { useTranslation } from "react-i18next";
// import { navLinks } from "../../utils/navLinks";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../../assets/icon/logo.svg";

// function Navbar() {
//   const [isScroll, setIsScroll] = useState(false);
//   const { t } = useTranslation();
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 80) {
//         setIsScroll(true);
//       } else {
//         setIsScroll(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {location.pathname === "/" ? <Parallax /> : null}
//       <div
//         className={`w-full h-12 sticky top-0 z-50 flex items-center duration-500 ${
//           isScroll ? "bg-[#f5f4ef]" : "bg-transparent"
//         }`}
//       >
//         <div className="w-full mx-24 relative flex justify-between items-center">
//           <div>
//             <Link to="/">
//               <img src={logo} alt="" width={150} />
//             </Link>
//           </div>
//           <div className="flex justify-around items-center w-7/12 font-semibold cursor-pointer">
//             {navLinks.map((navItems) => (
//               <Link to={navItems.href} key={navItems.id}>
//                 <p>{t(`${navItems.title}`)}</p>
//               </Link>
//             ))}
//           </div>
//           <div className="flex justify-around items-center w-24 cursor-pointer">
//             <LanguageSwitcher />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import Parallax from "../parallax/Parallax";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { navLinks } from "../../utils/navLinks";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/icon/logo.svg";

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Для управления открытием вложенных меню
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <>
      {location.pathname === "/" ? <Parallax /> : null}
      <div
        className={`w-full h-12 sticky top-0 z-50 flex items-center duration-500 ${
          isScroll ? "bg-[#f5f4ef]" : "bg-transparent"
        }`}
      >
        <div className="w-full mx-24 relative flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={logo} alt="" width={150} />
            </Link>
          </div>
          <div className="flex w-3/4 font-semibold">
            {navLinks.map((navItem) => (
              <div
                key={navItem.id}
                className="relative w-full flex justify-evenly"
                onMouseEnter={() =>
                  navItem.isGroup && handleDropdownToggle(navItem.id)
                }
                onMouseLeave={() =>
                  navItem.isGroup && handleDropdownToggle(null)
                }
              >
                <Link to={navItem.href}>
                  <p>{t(navItem.title)}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-around items-center w-24 cursor-pointer">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
