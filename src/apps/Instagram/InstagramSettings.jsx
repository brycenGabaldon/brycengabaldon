import { updateProfile } from "firebase/auth";
import { CenterFocusStrong } from "@mui/icons-material";
import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, {useEffect} from "react";
import { useState} from "react";
import { db, auth } from "../../firebase";
import { collection,Timestamp, setDoc, addDoc, doc, query, where, orderBy, getDocs} from "firebase/firestore";

const Profile = ({ setBackground, setBackground2, viewingUser, handleViewingUser }) => {
  const userEmail = auth.currentUser !== null ? "guest" : auth.currentUser.email;

 const [publicProfile, setPublicProfile] = useState(userEmail);
const [loaded, setLoaded] = useState(false)
  const user = auth.currentUser === null ? "": auth.currentUser

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [fireToggle, setFireToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  const [public1, setPublic] = useState(false);
  const handleSubmit2 = async () => {
    try {
      
      await addDoc(collection(db, user), {
        email: email,
        public: "true"
      });
      setPublic(!public1);
      console.log("clicked");
    } catch (err) {
      alert(err);
    }
  };
  const settingsRef = collection(db, "Users");
  const q = query(settingsRef, where("displayName", "==", user.displayName,), orderBy("created", "asc"));
  const getData = async()=>{
  
    const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
   
    setEmail(doc.data().email);
    setDisplayName(doc.data().displayName);
    setPhoneNumber(doc.data().phoneNumber);
    setInstagram(doc.data().instagram);
    setYoutube(doc.data().youtube);
  });
  }
  

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: "8.4vmin",
    height: "5.2vmin",
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(3.2vmin)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: "4.7vmin",
      height: "4.7vmin",
    },
    "& .MuiSwitch-track": {
      borderRadius: 52 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  updateProfile(user, {
    displayName: displayName,

    phoneNumber: phoneNumber,
    email: email,
  })
    .then(() => {
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
const data = {
  email: email,
  displayName: displayName,
  phoneNumber: phoneNumber,
  instagram: instagram,
  youtube: youtube,
  completed: false,
  created: Timestamp.now(),
}

  const handleSubmit = async () => {
 
    try {
      const dbRef = doc(db, "Users", user.displayName)

        setDoc(dbRef, data)
        .then(docRef => {
            console.log("Document has been added successfully");
        })
        .catch(error => {
            console.log(error);
        })
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {

    const interval = setInterval(() => {

        !loaded &&  
      getData();
      setLoaded(true)



     
    }, 1000);
    return () => clearInterval(interval);

  },);
  const user2 = auth.currentUser === null ? "guest" : auth.currentUser.email;
  return (
    <div className="ProfileBackground">
      {user2 !== "guest" ? (
        <div>
          {" "}
          <form className="profileFormList" onSubmit={handleSubmit}>
            <span>Display name: {displayName}</span>
            <input
              type="text"
              className="profileFormItem"
              placeholder={displayName}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            ></input>
            <span>E-Mail: {email}</span>
            <input
              type="text"
              className="profileFormItem"
              placeholder={email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <span>Phone: {phoneNumber} </span>
            <input
              type="text"
              className="profileFormItem"
              placeholder="phone not verified"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
            <span>Profile Image:</span>
            <input
              type="text"
              className="profileFormItem"
              placeholder={instagram}
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            ></input>
                    <input
              type="text"
              className="profileFormItem"
              placeholder={youtube}
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
            ></input>

            <button
              className={
                !fireToggle ? "profileSubmitButton" : "profileSubmitButton2"
              }
              onClick={() => [handleSubmit(), setFireToggle(true)]}
            >
              {!fireToggle ? "Submit to Firebase" : "Saved in Firebase!"}
            </button>
            <button
              className={
                !profileToggle ? "profileSubmitButton" : "profileSubmitButton2"
              }
              onClick={() => [updateProfile(), setProfileToggle(true)]}
            >
              {!profileToggle ? "Update Profile" : "Profile Updated!"}
            </button>
            <input
              type="text"
              className="profileFormItem"
              placeholder={viewingUser}
              value={publicProfile}
              onChange={(e) => setPublicProfile(e.target.value)}
            ></input>
            <button onClick={()=>handleViewingUser(publicProfile)}>View Users Profile</button>
          </form>
        </div>
      ) : (
        <div>Not Logged in, youre on the guest profile</div>
      )}
      <div
        style={{
          alignItems: CenterFocusStrong,
          display: "flex",
          justifyContent: "center",
          background: "white",
          height: "80px",
        }}
      >
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} />}
          label="Use Default Background"
          onChange={setBackground2}
          checked={!setBackground}
        />
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} />}
          label="Public Profile"
          onChange={handleSubmit2}
          checked={!public1}
        />
                   

      </div>
    </div>
  );
};

export default Profile;
