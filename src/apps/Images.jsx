import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage, db } from "../firebase";
import { v4 } from "uuid";
import {
  collection,
  query,
  orderBy,
  onSnapshot,

  Timestamp,
  doc, setDoc
} from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";
import Task2 from "./taskManager/Task2";

function Images() {
  const auth = getAuth();

  const [firebaseActive, setFirebaseActive] = useState(1);
  const [profile, setProfile] = useState(1);

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const user = auth.currentUser === null ? "guest" : auth.currentUser.email;

  const [active, setActive] = useState(false);

  const todo = [];
  const [todos, setTodos] = useState([todo]);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const taskColRef = query(
      collection(db, user + "/"),
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
    console.log(tasks.data);
  }, [tasks.data, user]);

  const handleAdd = (index) => {
    const newTodos = { ...todos };
    newTodos.id = index;
    newTodos.selected = !newTodos.selected;

    setTodos(newTodos);
  };

  const imagesListRef = ref(storage, user + "/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `${user}/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [prev, url]);
        firebaseActive && handleFirestore(true);
        profile && updateProfile();
      });
    });
  };

  const [description, setDescription] = useState([]);
console.log(description)
  useEffect((upload) => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item, i) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
          upload
            ? item
                .slice(isSelected)
                .map.setDescription((prev) => [...prev, url])
            : item.slice(0).map.setDescription((prev) => [...prev, url]);
        });
      });
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFirestore = (index) => {
    listAll(imagesListRef).then((response) => {
      response.items.slice(isSelected).map((item) => {
        getDownloadURL(item).then((url) => {
          setDescription((prev) => [...prev, imagesListRef[todos.id]]);
          setImageUrls((prev) => [...prev, url]);
          index !== null && handleSubmit();
          setActive(!active);
          index !== null && updateProfile();
          index === 0 && setProfile(0)
          
          
        });return( "");
      });
    });
  };

  /* function to add new task to firestore */
  const userRef = doc(db, "Users", auth.currentUser.displayName)
  const handleSubmit = async (e) => {
    await setDoc(userRef,{
      backgroundUrl: imageUrls[isSelected],
      created: Timestamp.now(),
    }, { merge: true });
    console.log("button works");
  };

  // array of false
  const isSelected = todos.id;

  console.log("=======================");

  updateProfile(auth.currentUser, {
    photoURL: !active ? "" : String(tasks[0].data.description),
    phoneNumber: !active ? "" : String(tasks[0].data.description),

  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
  return (
    <div className="ImagesApp">
      <input
        style={{ backgroundColor: "black", color: "white", height: "2rem" }}
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <div>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            height: "2rem",
            margin: ".5rem",
            width: "40%",
            float: "right",
          }}
          onClick={uploadFile}
        >
          {" "}
          Upload Image
        </button>

        {firebaseActive === 3 && (
          <button
            style={{
              backgroundColor: firebaseActive === 3 ? "red" : "black",
              color: "white",
              height: "2rem",
              margin: ".5rem",
              width: "25%",
              float: "left",
            }}
            onClick={() => handleFirestore()}
          >
            {" "}
            Send To Firebase
          </button>
        )}

        {firebaseActive <= 2 && (
          <button
            style={{
              backgroundColor: firebaseActive === 2 ? "blue" : "black",
              color: "white",
              height: "2rem",
              margin: ".5rem",
              width: "25%",
              float: "left",
            }}
            onClick={() => setFirebaseActive(firebaseActive + 1)}
          >
            {" "}
            {firebaseActive === 1 ? "Firebase?" : "Show Firebase?"}
          </button>
        )}
        {profile >= 3 && (
          <button
            style={{
              backgroundColor: profile === 3 ? "red" : "green",
              color: "white",
              height: "2rem",
              margin: ".5rem",
              width: "25%",
              float: "left",
            }}
            onClick={() => handleFirestore(0)}
          >
            {" "}
            {profile > 3 ? "Done, Next?" : "Set as Profile Now!"}
          </button>
          
        )}
                {profile >= 3 && (
          <button
            style={{
              backgroundColor: profile === 3 ? "red" : "green",
              color: "white",
              height: "2rem",
              margin: ".5rem",
              width: "100%",
              float: "left",
            }}
            onClick={() => updateProfile()}
          >
            {" "}
            {profile > 3 ? "Done, Next?" : "Use Default Background"}
          </button>
          
        )}

        {profile <= 2 && (
          <button
            style={{
              backgroundColor: profile === 2 ? "blue" : "black",
              color: "white",
              height: "2rem",
              margin: ".5rem",
              width: "25%",
              float: "left",
            }}
            onClick={() => setProfile(profile + 1)}
          >
            {" "}
            {profile === 1 ? "Profile?" : "Set Selected Now?"}
          </button>
        )}
      </div>

      {firebaseActive === 3 &&
        tasks.map((task) => (
          <Task2
            id={task.id}
            key={task.id}
            completed={task.data.completed}
            title={task.data.title}
            description={task.data.description}

          />
        ))}

      {imageUrls.map((url, i) => {
        return (
          <div>
            <img
              className={i === isSelected && "imgSelected"}
              onClick={() => handleAdd(i)}
              src={url}
              alt="altname"
              key={i}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Images;
