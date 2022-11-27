
import { useState, useEffect } from "react";
import "./users.scss";
import { db } from "../../firebase";
import { collection, getDocs, addDoc, doc, deleteDoc} from "firebase/firestore";

const Users = () => {
  const [comments, setComments] = useState([]);
  const usersCollectionRef = collection(db, "files");
  const [newTitle, setNewTitle] = useState("");
  const [newContents, setNewContents] = useState("");

  const createComment = async () => {
    await addDoc(usersCollectionRef, { title: newTitle, contents: newContents });
  };

const deleteComment = async (id) => {
    const commentDoc = doc(db, "files", id);
    await deleteDoc(commentDoc);
};

  const updateComments = async (id, age) => {
    const commentDoc = doc(db, "files", id);


    console.log("userdoc"+commentDoc)
  };
  useEffect(() => {
    const getComments = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getComments();
  }, []);

  return (
    <div className="Users">
      <input
        placeholder="Title"
        onChange={(event) => {
          setNewTitle(event.target.value);
        }}
      />
      <input
     
        placeholder="Contents"
        onChange={(event) => {
          setNewContents(event.target.value);
        }}
      />
      <button onClick={createComment}>create user</button>
      {comments.map((comment) => {
        return (
          <div className="Comment">
            {" "}
            {comment.title} <br/> {comment.contents}{" "}
            <button
              onClick={() => {
                updateComments(comment.id, comment.age);
              }}
            >
        
            </button>
            <button className="commentDelete"
              onClick={() => {
                deleteComment(comment.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
