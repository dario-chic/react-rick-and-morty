import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const ScrollContext = createContext();

const initialScroll = true;

const ScrollProvider = ({ children }) => {
  const [scroll, setScroll] = useState(initialScroll);

  useEffect(() => {
    var lastScrollTop = 0;

    window.addEventListener(
      "scroll",
      function () {
        var actualScroll =
          window.pageYOffset || document.documentElement.scrollTop;

        if (actualScroll > lastScrollTop) {
          setScroll(false);
        } else {
          setScroll(true);
        }

        lastScrollTop = actualScroll <= 0 ? 0 : actualScroll; // For Mobile or negative scrolling
      },
      false
    );
  }, []);

  const data = { scroll };

  return (
    <ScrollContext.Provider value={data}>{children}</ScrollContext.Provider>
  );
};

export { ScrollProvider };
export default ScrollContext;
