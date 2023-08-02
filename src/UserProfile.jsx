import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserProfile.css";
import axios from "axios";

export function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const hikes = [
    {
      id: 1,
      name: "Indian Road Woods",
      length: "4.0",
      description:
        "This is a nice option for those in the city who are seeking some singletrack close by.  The trail basically follows the river with a parallel trail on the higher ground above the flood plain for at least part of the way.  There is enough elevation change, twists and roots to keep the trail interesting and there are at least two spots with some jumps and woop dee doos. One of these is in the area north of central.    There are a few spots that you have to dismount like a railroad crossing and a few street crossings.  Nonetheless, when this trail is dry it's a nice trail to get a quick singletrack fix close to the city.",
      city: "Chicago",
      region: "Illinois",
      country: "United States",
      difficulty: "intermediate",
      thumbnail: "https://images.singletracks.com/blog/wp-content/uploads/2013/05/photo26-0-orig.jpg",
      created_at: "2023-07-10T17:12:54.863Z",
      updated_at: "2023-07-10T17:12:54.863Z",
      latitude: "41.97694",
      longitude: "-87.73806",
    },
    {
      id: 2,
      name: "Portage woods",
      length: "4.0",
      description: "Mostly paved with a small single track loop.",
      city: "Forest View",
      region: "Illinois",
      country: "United States",
      difficulty: "unknown",
      thumbnail: "null",
      created_at: "2023-07-10T17:12:54.869Z",
      updated_at: "2023-07-10T17:12:54.869Z",
      latitude: "41.80872",
      longitude: "-87.80557",
    },
    {
      id: 3,
      name: "Forest Glen Woods",
      length: "2",
      description:
        'This trail is a tad unkempt but since the North Branch Trail was just connected, completed and opened, hopefully the increase in bike traffic will spill over into this potentially awesome singletrack area. There are several places to enter, the most bein a trailhead marked by two cement markers just to the left of the small brick maintenance building at the NE part of the "Picnic Grove #1". Second, if you take the paved trail around the corner toward the Forest Glen Ave. Bridge, you can jump on right there and ride along the river, up over the RR tracks all the way to the Ted Lechowicz Woods. The third enntrance is down the paved trail until you come to the big bridge over the RR and theres a trail entrance just to your right leading to a small "bowl" if that\'s what you could even call it. Definitely needs some work but for being literally the ONLY singletrack I could find in the area, it\'ll do!',
      city: "Chicago",
      region: "Illinois",
      country: "United States",
      difficulty: "intermediate",
      thumbnail: "https://images.singletracks.com/blog/wp-content/uploads/2013/12/20131207_150326-0-orig.jpg",
      created_at: "2023-07-10T17:12:54.871Z",
      updated_at: "2023-07-10T17:12:54.871Z",
      latitude: "41.98158",
      longitude: "-87.75654",
    },
    {
      id: 4,
      name: "Salt Creek Singletrack",
      length: "12.0",
      description:
        "Best singletrack is generally on the South/West side of the creek until Mannheim Road, then take the paved trail South and West until you reach the Bemis Woods trail network, or continue on into DuPage County and check out Fullersburg Woods.  See www.1track.org (yo, this links to a porn site) for maps and more details...",
      city: "Brookfield",
      region: "Illinois",
      country: "United States",
      difficulty: "beginner",
      thumbnail: "https://images.singletracks.com/blog/wp-content/uploads/2015/09/mobile-1443320896-orig.jpg",
      created_at: "2023-07-10T17:12:54.873Z",
      updated_at: "2023-07-10T17:12:54.873Z",
      latitude: "41.83533",
      longitude: "-87.83966",
    },
    {
      id: 5,
      name: "Caldwell Woods",
      length: "0.0",
      description:
        "Awesome hiking and biking trails, as well as fire pits, picnic areas, and places to sled in the winter.",
      city: "Chicago",
      region: "Illinois",
      country: "United States",
      difficulty: "unknown",
      thumbnail: "https://images.singletracks.com/blog/wp-content/uploads/2019/05/IMG_41491-orig.jpg",
      created_at: "2023-07-10T17:12:54.876Z",
      updated_at: "2023-07-10T17:12:54.876Z",
      latitude: "41.99789",
      longitude: "-87.78658",
    },
    {
      id: 6,
      name: "Thatcher Woods",
      length: "5.0",
      description:
        "The trail is singletrack for the majority of the distance.  The main body runs along the Des Plaines River and has a fair assortment of technical aspects including fallen trees, small hills, creepy underpass and tight corning in tall grass.  I would stick to the daylight hours for this course.",
      city: "River Forest",
      region: "Illinois",
      country: "United States",
      difficulty: "beginner",
      thumbnail: "https://images.singletracks.com/blog/wp-content/uploads/2004/10/1128225184-orig.jpg",
      created_at: "2023-07-10T17:12:54.878Z",
      updated_at: "2023-07-10T17:12:54.878Z",
      latitude: "41.89421",
      longitude: "-87.82739",
    },
  ];

  const handleShowUser = () => {
    axios.get(`http://localhost:3000/users/${userId}`).then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  };

  useEffect(handleShowUser, [userId]);

  return (
    <>
      <h1>User Profile Info</h1>
      <h2>{user.name}</h2>
      <section className="hikes--favorites">
        <h2>My Favorite Hikes</h2>
        <div className="hikes--index">
          {hikes.map((hike) => (
            <div key={hike.id} className="hikes">
              <img src={hike.thumbnail} className="hike--image" />
              <h3 className="hike--name">{hike.name}</h3>
              <p className="hike--description">{hike.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
