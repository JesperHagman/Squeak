import React from "react";
import axios from "axios";
import { useState } from "react";
import UserCard from "./userCard";
import { useEffect } from "react";
import "./explore.css";

const Explore = ({ profileUser, setProfileUser }) => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5001/api/users");
    setUsers(res.data);
    console.log(res);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div className="explore">
        {users.map((p) => (
          <UserCard
            user={p}
            key={p._id}
            profileUser={profileUser}
            setProfileUser={setProfileUser}
          />
        ))}
      </div>
    </>
  );
};

export default Explore;
