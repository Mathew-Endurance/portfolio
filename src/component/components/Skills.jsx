import React, { useState } from "react";
import "../styles/skills.scss";
import { motion } from "framer-motion";
import { icons, experiences, finishes } from "../../utils/constant";

const Skills = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="container" id="skills">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ y: [-100, 0], opacity: 1 }}
        className="title"
      >
        <span>What I Expert?</span>
        <h1>Skills And Experience</h1>
      </motion.div>
      <motion.div className="select">
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >
          Experiences
        </button>
      </motion.div>
      <motion.div className="skills">
        {active === 1 &&
          icons.map((icon, index) => {
            return (
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileInView={{ y: [-100, 0], opacity: 2 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ duration: 1 }}
                key={index}
                className="tools"
              >
                {icon}
              </motion.div>
            );
          })}
      </motion.div>
      <motion.div
        // initial={{ opacity: 0 }}
        // whileInView={{ y: [-50, 0], opacity: 1 }}
        className="experiencs"
      >
        {/* initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ y: [-100, 0], opacity: 2 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 1 }} */}
        {active === 2 &&
          experiences.map((experience) => {
            return (
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileInView={{ y: [-150, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className="experience"
                key={experience.id}
              >
                <motion.span
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: [-150, 0], opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {experience.year}
                </motion.span>
                <div className="position">
                  <h3>{experience.position}</h3>
                  <p>{experience.company}</p>
                </div>
              </motion.div>
            );
          })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="finishes_container"
      >
        {finishes.map((finish) => {
          return (
            <div className="finishes" key={finish.id}>
              <div className="number">{finish.number}</div>
              <h4 className="item_name">{finish.itemName}</h4>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
