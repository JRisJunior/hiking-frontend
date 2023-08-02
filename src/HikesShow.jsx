import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export function HikesShow() {

  const [hike, setHike] = useState([]);

  const handleShowHike = () => {
    console.log("handleShowHike");
    axios.get(`http://localhost:3000/hikes/${id}.json`).then((response) => {
      console.log(response.data);
      setHike(response.data);
    });
  };

  useEffect(handleShowHike, []);

  return (
    <>
      <Link to="/hikes">
        <button>Back to Hikes</button>
      </Link>
      <section className="hike--details">
      <h1>{hike.name}</h1>
      <h2>Details</h2>
      <p> Location: {hike.city}, {hike.region}, {hike.country}</p>
      <p> Difficulty: {hike.difficulty}</p>
      </section>
      <hr></hr>
      <section className="hike--description">
      <h2>Description: </h2>
      <p>{hike.description}</p>
      </section>
      <Link to="/hikes">
        <button>Back to Hikes</button>
      </Link>
    </>
  );
}