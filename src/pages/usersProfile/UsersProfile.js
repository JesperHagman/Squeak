import React from "react";

function UsersProfile(post) {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let username = params.username;

  console.log(username);
  return (
    <div className="post">
      <div className="post-top">
        <p className="post-p">{post.desc}</p>
      </div>
      <div className="post-bottom">
        {" "}
        <p className="createdAt">{new Date(post.createdAt).toDateString()}</p>
      </div>
    </div>
  );
}

export default UsersProfile;
