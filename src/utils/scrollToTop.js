import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnPageChange = ({ children }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTopOnPageChange;
