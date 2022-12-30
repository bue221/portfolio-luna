import Head from "next/head";
// import link
import Link from "next/link";
// import motion
import { motion } from "framer-motion";
// import transition
import { transitionInitial } from "../src/components/animations/transitions";
import { useContext } from "react";
import { CursorContext } from "context/cursorContext";

export default function Home() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <>
      <Head>
        <title>Luna Cadena | Home</title>
        <meta name="description" content="This is my personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transitionInitial}
        className="section"
      >
        <div className="container mx-auto h-full relative">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={transitionInitial}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
            >
              <h1 className="h1 text-[#28C278]">
                UX / UI
                <br /> designer
              </h1>
              <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
                Bogotá DC, Colombia
              </p>
              <div className="flex flex-row gap-4">
                <Link href="/contact" className="btn mb-[30px]">
                  hire me
                </Link>
                <a
                  href="/resources/Hoja_de_vida.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mb-[30px]"
                >
                  See the CV
                </a>
              </div>
            </motion.div>
            {/* image */}
            <div className="flex justify-end max-h-96 lg:max-h-max">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={transitionInitial}
                className="relative lg:-right-20 overflow-hidden"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={transitionInitial}
                  src="/img/home/woman.jpeg"
                  className="max-h-[100vh] w-full lg:w-[50vw] object-cover lg:h-[100vh]"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
