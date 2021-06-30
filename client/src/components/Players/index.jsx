import Table from '../../containers/Table';

export default function Players() {
  const columns = [
    { field: 'player_name', headerName: 'Name', width: 185 },
    { field: 'country', headerName: 'Country', width: 185 },
    { field: 'position', headerName: 'Position', width: 185 }
  ];
  const players = [
    {
        "id": "1",
        "player_name": "Aaron Ramsdale",
        "number_in_team": "13",
        "age": "23",
        "position": "Goalkeeper",
        "country": "England",
        "minutes_played_overall": "0",
        "appearances_overall": "0",
        "goals_overall": "0",
        "assists_overall": "0",
        "yellow_cards_overall": "0",
        "red_cards_overall": "0"
    },
    {
        "id": "2",
        "player_name": "Aaron Ramsey",
        "number_in_team": "10",
        "age": "30",
        "position": "Midfielder",
        "country": "Wales",
        "minutes_played_overall": "355",
        "appearances_overall": "4",
        "goals_overall": "1",
        "assists_overall": "0",
        "yellow_cards_overall": "0",
        "red_cards_overall": "0"
    }
]

  return (
    <Table rows={players} colums={columns} pageSize={10}></Table>
  )
}