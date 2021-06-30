import './App.css';
import Details from './containers/details'
import Players from './components/Players'

const MOCK_PLAYER = {
  name: 'John Doe',
  age: '23',
  country: 'Belgium',
  position: 'Goalkeeper'
}

function App() {
  return (
    <div>
      <Details player={MOCK_PLAYER} />
      <Players />
    </div>
  );
}

export default App;
