import React, { useState, useEffect } from "react";
import "./Main.scss";

import DockIcons from "./components/DockIcons";
import FolderStatus from "./components/FolderIcons";
import "./components/IconStyle.scss";
import TaskManager from "./apps/taskManager/TaskManager";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Images from "./apps/Images";
import Component from "./components/ocClick";
import Resume from "./apps/Resume";
import Instagram from "./apps/Instagram/Instagram";
import Discord from "./apps/Discord";
import Youtube from "./apps/Youtube/Youtube";
import Github from "./apps/Github";
import Mail from "./apps/Mail";
import Protected from "./components/Protected";
import Lotus2 from "./apps/Lotus2/Lotus2";
import Login from "./apps/Login/Login";
import { auth } from "./firebase";
import Bartending from "./apps/bartending/Bartending";
import Profile from "./apps/Profile/Profile";
import ProfileContainer from "./apps/Profile/ProfileContainer";
import Laristra from "./apps/Laristra/Laristra";
import InstagramSettings from "./apps/Instagram/InstagramSettings";
import YoutubeSettings from "./apps/Youtube/YoutubeSettings";
import Overview from "./apps/Overview";
import FoodTruck from "./apps/FoodTruck/FoodTruck";
import Tracker from "./tracker/Tracker";
import Bar from "./apps/bartending/Bar";
import BartendingHouse from "./apps/bartending/BartendingHouse";
import BarNav from "./apps/bartending/BarNav";
import BarNavComponents from "./apps/bartending/BarNavComponents";






