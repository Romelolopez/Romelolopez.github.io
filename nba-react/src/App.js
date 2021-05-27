import Nba from "./Nba"
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Nba />
      {/* <Switch>
        <Route path="/Front" component={Front} />
        <Route path="/Nba" component={Nba} />
      </Switch> */}
    </div>
    </Router>
  );
}

export default App;
