import React from "react";
import "../styles/About.scss";
import { motion } from "framer-motion";
import { bios } from "../../utils/constant";
import profile from "../../assets/pics2.jpg";
import cv from "../../assets/cv.pdf";

const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ y: [-80, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={profile}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            I'm a frontend developer with expertise in HTML, CSS, and
            JavaScript. I have experience working with frameworks and tools like
            React,Bootstrap, and tailwind css. I have a strong understanding of
            user experience principles and a passion for creating user-friendly
            and visually appealing web applications. I am dedicated to
            delivering high-quality code and am always looking for opportunities
            to learn and improve.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href={cv}
            download
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
