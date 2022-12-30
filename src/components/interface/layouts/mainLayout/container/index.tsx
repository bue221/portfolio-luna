import { ReactElement, ReactFragment } from "react";
// import framer motion
import { AnimatePresence } from "framer-motion";
// import component
import Header from "../components/header";
import CursorProvider from "context/cursorContext";
//import custom cursor

export const MainLayout: React.FC<{
  children: ReactElement | ReactFragment;
}> = ({ children }) => {
  return (
    <>
      <CursorProvider>
        <Header />
        <AnimatePresence initial mode="wait">
          {children}
        </AnimatePresence>
      </CursorProvider>
    </>
  );
};
