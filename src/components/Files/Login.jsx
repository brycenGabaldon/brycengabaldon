import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./login.scss"
import { signInWithGoogle } from "../../firebase";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import image from "../../images/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
function Login({profilePic}) {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });});

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
        <h3 className="loginH3"> Register User </h3>
        <input className="formData"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input className="formData"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button className="loginButton" onClick={register}> Create User</button>
      </div>

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
        />
<GoogleButton style={{width: "95%"}} class="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</GoogleButton>
        <button className="loginButton" onClick={login}> Login</button>
      </div>

      <img style={{borderRadius: "50%",position:"relative", height: "10vmin", width: "10vmin", zIndex: 1000}} src={auth.currentUser !== null ? auth.currentUser.photoURL : image} alt="" /><h4 className="loginH3"> User Logged In: </h4>
      {user?.email}
<button className="loginButtonOut" onClick={logout}> Sign Out </button>
      <button className="loginButtonOut" onClick={continues}> continue </button>

      
      

    </div>
  );
}

export default Login;