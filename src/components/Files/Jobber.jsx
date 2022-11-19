import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";



const Jobber = () => {


    return (
        <motion.div className="Outer"initial={{scale:0}} animate={{scale: 1}} whileHover={{scale:1.1}}>
        <div className="Inner">
      <div className="Application" id="f6f2802e-49e8-477b-b405-8b2b18dded97">
        <Helmet>
        <div id="f6f2802e-49e8-477b-b405-8b2b18dded97"></div>
          <link
            rel="stylesheet"
            media="screen"
            href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
          />
          <script 
            src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" clienthub_id="f6f2802e-49e8-477b-b405-8b2b18dded97" form_url="https://clienthub.getjobber.com/client_hubs/f6f2802e-49e8-477b-b405-8b2b18dded97/public/work_request/embedded_work_request_form"
            />

        </Helmet>
      </div></div></motion.div>
    );
  };

  export default Jobber;