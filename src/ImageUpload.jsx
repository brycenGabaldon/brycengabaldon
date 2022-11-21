/* import "./Icon.scss";
import {useState, useEffect } from "react";
import { storage } from './firebase';
import { ref, getDownloadURL, uploadBytesResumable, listAll} from "firebase/storage";
import { v4 } from "uuid";

function ImageUpload() {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);




  const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
        });
      }
    );
  }
  useEffect(() => {
    const storageRef = ref(storage, `files/${file.name}`);
    listAll(storageRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImgUrl((prev) => [...prev, url]);
        });
      });
    });
  },[listAll]);


  return (
    <div className="UploadImage">
      <form onSubmit={handleSubmit} className='form'>
        <input type='file' />
        <button className="UploadButton"type='submit'>Upload</button>
      </form>
      {
        !imgUrl &&
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      }
      {
imgUrl && imgUrl.map((url) => {
  return <img src={url} alt="altname" height={200}/>;
})



      }
    </div>
  );
}
export default ImageUpload; */