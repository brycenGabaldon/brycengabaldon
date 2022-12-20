

import React, { useEffect } from "react";
import "../AppStyles.scss"


const Instagram = ({instagram, loaded}) => {


useEffect(() => {

  const interval = setInterval(() => {
!loaded &&     
console.log(instagram)

  }, 1000);
  return () => clearInterval(interval);

},);
    return (
      <div className="DiscordView">
     
        
{loaded && [<iframe title="instagram" src={instagram} style={{width:"100%", height:"100%", overflow: "auto"}} frameBorder="0" allowtransparency="true"></iframe>]}
<div > not loaded </div>

        </div>
 
    );
  };

  export default Instagram;