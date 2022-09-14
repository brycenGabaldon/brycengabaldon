import "./App.scss";
import Modal from "./Modal";
import React, { useState } from "react";


export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="App">
        <div className="ButtonContainer">
          <button class="shadow-lg  hover:shadow-gray-500/50 Button Big" onClick={() => setIsOpen(true)}>
            {" "}
            Services
          </button>
          <button class="shadow-lg  hover:shadow-gray-500/50 Button Small">
            {" "}
            Contact
          </button>
          <button class="shadow-lg  hover:shadow-gray-500/50 Button Small">
            {" "}
            Book Appointment
          </button>
          <button class="shadow-lg hover:shadow-gray-500/50 Button Big">
            {" "}
            About us
          </button>

          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Modal
            </Modal>
        </div>
      </div>
    </>
  );
}
