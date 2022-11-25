import React from 'react';
import { useState } from 'react';
import './Lotus2.scss';
import { Helmet } from 'react-helmet';

const Lotus2 = () => {

const [open, setOpen] = useState(false)

    return (
<div className='lotus2'>
        <div className='container'>
           <span> Lotus Cleaning Co.</span>

        <div className='lotusContainer2 drop-shadow-2xl'>
<div className='flowerCenter2'></div>
         <div className='topLeft2'> </div>
         <div className='topRight2'></div>
         <div className='bottomLeft2'></div>
         <div className='bottomRight2'></div>
        </div>
        <div className='lotusContainer drop-shadow-2xl'>
<div className='flowerCenter' onClick={()=> setOpen(true)} >Book Appointment</div>
         <div className='topLeft'><div>Reviews</div> </div>
         <div className='topRight'><div>Services</div></div>
         <div className='bottomLeft'><div>Contact Us</div></div>
         <div className='bottomRight'><div>About Us</div></div>
        </div>

        
        
        </div>
        
        <div onClick={()=>setOpen(false)} className={open ? "A2" : "A3"}>
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