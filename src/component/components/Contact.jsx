import React from "react";
import "../styles/contact.scss";
import { contacts } from "../../utils/constant";
import { Socials } from "../components";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !lastName || !phone || !email || !message) {
      setFormError("please fill out all fields");
    } else if (!isValidEmail(email)) {
      setFormError("please enter a valid email address");
    } else {
      emailjs
        .sendForm(
          "service_uwpl3bd",
          "template_gj6m2l3",
          e.target,
          "7-3w-uA1Yj64LFwTZ"
        )
        .then(
          (result) => {
            setName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setFormError("");

            toast.success(" message has  been sent ");
          },
          (error) => {
            setFormError(
              "there is error sending the message. please try again"
            );
          }
        );
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi</h3>
          <p className="contact_text">
            Have any questions or would like to discuss a project, please feel
            free to contact me using the form on this page. I look forward to
            hearing from you!
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
          <div className="">
            <Socials />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>

          <form onSubmit={handleSubmit}>
            {formError && <div style={{ color: "red" }}>{formError}</div>}
            <div className="row">
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="row">
              <textarea
                placeholder="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="btn"
            >
              <button type="submit">SEND </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
