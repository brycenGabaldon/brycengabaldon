import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./login.scss"
import { signInWithGoogle } from "../../firebase";
import { auth, db} from "../../firebase";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import {setDoc, doc, Timestamp} from 'firebase/firestore'


import image from "../../images/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
function Login({profilePic, toggleLoaded}) {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({});
const [loginSignin, setLoginSignin] = useState(false)
const [viewUser2, setViewUser2] =useState("")
// const userRef = doc(db, "Users", auth.currentUser.displayName)



  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const continues2 = async() => {


    try {
      navigate("/home");


    } catch (err) {

    }
  };
  const continues = async() => {


    try {
      auth.currentUser &&
      navigate("/home");


    } catch (err) {

    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);

    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="Apppp">
      <div>
      <img src={profilePic} alt=""/>

      {!loginSignin ? [<div><h3 className="loginH3"> Register User </h3>
        <input className="formData"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        /><input className="formData"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        /></div> ]:[
      
      <div>
        <h3 className="loginH3"> Login </h3>
        <input className="formData"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input className="formData"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        /> </div>]}
        
        

        
<GoogleButton style={{fontSize:"3vmin", width: "60vmin", margin:"2vmin", position: "relative", left: "50%", transform: "translate(-54%, 0)"}} class="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</GoogleButton>
        <button className="loginButton" onClick={!loginSignin ? register: login}> {!loginSignin ? "register" : "login"}</button><button className="loginButton" onClick={()=> setLoginSignin(!loginSignin)}> {loginSignin ? "Create account?" : "Already have an account?"}</button>
      </div>

     <h4 className="loginH3"> User Logged In: </h4> <img style={{borderRadius: "50%",position:"relative", left:"42%", height: "10vmin", width: "10vmin", zIndex: 1000}} src={auth.currentUser !== null ? auth.currentUser.photoURL : image} alt="" />
     {!user && "Not logged in"}
      {user?.email}<br/>
 {user && <button className="loginButtonOut" onClick={logout}> Sign Out </button> } 
     { user && <button className="loginButtonOut" onClick={continues}> Continue </button>
    }  {!user &&<button className="loginButtonOut" onClick={continues2}> Continue as Guest</button>
}
<button >View Other Profile:</button>
                                    <input
              type="text"
              className="profileFormItem"
              placeholder="view user"
          
              value={viewUser2}
             onChange={(e) => setViewUser2(e.target.value)}
            ></input>

    </div>
  );
}

export default Login;