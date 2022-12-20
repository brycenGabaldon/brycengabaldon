import React, {useState} from "react";
    import { updateProfile } from "firebase/auth";
import { db, auth} from "../../firebase";
import {setDoc, doc, Timestamp} from 'firebase/firestore'
import { CenterFocusStrong} from "@mui/icons-material";
import { FormControlLabel, Switch} from "@mui/material";
import { styled } from '@mui/material/styles';






const Profile = ({displayName, email, instagram, viewUser, youtube, phoneNumber, user, url, backgroundUrl, toggleLoaded, background}) => {

const [toggle, setToggle] = useState(background)
const [email2, setEmail2] = useState(email)
const [instagram2, setInstagram2] = useState(instagram)

const [youtube2, setYoutube2] = useState(youtube)
const [phoneNumber2, setPhoneNumber2] = useState(phoneNumber)
const [url2, setUrl2] = useState(url)
const [backgroundUrl2, setBackgroundUrl2] = useState(backgroundUrl)
const [displayName2, setDisplayName2] = useState(displayName)
const [fireToggle, setFireToggle] = useState(false)
const [profileToggle, setProfileToggle] = useState(false)


const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: "8.4vmin",
  height: "5.2vmin",
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(3.2vmin)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: "4.7vmin",
    height: "4.7vmin",
  },
  '& .MuiSwitch-track': {
    borderRadius: 52 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

    updateProfile(auth.currentUser, {
      displayName: displayName2, 
      photoURL: url2,
      phoneNumber: phoneNumber2,
      email: email2,
    }).then(() => {
    
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
    const userRef = doc(db, "Users", displayName)
const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await setDoc(userRef, {
         email: email2,
        displayName: displayName2,
        phoneNumber: phoneNumber2,
        instagram: instagram2,
    
        youtube: youtube2,
        url: url2,
        background: toggle,
        created: Timestamp.now()
      }, {merge:true})

    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className="ProfileBackground">


        <div>
          {" "}

          <form className="profileFormList" onSubmit={handleSubmit}>
            <span>Display name: {displayName2}</span>
            <input
              type="text"
              className="profileFormItem"
              placeholder="display"
              value={displayName2}
              onChange={(e) => setDisplayName2(e.target.value)}
            ></input>
   <span>E-Mail: {user.email}</span>
            <input
              type="text"
              className="profileFormItem"
              placeholder="email"
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
            ></input>
               <span>Phone: {phoneNumber2} </span>
            <input
              type="text"
              className="profileFormItem"
              placeholder= "phone not verified"
              value={phoneNumber2}
              onChange={(e) => setPhoneNumber2(e.target.value)}
              
            ></input>
               <span>Profile Image:</span>
            <input
              type="text"
              className="profileFormItem"
              placeholder={url}
              value={url2}
              onChange={(e) => setUrl2(e.target.value)}
            ></input><span>Background Image:</span>
                        <input
              type="text"
              className="profileFormItem"
              placeholder={backgroundUrl}
              value={backgroundUrl2}
              onChange={(e) => setBackgroundUrl2(e.target.value)}
            ></input><span>Instagram:</span>
                        <input
              type="text"
              className="profileFormItem"
              placeholder="instagram"
              value={instagram2}
              onChange={(e) => setInstagram2(e.target.value)}
            ></input><span>Youtube:</span>
                        <input
              type="text"
              className="profileFormItem"
              placeholder="youtube"
              value={youtube2}
              onChange={(e) => setYoutube2(e.target.value)}
            ></input>


<button className={!fireToggle? "profileSubmitButton": "profileSubmitButton2"} onClick={()=>[handleSubmit(),setFireToggle(true),]}>{!fireToggle? "Submit to Firebase": "Saved in Firebase!"}</button>
<button className={!profileToggle? "profileSubmitButton": "profileSubmitButton2"} onClick={()=>[updateProfile(),setProfileToggle(true)]}>{!profileToggle? "Update Profile": "Profile Updated!"}</button>
          </form>
        </div>
    
            <div style={{alignItems: CenterFocusStrong, display: "flex", justifyContent: "center" , background: "white", height: "80px"}}>
            <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }}  />}
        label="Use Custom Background"
        onClick={()=>setToggle(!toggle)}
        checked={toggle}
      />
              
              </div>  


    </div>
  );
};

export default Profile;