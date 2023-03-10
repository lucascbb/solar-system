import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card" className="planetaPai">
        <p data-testid="planet-name" className="nomePlaneta">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className="imgPlaneta" />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
