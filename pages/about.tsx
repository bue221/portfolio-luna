/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
// import motion
import { motion } from "framer-motion";
// import transition
import { transitionInitial } from "../src/components/animations/transitions";
// Context
import { useContext } from "react";
import { CursorContext } from "context/cursorContext";

const AboutPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <>
      <Head>
        <title>Luna Cadena | About</title>
        <meta name="description" content="This is my personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transitionInitial}
        className="section"
      >
        <div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="container mx-auto h-full relative"
        >
          <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
            <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
              <img src="/img/about/2.jpeg" alt="" />
            </div>
            {/* text */}
            <motion.div
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={transitionInitial}
              className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
            >
              <h1 className="h1">About me</h1>
              <p className="mb-12 max-w-sm">
                Nearly UX UI designer with <b>great passion</b> and{" "}
                <b>attention to detail.</b> Lover figma and animation creation.
                I am an interface design enthusiast and the creation of new
                projects,{" "}
                <b>I seek to improve and facilitate people&rsquo;s lives</b>{" "}
                through beautiful and highly usable designs.
                <br />
                <br />
                Always having as principles perseverance, continuous delivery to
                improve, and discipline.
                <br />
              </p>
              <Link href="/portfolio" className="btn">
                View my work
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutPage;
