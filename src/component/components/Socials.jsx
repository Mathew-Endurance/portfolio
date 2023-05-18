import React from "react";
import { socialIcons } from "../../utils/constant";
import "../styles/socials.scss";

const Socials = () => {
  return (
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
  );
};

export default Socials;
