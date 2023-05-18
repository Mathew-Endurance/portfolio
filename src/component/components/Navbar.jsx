import React, { useEffect, useState } from "react";
import "../styles/Navbar.scss";
import { navLinks, socialIcons } from "../../utils/constant";
import { animate, motion } from "framer-motion";
import Darkmode from "./DarkMode";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [darkmode, setShowDarkmode] = useState(true);

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  };

  const darkLinkVariants = {
    visible: {
      scale: 0,
    },
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <motion.div
      initial={{ y: -25 }}
      animate={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className={scroll ? "header active" : "header"}
    >
      <div className="Nav_container">
        <div className="logo">
          <h3>EM</h3>
        </div>
        <motion.div
          variants={darkLinkVariants}
          animate={toggle ? "visible" : "hidden"}
        >
          <Darkmode />
        </motion.div>

        <ul className="nav_links">
          {navLinks.map((navlink, index) => {
            return (
              <li key={index}>
                <a href={`#${navlink}`}>{navlink}</a>
              </li>
            );
          })}
        </ul>
        {/* <div className="social_icons">
          {socialIcons.map((socialIcon, index) => {
            return <div key={index}>{socialIcon}</div>;
          })}
        </div> */}
        <div className="social_icons">
          {socialIcons.map((social) => {
            const { icons, id, link } = social;
            return (
              <div key={id}>
                <a href={link}>{icons}</a>
              </div>
            );
          })}
        </div>
        <div className="menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
          />
        </div>
        <motion.div
          className="closeMenu"
          variants={menuVariants}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>

        <motion.div
          variants={navLinkVariants}
          animate={toggle ? "visible" : "hidden"}
          className="menuX"
        >
          <HiX onClick={() => setToggle(false)} />
          {navLinks.map((navlink, index) => {
            return (
              <li key={index}>
                <a href={`#${navlink}`} onClick={() => setToggle(false)}>
                  {navlink}
                </a>
              </li>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
