import React, {useState} from "react";
    import { updateProfile } from "firebase/auth";
import { auth, db} from "../../firebase";
import {collection, addDoc, Timestamp} from 'firebase/firestore'

const Profile = () => {




const user = auth.currentUser
const [email, setEmail] = useState(user.email)
const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
const [url, setUrl] = useState(user.photoURL)
const [displayName, setDisplayName] = useState(user.displayName)
const [fireToggle, setFireToggle] = useState(false)
const [profileToggle, setProfileToggle] = useState(false)

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
  return (
    <div className="ProfileBackground">
      {user !== null ? (
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
    </div>
  );
};

export default Profile;
