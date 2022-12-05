import React, { useState } from "react";
import "./Icon.scss";
import Clock from "./Clock";
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
  
  const handleProjects = () => {
    setOverlayProjects(!overlayProjects);
    console.log(overlayProjects);
  };
  const handleContact = () => {
    setOverlayContact(!overlayContact);
    console.log(overlayContact);
  };
  const handleSocials = () => {
    setOverlaySocials(!overlaySocials);
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
      <img
        className={"UserBackground"}
        src={user2 === "guest" ? "" : auth.currentUser.photoURL}
        alt=""
      />
      <Clock className="ClockBanner" />

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
            <Component backgroundColor="white">
              <Profile />
            </Component>
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
        <Route
          path="/Social"
          element={
            !isActive ? (
              <div>
                <FolderStatus
                  sliceValue1="7"
                  sliceValue2="12"
                  isActive={true}
                  key={Math.floor(1 + Math.random() * 10000)}
                />
                <div onClick={handleSubmit} className="Overlay2"></div>
              </div>
            ) : (
              ""
            )
          }
        />
      </Routes>

      <div
        onClick={() => setOverlaySocials(true)}
        className={overlaySocials ? "Overlay21" : "Overlay2"}
      >
        {" "}
        <div>
          <FolderStatus
            sliceValue1="7"
            sliceValue2="12"
            isActive={!overlaySocials}
            key={Math.floor(1 + Math.random() * 10000)}
          />
        </div>
      </div>
      <div className={!overlaySocials ? "Overlay3" : "Overlay31"} />

      <div
        onClick={() => setOverlayContact(true)}
        className={overlayContact ? "Overlay21" : "Overlay2"}
      >
        {" "}
        <div>
          <FolderStatus
            sliceValue1="0"
            sliceValue2="3"
            isActive={!overlayContact}
            key={Math.floor(1 + Math.random() * 10000)}
          />
        </div>
      </div>
      <div className={!overlayContact ? "Overlay3" : "Overlay31"} />

      <div
        onClick={() => setOverlayProjects(true)}
        className={overlayProjects ? "Overlay21" : "Overlay2"}
      >
        {" "}
        <div>
          <FolderStatus
            sliceValue1="12"
            sliceValue2="17"
            isActive={!overlayProjects}
            key={Math.floor(1 + Math.random() * 10000)}
          />
        </div>
      </div>
      <div className={!overlayProjects ? "Overlay3" : "Overlay31"} />
      <DockIcons
        handleProjects={handleProjects}
        handleSocials={handleSocials}
        handleContact={handleContact}
      />

      <Mail />
    </div>
  );
}
