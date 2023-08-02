export function HikesIndex(props) {
  return (
    <div>
      <h1>All hikes</h1>
      {props.hikes.map((hike) => (
        <div key={hike.id}>
          <h2>{hike.name}</h2>
          <p>ID: {hike.id}</p>
          <p>Length: {hike.length}</p>
          <p>Location: {hike.city}, {hike.region}</p>
        </div>
      ))}
    </div>
  );
}