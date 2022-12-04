import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage, db , auth} from "./firebase";
import { v4 } from "uuid";
import {collection, query, orderBy, onSnapshot, addDoc, Timestamp} from "firebase/firestore"

import Task2 from "./taskManager/Task2";


function Images() {

const [firebase, setFirebase] =useState(false)

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
const user = auth.currentUser === null ? "guest": auth.currentUser.email
const todo =[

]
    const [todos, setTodos] = useState([todo]);
    const [tasks, setTasks] = useState([])
    useEffect(() => {
      const taskColRef = query(collection(db, user+"/"), orderBy('created', 'desc'))
      onSnapshot(taskColRef, (snapshot) => {
        setTasks(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
      console.log(tasks.data)
    },[])


    const handleAdd = (index) => {
      const newTodos = {...todos};
      newTodos.id = index;
      newTodos.selected = !newTodos.selected;

      setTodos(newTodos);

    }
    
    


  const imagesListRef = ref(storage, user+"/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `${user}/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [prev, url]);
      });
    });
  };
 const [title, setTitle] = useState('title')
  const [description, setDescription] = useState([])


  useEffect(() => {
    listAll (imagesListRef).then((response) => {
      response.items.forEach((item, i) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
          item.slice(isSelected).map.setDescription((prev) => [...prev, url]);
   
        });
      });
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
const handleFirestore = () => {
  listAll(imagesListRef).then((response) => {
    response.items.slice(isSelected).map((item) => {
      getDownloadURL(item).then((url) => { setDescription((prev) => [...prev, imagesListRef[todos.id]]);
        setImageUrls((prev) => [...prev, url]);
        console.log(description[isSelected])
        handleSubmit();
        return ("")
   ;})})})}
 




 
  

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
      await addDoc(collection(db, user), {
 title: user,
 description: imageUrls[isSelected],
 created: Timestamp.now()

      });
    console.log("button works")}

 // array of false
 const isSelected = todos.id
 console.log(isSelected)

  return (
    <div className="ImagesApp">
      <input
        style={{ backgroundColor: "black", color: "white", height: "2rem" }}
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          height: "2rem",
          margin: ".5rem",
        }}
        onClick={uploadFile}
      >
        {" "}
        Upload Image
      </button>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          height: "2rem",
          margin: ".5rem",
        }}
        onClick={()=>setFirebase(!firebase)}
      >
        {" "}
        Show Firebase
      </button>
      {todos.id === isSelected && 
      
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          height: "2rem",
          margin: ".5rem",
        }}
        onClick={()=>handleFirestore(isSelected)}
      >
        {" "}
        Save to Firebase
      </button>
      
      } 
  
  {firebase && tasks.map((task) => (
            <Task2
              id={task.id}
              key={task.id}
              completed={task.data.completed}
              title={task.data.title} 
              description={task.data.description}
              awaitBackground={firebase ? "url("+task.data.description+")" : "white"}
          
            />
          ))}

      {imageUrls.map((url, i) => {
        return (
          <div>
            <img
className={ i === isSelected && "imgSelected"}
              onClick={ ()=>handleAdd(i)}

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
