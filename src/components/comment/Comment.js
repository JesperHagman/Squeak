import axios from "axios";
import { Context } from "../../context/context";
import { useContext, useState } from "react";


const Comment = () => {
    const { user } = useContext(Context);
    const [desc, setDesc] = useState("");
    
    const createComment = async (e) => {
        e.preventDefault();
        const commentSqueak = {
          username: user.user.username,
          desc
        };
    
        try {
          await axios.post("http://localhost:5002/api/comments/", commentSqueak);
          window.location.reload();
        } catch (err) {}
      };

    return ( 
        <div className="comment">
        <div className="insert-comment">

        </div>
        <div className="post-bottom">
          {" "}
          <p className="createdAt">{new Date().toDateString()}</p>
          <div className="comment-toggle">
          <form className="input-container" onSubmit={createComment}>
              <textarea
                className="squeak-text"
                type="text"
                placeholder="What's on your mind?"
                onChange={(e) => setDesc(e.target.value)}
              />
              <button className="submit-squeak" type="submit">
                Squeak
              </button>
            </form>
          </div>
         
        </div>
      </div>
     );
}
 
export default Comment;