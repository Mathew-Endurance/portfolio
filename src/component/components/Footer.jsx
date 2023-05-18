import React from "react";
import "../styles/Footer.scss";
import { socialIcons } from "../../utils/constant";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} All rights reserved{" "}
          <span>Endurance Mathew</span>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialIcons.map((social) => {
            const { icons, id, link } = social;
            return <div key={id}>{icons}</div>;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