export default function App({instagram, youtube, phoneNumber, url, backgroundUrl, displayName, viewUser, email, user, background, toggleLoaded, authMatch, loaded}) {




  const [isActive, setIsActive] = useState(false);

 
  const isLoggedIn = auth.currentUser;


useEffect( () => { console.log(isActive); }, [isActive] ); 
  const navigate = useNavigate();
  const [overlayProjects, setOverlayProjects] = useState(true);
  const [overlayContact, setOverlayContact] = useState(true);
  const [overlaySocials, setOverlaySocials] = useState(true);
  const [viewingUser, setViewingUser] = useState(false)
  const handleViewingUser = (value) =>{
    console.log(viewingUser)
    setViewingUser(value);
   
  }
  const handleProjects = (i) => {
    setOverlayProjects(i);
  
  };
  const handleContact = (i) => {
    setOverlayContact(i);
  
  };
  const handleSocials = (i) => {
    setOverlaySocials(i);

  };

  const handleSubmit2 = async (page) => {
    try {
      navigate("/Login");
      setIsActive(isActive);
    } catch (err) {}
  };
  

          useEffect(() => {

            const interval = setInterval(() => {
          
            }, 1000);
            return () => clearInterval(interval);
      
          },);

          
  return (
    <div className="App">
      {background && (
        <img 
          className={"UserBackground"}
          src={backgroundUrl || ""}
          alt={""}
        />
      )}
      <div className="ClockBanner" />

      <button page="Login" className="Logging" onClick={handleSubmit2}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
<button style={{background: "white" , zIndex:1000, position :"fixed", top: 0}}></button>
     
     
      <Routes>
        <Route exact path="/Home" element={""} />
        <Route exact path="/home" element={""} />
        <Route path="/" element={""} />
        <Route
          path="/ImageUpload"
          element={
            <Component backgroundColor="white">
              <Login backgroundColor="blue" />
            </Component>
          }
        />
        <Route
          path="/Images"
          element={
            <Component backgroundColor="black">
              <Instagram viewingUser={viewingUser} handleViewingUser={handleViewingUser
              }/>
            </Component>
          }
        />
                <Route
          path="/tracker"
          element={
          
<Tracker/>
       
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
          path="/foodtruck"
          element={
            <Component backgroundColor="lightGray">
              <FoodTruck />
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
          path="/bartending"
          element={<Component><Bartending/></Component>}
        />



      <Route
        path="components"
        element={<BarNavComponents/>}
      />



        <Route
          exact
          path="/Photos"
          element={
            <Component backgroundColor="grey">
              <Images viewUser= { viewUser}/>
            </Component>
          }
        />

        <Route path="/Login" element={<Login toggleLoaded={!toggleLoaded}/>} />
        <Route
          path="/profile"
          element={
            <Protected>
              <Component>
                <ProfileContainer user={user} url={url} displayName={displayName} authMatch={authMatch} viewUser={viewUser}></ProfileContainer></Component>
            </Protected>
          }
        />
        <Route
          path="/Instagram/"
          element={
            <Component backgroundColor="black">
              <Instagram instagram={instagram} loaded={loaded} />
            </Component>
          }
        />
                <Route
          path="/profile/InstagramSettings"
          element={
            <Component backgroundColor="white">
              <InstagramSettings />
            </Component>
          }
        />
                        <Route
          path="/profile/YoutubeSettings"
          element={
            <Component backgroundColor="white">
              <YoutubeSettings />
            </Component>
          }
        />
                                <Route
          path="/Overview"
          element={
            <Component backgroundColor="white">
              <Overview/>
            </Component>
          }
        />

                        <Route
          path="/profile/ProfileSettings"
          element={
            <Protected>
            <Component backgroundColor="white">
              <Profile displayName={displayName} email={email} instagram={instagram} viewUser={viewUser} youtube={youtube} phoneNumber={phoneNumber} user={user} backgroundUrl={backgroundUrl} url={url} toggleLoaded={toggleLoaded} background={background}/>
            </Component></Protected>
          }
        />
        <Route
          path="/laristra"
          element={
            <Component backgroundColor="black">
              <Laristra />
            </Component>
          }
        />
      </Routes>
      {loaded && <div style={{height:"100vh", width: "100vw"}}>
      <div
        className={!overlaySocials ? "Overlay22 " : "Overlay2 space1"}
        style={{
          color: "white",
          fontSize: "60px",
          textAlign: "center",
          zIndex: overlaySocials ? 100 : 1000,
        }}
        onClick={() => [
          handleContact(true),
          handleProjects(true),
          handleSocials(!overlaySocials),
        ]}
      >
        <FolderStatus
          sliceValue1="7"
          sliceValue2="11"
          isActive={!overlaySocials}
          phoneNumber={phoneNumber}
          email={email}
          loaded={loaded}
          key={Math.floor(1 + Math.random() * 10000)}
        />
        Socials
      </div>

      <div
        className={!overlayContact ? "Overlay22" : "Overlay2 space2"}
        style={{
          color: "white",
          fontSize: "60px",
          textAlign: "center",
          zIndex: overlayContact ? 100 : 1000,
        }}
        onClick={() => [
          handleContact(!overlayContact),
          handleProjects(true),
          handleSocials(true),
        ]}
      >
        <FolderStatus
          sliceValue1="0"
          sliceValue2="3"
          isActive={!overlayContact}
          key={Math.floor(1 + Math.random() * 10000)}
        phoneNumber={phoneNumber}
        email={email}
        loaded={loaded}
        
        />
        Contact
      </div>
<div
        className={!overlayProjects ? "Overlay22" : "Overlay2 space3"}
        style={{
          color: "white",
          fontSize: "60px",
          textAlign: "center",
          zIndex: overlayProjects ? 100 : 1000,
        }}
        onClick={() => [
          handleContact(true),
          handleProjects(!overlayProjects),
          handleSocials(true),
        ]}
      >
      
        <FolderStatus
          sliceValue1="11"
          sliceValue2="18"
          phoneNumber={phoneNumber}
          email={email}
          loaded={loaded}
          isActive={!overlayProjects}
          key={Math.floor(1 + Math.random() * 10000)}
        
        />
        Projects
      </div>
      <div
        className={
          !overlayProjects || !overlayContact || !overlaySocials
            ? "Overlay3"
            : "Overlay31"
        }
        onClick={() => [
          handleProjects(true),
          handleContact(true),
          handleSocials(true),
        ]}
      ></div></div>}
      

      <DockIcons />

      { !loaded && !background && <Mail />} 
    </div>
  );
}
