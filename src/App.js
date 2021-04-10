import logo from './download.jpeg';
import './App.css';
import MainButtons from './Components/MainButtons'
import SelectMusic from './Components/SelectMusic'
import MusicOnly from './Components/MusicOnly'
import PomodoroMusic from './Components/PomodoroMusic'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [showButton, setShowButton] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Router>
          <li>
            <Link to="/Main">Main Buttons</Link>
          </li>

          <Switch>
            <Route path="/Main">
              <MainButtons/>
            </Route>

            <Route path="/SelectMusic">
              <SelectMusic/>
            </Route>

            <Route path="/PomodoroMusic">
              <PomodoroMusic/>
            </Route>

            <Route path="/Music">
              <MusicOnly/>
            </Route>
          </Switch>
        </Router>
          
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React... trial editttt
        </a>
      </header>
    </div>
  );
}

export default App;
