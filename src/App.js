import "./App.scss";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import About from "./pages/About";
import React, { useState } from "react";
/* import { motion } from "framer-motion"; */


export default function App() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)

  return (
    <>
      <div className="App">
        <div className="ButtonContainer">
          <button className="shadow-lg  hover:shadow-gray-500/50 Button Big" onClick={() => setIsOpen1(true)}>
            {" "}
            Services
          </button>

          <button className="shadow-lg  hover:shadow-gray-500/50 Button Small" onClick={() => setIsOpen2(true)}>
            {" "}
            Contact
          </button>
          <button className="shadow-lg  hover:shadow-gray-500/50 Button Small" onClick={() => setIsOpen3(true)}>
            {" "}
            Book Appointment
          </button>
          <button  className="shadow-lg hover:shadow-gray-500/50 Button Big" onClick={() => setIsOpen4(true)}>
            {" "}
            About us
          </button>

          <Services open1={isOpen1} onClose1={() => setIsOpen1(false)}>
            </Services>

            <Contact open2={isOpen2} onClose2={() => setIsOpen2(false)}>
            </Contact>

            <Book open3={isOpen3} onClose3={() => setIsOpen3(false)}>
            </Book>

            <About open4={isOpen4} onClose4={() => setIsOpen4(false)}>
            </About>
        </div>
      </div>
    </>
  );
}
