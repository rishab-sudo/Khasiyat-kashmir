import React from "react";
import { motion } from "framer-motion";

import HomeBanner from "../components/HomeBanner";
import Menu from "../components/HomeMenu";
import "./Home.css";


import Testimonial from "../components/Testimonial";
import Connect from "../components/Connect";
import HomeAbout from "../components/HomeAbout";
import Gallery from "../components/Gallery";
import Provide  from "../components/Provide";
import Special from "../components/Special";
// import WhyUS from "../components/WhyUS";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  return (
    <>
      {/* ✅ HOME */}
      <motion.section
        id="home"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomeBanner />
      </motion.section>

      {/* ✅ ABOUT */}
      <motion.section
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomeAbout />
      </motion.section>

                <motion.section
       
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
      <Provide/>
      </motion.section>
{/*  */}
       <motion.section
        id="quality"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Special />
      </motion.section>
{/*  */}
 {/* <motion.section
        id="quality"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <WhyUS />
           </motion.section> */}

      {/* ✅ MENU */}
  
      <motion.section
        id="menu"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Menu />
      </motion.section>
{/*  */}



      {/* ✅ REVIEW */}
      <motion.section
        id="review"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Testimonial />
      </motion.section>

      {/* ✅ CONTACT */}
      <motion.section
        id="connect"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Connect />
      </motion.section>

      {/* ✅ GALLERY */}
      <motion.section
        id="gallery"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Gallery />
      </motion.section>
    </>
  );
};

export default Home;