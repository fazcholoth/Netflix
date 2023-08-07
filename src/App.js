import React from "react";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import {action,originals} from "./urls"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title='Netflix Originals'   url={originals}/>
      <Row title='Action' isSmall url={action} />
    </div>
  );
}

export default App;



