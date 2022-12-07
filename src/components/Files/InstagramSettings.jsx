import { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  Timestamp
} from "firebase/firestore";

const InstagramSettings = () => {
const [url, setUrl] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await addDoc(collection(db, user+ "InstagramSettings/"), {
            email: user,
            url: url,
            Setting: "Instagram",
            id: "InstagramSetting",
            created: Timestamp.now()
          })
    
        } catch (err) {
          alert(err)
        }
      }


    const user = auth.currentUser === null ? "guest" : auth.currentUser.email;
    const [tasks, setTasks] = useState("");
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
try {
    const taskColRef = query(
        collection(db, user + "InstagramSettings/"),
        orderBy("created", "desc")
      );
      onSnapshot(taskColRef, (snapshot) => {
        setTasks(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
      setLoaded(true)
} catch(err) {
    console.error();
}

    }, [tasks, user]);
    return (
        <div>
           
            <form className="profileFormList" onSubmit={handleSubmit}> User: {user}
            <input
              type="text"
              className="profileFormItem"
              placeholder="https://widget.tagembed.com/75514?view"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            ></input>
            <button onClick={()=>handleSubmit}> Update</button>
            </form>
        </div>
    );
};

export default InstagramSettings;