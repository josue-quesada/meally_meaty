import { db, username} from "../Firebase";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { useState, useEffect } from "react";

export function CommentList({componentId}) {
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([]);
    const commentsCollectionsRef = collection(db, "comments");

    useEffect(() => {
        const getComments = async () => {
          //obtiene toda la info de la base de datos en un json
          const data = await getDocs(commentsCollectionsRef);
          //filtra solo la data necesaria (los docs y el id)
          setComments(data.docs.map((doc) => ({ ...doc.data(), id : doc.id})));
        };
        getComments();
    }, []);

    const handleNewCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const createComment = async () => {
        await addDoc(commentsCollectionsRef, {meal_id: componentId, username: username, comentario: newComment});
        setComments([...comments, {meal_id: componentId, username: username, comentario: newComment}])
        setNewComment("");
    };


  return (
    <div>
      <h2>Add Comment:</h2>
      <textarea value={newComment} onChange={handleNewCommentChange} />
      <button className="btn_rate" onClick={createComment}>Submit</button>
      <h2>Comments:</h2>
      {(comments.filter((comment) => comment.meal_id == componentId)).map((comment) => (
        <div key={comment.id}>
          <h3> {comment.username} </h3>
          <p>{comment.comentario}</p>
        </div>
      ))}
    </div>
  )
}
export default CommentList;