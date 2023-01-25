import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="planetas-completo">
        <Title headline="Planetas" />
        <div data-testid="solar-system" className="planetas">
          {planets.map((ele) => (<PlanetCard
            key={ ele.name }
            planetName={ ele.name }
            planetImage={ ele.image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
