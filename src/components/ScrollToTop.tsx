import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.opacity = "0";
    window.scrollTo(0, 0);

    const timeout = setTimeout(() => {
      document.body.style.transition = "opacity 0.4s ease";
      document.body.style.opacity = "1";
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;