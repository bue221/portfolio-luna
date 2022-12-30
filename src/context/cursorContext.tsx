import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const CursorContext = createContext<any>({});

const CursorProvider: React.FC<{
  children: React.ReactFragment | React.ReactElement;
}> = ({ children }) => {
  // cursor position state
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  // cursor bg state
  const [cursorBG, setCursorBG] = useState("default");

  useEffect(() => {
    const mobileViewportIsActive = window && window.innerWidth < 768;
    if (!mobileViewportIsActive) {
      const move = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        setCursorPos({
          x: clientX,
          y: clientY,
        });
      };
      if (window) {
        window.addEventListener("mousemove", move);
      }
      // CleanUp
      return () => {
        if (window) window.removeEventListener("mousemove", move);
      };
    } else {
      setCursorBG("none");
    }
  });

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(255,255,255, 1)",
    },
  };

  // mouse enter handler
  const mouseEnterHandler = () => {
    setCursorBG("text");
  };
  // mouse leaver handler
  const mouseLeaveHandler = () => {
    setCursorBG("default");
  };

  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
