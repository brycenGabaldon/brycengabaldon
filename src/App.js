import React, { useState} from "react";
import "./Icon.scss";
import Clock from "./Clock";
import DockIcons from "./components/DockIcons";
import FolderStatus from "./components/FolderIcons"
import "./components/IconStyle.scss"
import TaskManager from "./taskManager/TaskManager";
import ImageUpload from "./ImageUpload";
import { AuthContext } from "./fbcontext/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Images from "./Images";
import Component from "./components/Files/ocClick";
import Resume from "./components/Files/Resume";
import ModalPortal from "./components/ModalPortal";
import Instagram from "./components/Files/Instagram";
import Discord from "./components/Files/Discord";
import Youtube from "./components/Files/Youtube";
import Github from "./components/Files/Github";
import Mail from "./components/Files/Mail";
import { useContext } from "react";
import Lotus2 from "./Lotus2/Lotus2";
import FB from "./fbApp";



export default function App() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  
  const [isActive, setIsActive] = useState(false);


const handleClick = () => {
  setIsActive(!isActive)
}


/*   const onClick = () => {
setIsActive({...isActive, second: true});
    console.log("did something")

}
useEffect( () => { console.log(isActive); }, [isActive] ); */


  console.log("app is Open");
  return (

      <div className="App" key={Math.floor(1 + Math.random() * 10000)}>
        <Clock className="ClockBanner"/>
         
      
          <Routes >
               <Route exact path="/Home" element={  <RequireAuth><ModalPortal  handleClick={handleClick} isActive={isActive}> <FolderStatus isActive={isActive} setIsActive={setIsActive}
                 key={Math.floor(1 + Math.random() * 10000)} /></ModalPortal></RequireAuth>}  />
                 <Route exact path="/home" element={  <ModalPortal  handleClick={handleClick} isActive={isActive}> <FolderStatus isActive={isActive} setIsActive={setIsActive}
                 key={Math.floor(1 + Math.random() * 10000)} /></ModalPortal>}  />
              <Route path="/" element={  <ModalPortal  handleClick={handleClick} isActive={isActive}> <FolderStatus isActive={isActive} setIsActive={setIsActive}
                 key={Math.floor(1 + Math.random() * 10000)} /></ModalPortal>} />
              <Route path="/ImageUpload" element={  <Component backgroundColor="white"><ImageUpload backgroundColor="white" /></Component>} />
              <Route path="/Images" element={  <Component backgroundColor="black"><Instagram/></Component>} />
              <Route path="/Jobber" element={<RequireAuth><Lotus2/></RequireAuth>} />
          
              <Route path="/Message" element={  <Component backgroundColor="black"></Component>} />
              <Route path="/Login/*" element={<FB/>}/>
              <Route path="/Github" element={  <Component backgroundColor="lightGray"><Github/></Component>} />
              <Route path="/Discord" element={  <RequireAuth><Component backgroundColor="rgb(45, 50, 55)"><Discord/></Component></RequireAuth>} />
              <Route path="/LinkedIn" element={  <Component backgroundColor="blue"></Component>} />
              <Route path="/Youtube" element={  <Component backgroundColor="black"><Youtube/></Component>} />
              <Route path="/Planner" element={  <Component className="taskmanager" backgroundColor="white"><TaskManager/></Component>} />
              <Route path="/Resume" element={  <Component backgroundColor="white"><Resume/></Component>} />
              <Route path="/Settings" element={  <Component backgroundColor="grey"></Component>} />
              <Route exact path="/Photos" element={  <Component backgroundColor="grey"><Images/></Component>} />
              <Route path="/Instagram" element={  <Component backgroundColor="black"><Instagram/></Component>} />
          </Routes>

        <DockIcons />

        <Mail/>
      </div> 

  );
}