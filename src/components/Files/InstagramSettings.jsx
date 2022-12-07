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
const [url, setUrl] = useState("");
const [ complete, setComplete] = useState(false)


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
          setComplete(true)
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
    console.log(loaded);
}

    }, [tasks, user, loaded]);
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
            {!complete && <button onClick={()=>handleSubmit}> Update</button>}
            </form>
            <div><br/>
                <ol style={{listStyle: "list", marginLeft:"5%", fontSize: "4vmin", fontFamily: "roboto"}}><span style={{fontSize: "6vmin", fontWeight: "bold"}}>How to Connect your Account</span> <br/><br/>
                    <li>Sign up for Tag embed at TagEmbed.com</li>
                    <li>Connect Tag Embed with Instagram</li>
                    <li>Embed Feed</li>
                    <li>Select "other" from provider list</li>
                    <li>Copy the "iFrame" Url</li>
                    <li>Cut down Url to just between the quotes</li>
                    <li>Paste url into textbox and submit</li>
                    <li>Youre all connected!</li>
                </ol>
            </div>
        </div>
    );
};

export default InstagramSettings;