import React, { useEffect, useState} from "react";
import axios from "axios";

function UsersProfile(post) {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let user = params.username;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5001/api/posts", user);
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, []);

  console.log(user);
  return (
    <div className="post">
      <div className="post-top">
        <p className="post-p">{posts.desc}</p>
      </div>
      <div className="post-bottom">
        {" "}
        <p className="createdAt">{new Date(post.createdAt).toDateString()}</p>
      </div>
    </div>
  );
}

export default UsersProfile;
