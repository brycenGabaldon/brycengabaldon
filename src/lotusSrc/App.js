import { GiLotus } from "react-icons/gi";
import React, { useState } from 'react'
import "./App.scss"
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
 const Lotus = () => {

const CardData = [
  
  {  "title": "About Us ",
  "description": "We are a family owned private housekeeping service. With over 20 years of experience we will treat your own with the best care and service that we possibly can",
  "image": "About" },
  
  
  { "title": "Contact",
  "description": ["Phone Number: 480-358-8203\n", 
  "\nemail: lotusclean@lotusco.com \n", "\nAddress: Chandler, Az \n", "\nSomething: Something"],
  "image": "Services"
  },
  
  {"title": "Prepared",
  "description": "We have every product and device that is required to get your home back in order! you won't need to worry about supplying anything, we come prepared!",
  "image": "Contact"
  },
  
  {"title": "Services",
  "description": "We wipe all solid surfaces, appliances, windows, and mirrors. Make beds, vacuume floors, and organize items.",
  "image": "Reviews"
  }

]
const [Jobber, setJobber] = useState(false);



const HandleClick = () => {
setJobber(!Jobber)
console.log(Jobber)
}
console.log(CardData)
  return (
    <div className='A1'><motion.div  animate={{rotate: -0, scale: 1}}  transition={{ duration: .2, times: [0, 0.2, 1] }}  className='CenterLogo'><div className="logoHolder" style={{ fontSize: "2rem", position: "fixed", left: 0, top: 0, zIndex: 1000, padding:"1rem"}}><GiLotus/>Lotus Cleaning Co.</div> </motion.div> 
      <div className='Logo'><button style={{ fontSize: "1rem", position: "fixed", right: 0, top: 0, zIndex: 1000, padding:"1rem"}} onClick={HandleClick}>Book Appointment</button></div>
<motion.div initial={{scale:.1}} animate={{scale: .85}} transition={{ duration: .6, times: [0, 0.2, 1] }}  className='CardContainer'>
{CardData.map((card, i) => {
return (
  <>
<motion.div initial={{scale: .5}} animate={{rotate: -0, scale: 1}} transition={{ duration: .2, times: [0, 0.2, 1] }}className='CardOuter' >         
    <div className="CardInner">
<div className={card.image}> {card.title}</div>        
    
<div className='CardContents'>{card.description} 
</div> </div>
    
</motion.div>

</>
)
} )}  
      </motion.div>
<div onClick={HandleClick} className={Jobber ? "A2":"A3"}>
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
      </div>
      </div>    </div>
  )
}
export default Lotus;