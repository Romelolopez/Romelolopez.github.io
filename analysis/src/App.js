import Menu from "./Menu"
import Reviews from "./Reviews"
import Avgrate from "./Avgrate"
import Sent from "./Sent"
import Visitors from "./Visitors"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Menu />
        <Reviews review="1,281"/>
        <Avgrate rate="4.6"/>
        <Sent num1="960" num2="122" num3="321"/>
        <Visitors visit="821"/>
      </div>
    </div>
  );
}

export default App;
