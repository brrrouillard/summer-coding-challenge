function Details({ player }) {
  return <div className='bg-gray-700 text-white w-9/12 mx-auto p-8'>
    <h2>{player.name}</h2>
    <h3>{player.position} from {player.country}</h3>
    <p>{player.age} years old</p>
  </div>;
}

export default Details;
