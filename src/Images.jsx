/* import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage, db } from "./firebase";
import { v4 } from "uuid";
import {collection, addDoc, Timestamp} from 'firebase/firestore'


function Images() {
  const [imageUpload, setImageUpload] = useState(null);


  const [imageUrls, setImageUrls] = useState([]);

  const [isSelected, setIsSelected] = useState([false]);



  //sets selected property
  const HandleClick = (index) => {
    console.log("selected prop", index);
    console.log("selected state", isSelected);
    setIsSelected((prevState) => {
      // copy state and update index

      const select = { ...prevState.select };
      select[index] = ([index], [index]);

      return { select };
    });
  };

const handletheclick = (i) => {
  const obj = isSelected[i]
 setIsSelected(arr => [...arr, 1])
 console.log(obj)
return obj}





  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [prev, url]);
      });
    });
  };
 const [title, setTitle] = useState('title')
  const [description, setDescription] = useState('')


  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
          setDescription((prev) => [...prev, url]);
        });
      });
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
const handleFirestore = (index) => {
  listAll(imagesListRef).then((response) => {
    response.items.slice(index).map((item) => {
      getDownloadURL(item).then((url) => { setDescription((prev) => [...prev, imagesListRef]);
        setImageUrls((prev) => [...prev, url]);
        handleSubmit();
   ;})})})}
 




 
  

  /* function to add new task to firestore */
/*   const handleSubmit = async (e, i) => {
      await addDoc(collection(db, 'tasks'), {
 title: title,
 description: description[i]

      });
    console.log("button works")}
    
    
    console.log(isSelected) */  // false
 // array of false

/* 
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
        onClick={()=>handleFirestore()}
      >
        {" "}
        Save to Firebase
      </button>

      {imageUrls.map((url, i) => {
        return (
          <div>
            <img
              style={
              isSelected.obj
                  &&  {backgroundSize: "cover", width: "100%"} 
            
              }
              onClick={ ()=>handletheclick(i)}
              selected={isSelected}
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
 */