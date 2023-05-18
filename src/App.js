import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
  About,
  Contact,    
  Navbar, 
  Projects,   
  Skills,
  Home,
  Footer,
} from "./component/components";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />  
      <Skills />
      <Projects />
      <ToastContainer /> 
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
