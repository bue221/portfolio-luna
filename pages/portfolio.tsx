/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
// import motion
import { motion } from "framer-motion";
// import transition
import { transitionInitial } from "../src/components/animations/transitions";

const PortfolioPage = () => {
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
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={transitionInitial}
              className="flex flex-col lg:items-start"
            >
              <h1 className="h1">Portfolio</h1>
              <p className="mb-12 max-w-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <b> Exercitationem, veritatis.</b> Veritatis illum aut,
                reprehenderit sed dolorem dolore.
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
              </p>
              <Link href={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
                Hire me
              </Link>
            </motion.div>
            {/* image grid */}
            <div
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              className="grid grid-cols-2 lg:gap-2"
            >
              {/* image */}
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <img
                  className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                  src="/img/portfolio/1.png"
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <img
                  className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                  src="/img/portfolio/2.png"
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <img
                  className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                  src="/img/portfolio/3.png"
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <img
                  className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                  src="/img/portfolio/4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default PortfolioPage;
