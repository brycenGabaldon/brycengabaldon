
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function Images() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then(url => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });// eslint-disable-next-line react-hooks/exhaustive-deps
  },[] );

  return (
    <div className="ImagesApp">
      <input style={{backgroundColor: "black", color: "white", height:"2rem"}}
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button style={{backgroundColor: "blue", color: "white", height:"2rem", margin: ".5rem"}} onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url) => {
        return <img src={url} alt="altname" />;
      })}
    </div>
  );
}

export default Images;