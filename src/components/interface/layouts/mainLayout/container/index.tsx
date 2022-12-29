import { AnimatePresence } from "framer-motion";
import { ReactElement, ReactFragment } from "react";
import Header from "../components/header";

export const MainLayout: React.FC<{
  children: ReactElement | ReactFragment;
}> = ({ children }) => {
  return (
    <>
      <Header />
      <AnimatePresence initial mode="wait">
        {children}
      </AnimatePresence>
    </>
  );
};
