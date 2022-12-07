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

const YoutubeSettings = () => {
const [url, setUrl] = useState("");
const [ complete, setComplete] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await addDoc(collection(db, user+ "YoutubeSettings/"), {
            email: user,
            url: url,
            Setting: "Youtube",
            id: "YoutubeSetting",
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
        collection(db, user + "YoutubeSetting/"),
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
              placeholder="https://www.youtube.com/embed/videoseries?list=PLLY5dnxMW-q2xebdvfab4Nog-aVVrgHBM"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            ></input>
            {!complete && <button onClick={()=>handleSubmit}> Update Youtube</button>}
            </form>
            <div><br/>
                <ol style={{listStyle: "list", marginLeft:"5%", fontSize: "4vmin", fontFamily: "roboto"}}><span style={{fontSize: "6vmin", fontWeight: "bold"}}>How to Embed Youtube</span> <br/><br/>
                    <li>Go to youtube.com</li>
                    <li>Find a public playlist or video to share</li>
                    <li>Select "Share"</li>
                    <li>Select embed</li>
                    <li>Copy the "iFrame" URL</li>
                    <li>Cut down URL to just between the "src" quotes</li>
                    <li>Paste URL into textbox and submit</li>
                    <li>Youre all connected!</li>
                </ol>
            </div>
        </div>
    );
};

export default YoutubeSettings;