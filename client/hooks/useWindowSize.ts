import { useEffect, useState } from "react";

type WindowSize = {
  width: number;
  height: number;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(<WindowSize>{
    width: null,
    height: null,
  });

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
