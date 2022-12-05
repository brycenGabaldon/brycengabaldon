import React, {useState} from "react";
    import { updateProfile } from "firebase/auth";
import { auth, db} from "../../firebase";
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { CenterFocusStrong} from "@mui/icons-material";
import { FormControlLabel, Switch} from "@mui/material";
import { styled } from '@mui/material/styles';




const Profile = ({setBackground, setBackground2}) => {




const user = auth.currentUser
const [email, setEmail] = useState(user.email)
const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
const [url, setUrl] = useState(user.photoURL)
const [displayName, setDisplayName] = useState(user.displayName)
const [fireToggle, setFireToggle] = useState(false)
const [profileToggle, setProfileToggle] = useState(false)

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
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
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

    updateProfile(user, {
      displayName: displayName, 
      photoURL: url,
      phoneNumber: phoneNumber,
      email: email,
    }).then(() => {
    
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, user.displayName), {
        email: email,
        displayName: displayName,
        phoneNumber: phoneNumber,
        url: url,
        completed: false,
        created: Timestamp.now()
      })

    } catch (err) {
      alert(err)
    }
  }

  const user2 = auth.currentUser === null ? "guest" : auth.currentUser.email;
  return (
    <div className="ProfileBackground">

      {user2 !== "guest" ? (
        <div>
          {" "}

          <form className="profileFormList" onSubmit={handleSubmit}>
            <span>Display name: {user.displayName}</span>
            <input
              type="text"
              className="profileFormItem"
              placeholder="display"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            ></input>
   <span>E-Mail: {user.email}</span>
            <input
              type="text"
              className="profileFormItem"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
               <span>Phone: {user.phoneNumber} </span>
            <input
              type="text"
              className="profileFormItem"
              placeholder= "phone not verified"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              
            ></input>
               <span>Profile Image:</span>
            <input
              type="text"
              className="profileFormItem"
              placeholder="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            ></input>


<button className={!fireToggle? "profileSubmitButton": "profileSubmitButton2"} onClick={()=>[handleSubmit(),setFireToggle(true)]}>{!fireToggle? "Submit to Firebase": "Saved in Firebase!"}</button>
<button className={!profileToggle? "profileSubmitButton": "profileSubmitButton2"} onClick={()=>[updateProfile(),setProfileToggle(true)]}>{!profileToggle? "Update Profile": "Profile Updated!"}</button>
          </form>
        </div>
      ) : (
        <div>Not Logged in, youre on the guest profile</div>
      )}
            <div style={{alignItems: CenterFocusStrong, display: "flex", justifyContent: "center" , background: "white", height: "80px"}}>
            <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }}  />}
        label="Use Default Background"
        onChange={setBackground2}
        checked={!setBackground}
      />
              
              </div>  


    </div>
  );
};

export default Profile;
