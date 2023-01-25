import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
        <footer>
          <h5 className="byfooter">Feito por Lucas Baroquello, 2022</h5>
        </footer>
      </>
    );
  }
}

export default App;
