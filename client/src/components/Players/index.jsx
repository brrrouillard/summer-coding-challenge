import { DataGrid } from '@material-ui/data-grid';
import {
  Link
} from 'react-router-dom';
import { useState, useEffect } from 'react'

function Players() {
  const [players, setPlayers] = useState()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await fetch('http://localhost:8080/players')
    const players = await response.json()
    setPlayers(players)
  }

  const columns = [
    { field: 'player_name', headerName: 'Name', width: 385 },
    { field: 'country', headerName: 'Country', width: 385 },
    { field: 'position', headerName: 'Position', width: 385 },
    {
      field: '',
      headerName: 'Details',
      width: 195,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div>
            <Link to={{
              pathname: '/details',
              player: params.row
            }}>Open details</Link>
          </div>
        );
      },
    },
  ];

  if (!players) {
    return <div>Loading</div>
  }

  return (
    <div className='Players-box'>
    <DataGrid
      rows={players}
      columns={columns}
      pageSize={10}
    />
    </div>
  )
}

export default Players;