import './App.css';
import Details from './containers/details'
import Players from './components/Players'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path='/details' render={(params)=><div className='w-full py-8'><Details {...params}/>
          </div>}>
        </Route>
        <Route path='/'>
          <Players />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
