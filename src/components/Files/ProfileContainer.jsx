import React from "react";
import { data } from "../iconData"
import Buttons from "../File";

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
            <div className="profileContainers2 ContainerDock">
{data.icons.map((icon, i) => {
    return (
        icon.label === "Instagram "&&
        <Buttons
        key={Math.floor(1 + Math.random() * 10000)}
        iconClass={"Icons2 aspect-w-1 aspect-h-1 shadow-lg  hover:shadow-gray-500/50 " + icon.label + icon.iconClass}

        labelClass="buttonLabel1"
        name={icon.name}
        buttonClass="buttons2 aspect-w-1 aspect-h-1"
        icon={icon.icon}
        iconName={"/"+icon.iconName}
        label={icon.label}
        id={icon.key}
        page={icon.settings}
        folder={true}
        isActive="true"
        iconPass={icon.iconPass}
        href={String(icon.href)}
        useIcon={icon.userIcon}
        userIcon={auth.currentUser}

        
        
      />
    )
})}
</div>
<div className="profileContainers">
{}
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