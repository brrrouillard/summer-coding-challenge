import {
  Link
} from 'react-router-dom';

function Details(props) {
  const { player } = props.location
  if (!player) {
    return null
  }
  console.log({ player });
  return (
    <div className="bg-gray-700 text-white w-9/12 mx-auto p-8 rounded-md text-xl">
      <Link to="/">
        <button className="bg-gray-300 rounded-md text-md px-2 py-1 ml-0">
          Back
        </button>
      </Link>
      <div className="flex flex-col items-center justify-content">
        <h2 className="text-4xl font-bold">
          {player.player_name} ({player.number_in_team})
        </h2>
        <h3 className="text-3xl font-light">
          {player.position} from {player.country}
        </h3>
        <p className="pb-2">{player.age} years old</p>
        <h3 className="text-xl underline">Statistics</h3>
        <ul className="flex flex-col w-6/12 text-center">
          <li>Minutes played : {player.minutes_played_overall}</li>
          <li>Apperances : {player.appearances_overall}</li>
          <li>Goals : {player.goals_overall}</li>
          <li>Assists : {player.assists_overall}</li>
          <li>Yellow cards : {player.yellow_cards_overall}</li>
          <li>Red cards : {player.red_cards_overall}</li>
        </ul>
      </div>
    </div>
  );
}

export default Details;
