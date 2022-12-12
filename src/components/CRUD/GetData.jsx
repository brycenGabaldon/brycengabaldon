import { collection, where, getDocs, orderBy, query } from "firebase/firestore";
import { db} from "../../firebase";
import { useState } from "react";



export default async function GetData (collect, property, detail, prop1,prop2,prop3,prop4){
    const [result1a, setResult1a] = useState("")
    const [result2a, setResult2a] = useState("")
    const [result3a, setResult3a] = useState("")
    const [result4a, setResult4a] = useState("")


    const settingsRef = collection(db, collect);
    const q = query(settingsRef, where(property, "==", detail), orderBy("created", "asc"));
      const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setResult1a(doc.data().prop1);
      setResult2a(doc.data().prop1);
      setResult3a(doc.data().prop2);
      setResult4a(doc.data().prop3);
    });
  
    return (
{result1a, result2a, result3a, result4a}
    );
};
