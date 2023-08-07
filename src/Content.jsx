import axios from "axios";
import { useState, useEffect } from "react";
import { HikesIndex } from "./HikesIndex";
import { HikesShow } from "./HikesShow";
import { Modal } from "./Modal";

export function Content() {

  // const hikes = [
  //   {id: 1, name: "Indian Road Woods", length: "4.0", description: "This is a nice option for those in the city who are seeking some singletrack close by.  The trail basically follows the river with a parallel trail on the higher ground above the flood plain for at least part of the way.  There is enough elevation change, twists and roots to keep the trail interesting and there are at least two spots with some jumps and woop dee doos. One of these is in the area north of central.    There are a few spots that you have to dismount like a railroad crossing and a few street crossings.  Nonetheless, when this trail is dry it's a nice trail to get a quick singletrack fix close to the city.", city: "Chicago", region: "Illinois", country: "United States", difficulty: "intermediate", thumbnail: "https://images.singletracks.com/blog/wp-content/uploads/2013/05/photo26-0-orig.jpg", latitude: "41.97694", longitude: "-87.73806"},
  //   {id: 2, name: "Portage woods", length: "4.0", description: "Mostly paved with a small single track loop.", city: "Forest View", region: "Illinois", country: "United States", difficulty: "unknown", thumbnail: "null", latitude: "41.80872", longitude: "-87.80557"}
  // ];

  const [hikes, setHikes] = useState([]);
  const [isHikesShowVisible, setIsHikesShowVisible] = useState(false);
  const [currentHike, setCurrentHike] = useState({});

  const handleIndexHikes = () => {
    console.log("handleIndexHikes");
    axios.get("http://localhost:3000/hikes.json").then((response) => {
      console.log(response.data);
      setHikes(response.data);
    });
  };

   const handleShowHike = (hike) => {
     console.log("handleShowHike", hike);
     setIsHikesShowVisible(true);
     setCurrentHike(hike);
   };
   const handleClose = () => {
     console.log("handleClose");
     setIsHikesShowVisible(false);
   }; useEffect(handleIndexHikes, []);

  return (
    <div>
      <HikesIndex hikes={hikes} onShowHike={handleShowHike}/>
      <Modal show={isHikesShowVisible} onClose={handleClose}>
        <h1>Test</h1>
      </Modal>
    </div>
  )
}