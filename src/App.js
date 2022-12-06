import React, { useState } from "react";
import "./Icon.scss";

import DockIcons from "./components/DockIcons";
import FolderStatus from "./components/FolderIcons";
import "./components/IconStyle.scss";
import TaskManager from "./taskManager/TaskManager";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Images from "./Images";
import Component from "./components/Files/ocClick";
import Resume from "./components/Files/Resume";
import ModalPortal from "./components/ModalPortal";
import Instagram from "./components/Files/Instagram";
import Discord from "./components/Files/Discord";
import Youtube from "./components/Files/Youtube";
import Github from "./components/Files/Github";
import Mail from "./components/Files/Mail";
import Protected from "./components/Files/Protected";
import Lotus2 from "./Lotus2/Lotus2";
import Login from "./components/Files/Login";
import { auth } from "./firebase";
import MainGame from "./climberGame/MainGame";
import Profile from "./components/Files/Profile";

export default function App() {
  const user2 = auth.currentUser === null ? "guest" : auth.currentUser.email;
  const [isActive, setIsActive] = useState(false);
  const isLoggedIn = auth.currentUser;
  const handleSetbackground =() => {
    setSetbackground(!setBackground)
    console.log(setBackground)
  }

  /* const handleClick = () => {
  setIsActive(!isActive)
  console.log("this is handle click" + isActive)
} */

  /*   const onClick = () => {
setIsActive({...isActive, second: true});
    console.log("did something")
}
useEffect( () => { console.log(isActive); }, [isActive] ); */
  const navigate = useNavigate();
  const [overlayProjects, setOverlayProjects] = useState(true);
  const [overlayContact, setOverlayContact] = useState(true);
  const [overlaySocials, setOverlaySocials] = useState(true);
  const [setBackground, setSetbackground] = useState(false)
  const handleProjects = (i) => {
    setOverlayProjects(i);
    console.log(overlayProjects);
  };
  const handleContact = (i) => {
    setOverlayContact(i);
    console.log(overlayContact);
  };
  const handleSocials = (i) => {
    setOverlaySocials(i);
    console.log(overlaySocials);
  };

  const handleSubmit2 = async (page) => {
    try {
      navigate("/Login");
      setIsActive(isActive);
    } catch (err) {}
  };

  const handleSubmit = async (page) => {
    try {
      navigate("/Home");
    } catch (err) {}
  };

  console.log("url data");
  return (
    <div className="App">
      {setBackground && <img
        className={"UserBackground"}
        src={user2 === "guest" ? "" : auth.currentUser.photoURL}
        alt=""
      />}
      <div
className="ClockBanner" />

      <button page="Login" className="Logging" onClick={handleSubmit2}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <Routes>
        <Route exact path="/Home" element={""} />
        <Route exact path="/home" element={""} />
        <Route path="/" element={""} />
        <Route
          path="/ImageUpload"
          element={
            <Component backgroundColor="white">
              <Login backgroundColor="white" />
            </Component>
          }
        />
        <Route
          path="/Images"
          element={
            <Component backgroundColor="black">
              <Instagram />
            </Component>
          }
        />
        <Route
          path="/Jobber"
          element={
            <Protected>
              <Lotus2 />
            </Protected>
          }
        />
        <Route
          path="/Message"
          element={<Component backgroundColor="black"></Component>}
        />
        <Route
          path="/Github"
          element={
            <Component backgroundColor="lightGray">
              <Github />
            </Component>
          }
        />
        <Route
          path="/Discord"
          element={
            <Component backgroundColor="rgb(45, 50, 55)">
              <Discord />
            </Component>
          }
        />
        <Route
          path="/LinkedIn"
          element={<Component backgroundColor="blue"></Component>}
        />
        <Route
          path="/Youtube"
          element={
            <Component backgroundColor="black">
              <Youtube />
            </Component>
          }
        />
        <Route
          path="/Planner"
          element={
            <Component className="taskmanager" backgroundColor="white">
              <TaskManager />
            </Component>
          }
        />
        <Route
          path="/Resume"
          element={
            <div
              style={{
                width: "100vw",
                height: "100vh",
                background: "white",
                zIndex: " 1000",
              }}
            >
             <Resume />
            </div>
          }
        />
        <Route
          path="/Settings"
          element={<Component backgroundColor="grey"></Component>}
        />
        <Route
          exact
          path="/Photos"
          element={
            <Component backgroundColor="grey">
              <Images />
            </Component>
          }
        />
        <Route
          exact
          path="/Climber"
          element={
            <ModalPortal>
              <MainGame />
            </ModalPortal>
          }
        />
        <Route path="/Login" element={<Login />} />
        
        
        <Route
          path="/profile"
          element={
            <Protected>
            <Component backgroundColor="white">
              <Profile setBackground2={handleSetbackground} setBackground={setBackground}/>
            </Component>
            </Protected>
          }
        />
        <Route
          path="/Instagram"
          element={
            <Component backgroundColor="black">
              <Instagram />
            </Component>
          }
        />
        <Route
          path="/contact"
          element={
            !isActive ? (
              <div>
                <FolderStatus
                  sliceValue1="0"
                  sliceValue2="3"
                  isActive={true}
                  key={Math.floor(1 + Math.random() * 10000)}
                />
                <div onClick={handleSubmit} className="Overlay2"></div>
              </div>
            ) : (
              ""
            )
          }
        />{" "}
  
      </Routes>

      <div className={!overlaySocials ? "Overlay22 " : "Overlay2 space1"} style={{color: "white", fontSize:"80px", textAlign: "center", zIndex: overlaySocials? 100: 1000}}
 
 onClick={()=>[handleContact(true), handleProjects(true), handleSocials(false)]} >
          <FolderStatus
            sliceValue1="7"
            sliceValue2="10"
            isActive={!overlaySocials}
            key={Math.floor(1 + Math.random() * 10000)}
          />Socials
        </div>



        <div className={!overlayContact ? "Overlay22" : "Overlay2 space2"} style={{color: "white", fontSize:"80px", textAlign: "center", zIndex: overlayContact? 100: 1000}}
      
      onClick={()=>[handleContact(false), handleProjects(true), handleSocials(true)]}>
          <FolderStatus
            sliceValue1="0"
            sliceValue2="3"
            isActive={!overlayContact}
            key={Math.floor(1 + Math.random() * 10000)}
          />Contact
        </div>
  



    
        <div className={!overlayProjects ? "Overlay22" : "Overlay2 space3"} style={{color: "white", fontSize:"80px", textAlign: "center", zIndex: overlayProjects? 100: 1000}}
      
      onClick={()=>[handleContact(true), handleProjects(false), handleSocials(true)]} >
          <FolderStatus
            sliceValue1="10"
            sliceValue2="14"
            isActive={!overlayProjects}
            key={Math.floor(1 + Math.random() * 10000)}
          />Projects
        </div>
<div className={!overlayProjects || !overlayContact || !overlaySocials ? "Overlay3" : "Overlay31"} onClick={()=>[handleProjects(true), handleContact(true), handleSocials(true)]} ></div>
   
      <DockIcons

      />

     {!setBackground && <Mail />}
    </div>
  );
}
