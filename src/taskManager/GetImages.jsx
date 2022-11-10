import {
    getStorage,
    ref,
    getDownloadURL
  } from 'firebase/storage';
  
  const storage = getStorage();
  
  export async function getImage(location) {
    const ImageURL = await getDownloadURL(ref(storage, location));
    return await ImageURL;
  }