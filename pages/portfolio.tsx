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

const projects = [
  {
    link: "https://www.behance.net/gallery/157597159/Rave-Proyect-UXUI-Design-and-Writing",
    name: "Rave Proyect - UX/UI Design and Writing",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d9b02c157597159.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
  },
  {
    link: "https://www.behance.net/gallery/157016129/Booking-Caso-de-estudio-ux-research",
    name: "Booking - Caso de estudio ux research",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/91111b157016129.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
  },
  {
    link: "https://www.behance.net/gallery/147405159/Challenge-Spot2",
    name: "Challenge Spot2",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/609e0a147405159.Y3JvcCw5ODEsNzY4LDIxLDA.png",
  },
  {
    link: "https://www.behance.net/gallery/143787873/Rediseno-Bookii",
    name: "Rediseno Bookii",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c1a196143787873.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
  },
  {
    link: "https://www.behance.net/gallery/137144771/Feel-Fit-App",
    name: "Feel Fit App",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/6da0df137144771.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
  },
];

const PortfolioPage = () => {
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
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transitionInitial}
        className="section"
      >
        <div className="container mx-auto h-full relative">
          <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
            {/* text */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={transitionInitial}
              className="flex flex-col lg:items-start"
            >
              <h1 className="h1">Portfolio</h1>
              <p className="mb-12 max-w-sm">
                These are some of the personal projects and tests that I have
                developed during my training time.
              </p>
              <Link href={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
                Hire me
              </Link>
            </motion.div>
            <div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="grid grid-cols-2 lg:gap-2 max-h-[40vh] lg:max-h-[80vh] overflow-y-auto"
            >
              {projects.map((project) => (
                <a key={project.name} href={project.link}>
                  <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                    <img
                      className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                      src={project.img}
                      alt={project.name}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default PortfolioPage;
