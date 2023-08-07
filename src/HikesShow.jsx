export function HikesShow(props) {
  return (
    <div>
<h1>Hike information</h1>
<h1>{props.hike.name}</h1>
<h2>Details</h2>
<p> Location: {props.hike.city}, {props.hike.region}, {props.hike.country}</p>
<p> Difficulty: {props.hike.difficulty}</p>
<hr></hr>
<h2>Description: </h2>
<p>{props.hike.description}</p>
    </div>
  );
}