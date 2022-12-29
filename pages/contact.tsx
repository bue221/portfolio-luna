/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
// import motion
import { motion } from "framer-motion";
// import transition
import { transitionInitial } from "../src/components/animations/transitions";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Luna Cadena | Contact</title>
        <meta name="description" content="This is my personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transitionInitial}
        className="section bg-white"
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
            {/* bg */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={transitionInitial}
              className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"
            ></motion.div>
            {/* text & form */}
            <div
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              className="lg:flex-1 lg:pt-32 px-4"
            >
              <h1 className="h1">Contact me</h1>
              <p className="mb-12">I would love to get suggestions from you.</p>
              {/* form */}
              <form className="flex flex-col gap-y-4">
                <div className="flex gap-x-10">
                  <input
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    placeholder="Your name"
                  />
                  <input
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    placeholder="Your email address"
                  />
                </div>
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your message"
                />
                <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                  Send it
                </button>
              </form>
            </div>
            {/* image */}
            <motion.div
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ transition: transitionInitial, duration: 1.5 }}
              className="lg:flex-1"
            >
              <img src="/img/contact/1.jpeg" alt="" />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;
