import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "./UserProfile.css";
import axios from "axios";

export function UserProfile() {
  // const { userId } = useParams();
  const [user, setUser] = useState({});

  const handleShowUser = () => {
    axios.get("http://localhost:3000/users/1").then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  };

  useEffect(handleShowUser, {});

  return (
    <div>
      <h1>User Profile Info</h1>
      <h2>{user.name}</h2>
    </div>
  );
}
