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
      <h1> information</h1>
      {/* <p>Name: {props.photo.name}</p>
      <p>Url: {props.photo.url}</p>
      <p>Width: {props.photo.width}</p>
      <p>Height: {props.photo.height}</p> */}
    </>
  );
}