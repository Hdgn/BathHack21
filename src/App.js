// import logo from './download.jpeg';
import './App.css';
import MainButtons from './Components/MainButtons'
import SelectMusic from './Components/SelectMusic'
// import MusicOnly from './Components/MusicOnly'
import MusicMood from './Components/MusicMood'
import Menu from './Components/Menu'
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

      <Router >
        <Menu />

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
            <MusicMood/>
          </Route>
        </Switch>
      </Router>
          
    </div>
  );
}

export default App;
