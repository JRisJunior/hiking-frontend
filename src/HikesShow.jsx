import axios from "axios";
import { useState, useEffect } from "react";

export function HikesShow() {

  const [hike, setHike] = useState([]);

  const handleShowHike = () => {
    console.log("handleShowHike");
    axios.get("http://localhost:3000/hikes/1.json").then((response) => {
      console.log(response.data);
      setHike(response.data);
    });
  };

  useEffect(handleShowHike, []);

  return (
    <>
      <h1>{hike.name}</h1>
      <h2>Details</h2>
      <p> Location: {hike.city}, {hike.region}, {hike.country}</p>
      <p> Difficulty: {hike.difficulty}</p>
      <hr></hr>
      <h2>Description: </h2>
      <p>{hike.description}</p>
    </>
  );
}