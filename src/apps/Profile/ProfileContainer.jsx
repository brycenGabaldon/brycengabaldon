import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaSms,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router";


import { auth } from "../../firebase";
import image from "../../images/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg";
const ProfileContainer = ({user, url, displayName, viewUser}) => {
  const navigate = useNavigate();


  const handleSubmit = async (page) => {
    try {
      navigate(String(page));
    } catch (err) {}
  };

  return (


    <div className="ProContainerBack">
      Settings

     { String(viewUser) === String(auth.currentUser.displayName) && 
  <div>

      <div className="profileContainers">
        <div  className="ImgDivPro"    
          onClick={() => handleSubmit("profilesettings")}
        style={{
              display: "flex",
              flexDirection: "column",
            
    
              }}>
          <img
            style={{
              aspectRatio: "1/1",
            
              height: "150px",
              borderRadius: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              border: "2px solid white",
              marginTop: "auto",
              marginBottom: "1%",
            }}
            src={url}
            alt={image}
          />

          <span
            style={{
              color: "white",
              fontSize: "10vmin",

              wordWrap: "break-word",
              lineHeight: "40px",
              fontWeight: 300,
              textAlign: "center",
            }}
          >
            {displayName}
          </span>

          <span style={{ fontSize: " 2vmin",lineHeight: "2vmin", fontWeight: "lighter",    textAlign: "center", color: "white", marginTop: "3%",  }}>
            Account Settings: Email, Username, Profile Image, Name, Phone, Etc.
          </span>
        </div>
      </div>
      <br />
      <div className="profileContainers2">Background Image</div>
      <div className="profileContainers2">Connected Apps</div>
      <div className="profileContainers2">Folders</div>
      <br />
      <div
        className="profileContainers2"
        onClick={() => handleSubmit("instagramsettings")}
      >
        <FaInstagram />
        Instagram
      </div>
      <div className="profileContainers2"
              onClick={() => handleSubmit("youtubesettings")}>
        <FaYoutube />
        Youtube
      </div>
      <div className="profileContainers2">
        <FaLinkedinIn />
        LinkedIn
      </div>
      <div className="profileContainers2">
        <FaPhoneAlt />
        Phone
      </div>
      <div className="profileContainers2">
        <FaSms />
        Text
      </div>
      <div className="profileContainers2">
        <FaEnvelope />
        E-Mail
      </div>
      <div className="profileContainers2">
        <FaPhoneAlt />
      </div></div> }
    </div>
  );
};

export default ProfileContainer;
