import React from "react";
import { useState } from "react";
import "./Lotus2.scss";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Lotus2 = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [open4, setOpen4] = useState(true);
const [spin, setSpin] = useState(false)
 

  const data = {
    one: " Address: 1234 Address St. Chandler,az \n",
    two: " We are a family owned private housekeeping service. With over 20 years of experience we will treat your own with the best care and service that we possibly can",
    three: [
      "Dusting",
      "Wiping appliances",
      "Wipe all hard surfaces",
      "Sweeping, Mopping, Vacuming",
      "Clean mirrors and glass",
      "Clean window ledge/ blinds",
      "Clean doors and frames",
      "Clean baseboards",
      "And more!"
    ],
    four: [
        "$300 (1,500SqFt. 3 bedroom, 2 bath)",
        "$400 (1,800SqFt. 4 bedroom, 2 bath)",
        "$500 (2,500SqFt. 5 bedroom, 3 bath)",

      ],
  };
  console.log(data.one);
  return (
    <div className="lotus2">
      <div className="container">
        <span className="LotusTitle"> Lotus Cleaning Co.</span>
        <button className="jobButton" onClick={() => setOpen(true)}>
          Book An Appointment!
        </button>
        <motion.div
          className="motion"
          initial={{ scale: 3, opacity: 0 }}
          animate={{   scale: 0.7, rotate: 360, opacity: 1}}
          transition={{ delay: 1 ,duration: 2 }}
          whileTap= {{ rotate: -360}}
        >
          <motion.div
            initial={{ rotate: 33.3}}
            animate={{ scale: 0.9}}
            whileTap= {{ rotate: 360}}
            transition={{ duration: 2 }}
            className="lotusContainer2 drop-shadow-2xl"
          >
            <div className="flowerCenter2"></div>
            <div className="topLeft2"> </div>
            <div className="topRight2"></div>
            <div className="bottomLeft2"></div>
            <div className="bottomRight2"></div>
          </motion.div>
          <motion.div
            animate={{ scale: 0.8 }}
            whileTap= {{ rotate: -360}}
            transition={{ duration: 2 }}
            className="lotusContainer2 drop-shadow-2xl"
          >
            <div className="flowerCenter2"></div>
            <div className="topLeft2"> </div>
            <div className="topRight2"></div>
            <div className="bottomLeft2"></div>
            <div className="bottomRight2"></div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.6 }}
            animate={{ scale: 0.7 }}
            transition={{ duration: 2 }}
            className="lotusContainer drop-shadow-2xl"
          >
            <div className="flowerCenter" onclick={()=>setSpin(!spin)}></div>
            <div onClick={() => setOpen1(!open1)} className="topLeft">
              <div>
                {" "}
                {open1 ? (
                  "Contact Us"
                ) : (
                  <div className="Petal2">
                    {data.one}
                    <br />
                    <br/><a href="tel: 480-358-8203">Phone: 480-358-8203</a> <br />
                    <br/><a href="email:customers@lotuscleaning.com">
                      Customers@LotusCleaning.com
                    <br/></a>
                  </div>
                )}{" "}
              </div>
            </div>
            <div onClick={() => setOpen2(!open2)} className="topRight">
              <div>
                {" "}
                {open2 ? (
                  "About Us"
                ) : (
                  <div className="Petal2">
                    {data.two}
                    <br />
                    
                  </div>
                )}
              </div>
            </div>
            <div onClick={() => setOpen3(!open3)} className="bottomLeft">
              <div>
                {open3 ? (
                  "Services"
                ) : (
                  <div className="Petal1">
                    <ul style={{ listStyleType: "disc" }}>
                      {data.three.map((info) => {
                        return <li>{info}</li>;
                      })}{" "}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div onClick={() => setOpen4(!open4)} className="bottomRight">
              <div>
                {" "}
                {open4 ? (
                  "Rates"
                ) : (
                  <div className="Petal4">
                    <ul style={{ listStyleType: "disc" }}>
                      {data.four.map((info) => {
                        return <li>{info}</li>;
                      })}{" "}
                    </ul>
                 
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div onClick={() => setOpen(false)} className={open ? "A4" : "A3"}>
        <div className="Application" id="f6f2802e-49e8-477b-b405-8b2b18dded97">
          <Helmet>
            <div id="f6f2802e-49e8-477b-b405-8b2b18dded97"></div>
            <link
              rel="stylesheet"
              media="screen"
              href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
            />
            <script
              src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
              clienthub_id="f6f2802e-49e8-477b-b405-8b2b18dded97"
              form_url="https://clienthub.getjobber.com/client_hubs/f6f2802e-49e8-477b-b405-8b2b18dded97/public/work_request/embedded_work_request_form"
            />
          </Helmet>
        </div>
      </div>
    </div>
  );
};

export default Lotus2;
