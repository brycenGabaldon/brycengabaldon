import React from "react";

import { auth} from "../../firebase";
import image from "../../images/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
const ProfileContainer = () => {
    const user = auth.currentUser
    return (
        <div className='ProContainerBack'>Settings
            <div className="profileContainers">  
<img style={{height:"125px", width:"125px", borderRadius: "50%", margin: "10px"}} src={auth.currentUser.photoURL} alt={image} /> 
<span style={{color:"white", fontSize: "40px", float: "left", wordWrap: "break-word", lineHeight: "40px", fontWeight: 300}} >{user.displayName}</span> 
         
         </div>
            <div className="profileContainers2">

</div>
<div className="profileContainers">
<div className="profileContainers2">

</div>
</div>

<div className="profileContainers">
<div className="profileContainers2">

</div>
</div>

            
        </div>
    );
};

export default ProfileContainer;