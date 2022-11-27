import React, { useState} from "react";
import "./Icon.scss";
import Clock from "./Clock";
import DockIcons from "./components/DockIcons";
import FolderStatus from "./components/FolderIcons"
import "./components/IconStyle.scss"
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
import Protected from "./components/Files/Protected"
import Lotus2 from "./Lotus2/Lotus2";
import Login from "./components/Files/Login";
import { auth } from "./firebase";
import image from "./images/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"

export default function App() {


  
  const [isActive, setIsActive] = useState(false);
const isLoggedIn = auth.currentUser

const handleClick = () => {
  setIsActive(!isActive)
}


/*   const onClick = () => {
setIsActive({...isActive, second: true});
    console.log("did something")

}
useEffect( () => { console.log(isActive); }, [isActive] ); */
const navigate = useNavigate();
const handleSubmit = async(page) => {


  try {
    navigate("/login");
  } catch (err) {

  }
};

  console.log("app is Open");
  return (

      <div className="App" key={Math.floor(1 + Math.random() * 10000)}>
        <Clock className="ClockBanner"/>
         <img style={{borderRadius: "50%", position: "fixed", top:0, left:"50%", transform: "translate(-50%,50%)", height: "8rem", width: "8rem", zIndex: 1000}} src={auth.currentUser !== null ? auth.currentUser.photoURL : image} alt="" />
     <button page="Login" className="Logging" onClick={handleSubmit}>{isLoggedIn ? "Logout" : "Login"}</button>
          <Routes >
               <Route exact path="/Home" element={  <ModalPortal  handleClick={handleClick} isActive={isActive}> <FolderStatus isActive={isActive} setIsActive={setIsActive}
                 key={Math.floor(1 + Math.random() * 10000)} /></ModalPortal>}  />
                 <Route exact path="/home" element={  <ModalPortal  handleClick={handleClick} isActive={isActive}> <FolderStatus isActive={isActive} setIsActive={setIsActive}
                 key={Math.floor(1 + Math.random() * 10000)} /></ModalPortal>}  />
              <Route path="/" element={  <ModalPortal  handleClick={handleClick} isActive={isActive}> <FolderStatus isActive={isActive} setIsActive={setIsActive}
                 key={Math.floor(1 + Math.random() * 10000)} /></ModalPortal>} />
              <Route path="/ImageUpload" element={  <Component backgroundColor="white"><Login backgroundColor="white" /></Component>} />
              <Route path="/Images" element={  <Component backgroundColor="black"><Instagram/></Component>} />
              <Route path="/Jobber" element={ <Protected><Lotus2/></Protected>} />
             <Route path="/Message" element={  <Component backgroundColor="black"></Component>} />
             <Route path="/Github" element={  <Component backgroundColor="lightGray"><Github/></Component>} />
              <Route path="/Discord" element={  <Component backgroundColor="rgb(45, 50, 55)"><Discord/></Component>} />
              <Route path="/LinkedIn" element={  <Component backgroundColor="blue"></Component>} />
              <Route path="/Youtube" element={  <Component backgroundColor="black"><Youtube/></Component>} />
              <Route path="/Planner" element={  <Component className="taskmanager" backgroundColor="white"><TaskManager/></Component>} />
              <Route path="/Resume" element={  <Component backgroundColor="white"><Resume/></Component>} />
              <Route path="/Settings" element={  <Component backgroundColor="grey"></Component>} />
              <Route exact path="/Photos" element={  <Component backgroundColor="grey"><Images/></Component>} />
             
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Instagram" element={  <Component backgroundColor="black"><Instagram/></Component>} />
          </Routes>

        <DockIcons />

        <Mail/>
      </div> 

  );
}