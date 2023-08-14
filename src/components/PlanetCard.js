import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class PlanetCard extends Component {
  state = { };

  render() {
    const {
      planetName,
      planetImage,
    } = this.props;
    return (
      <div data-testid="planet-card" className="PlanetCard">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className="planetImg" />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
