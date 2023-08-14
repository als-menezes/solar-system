import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  state = { };

  render() {
    const {
      name,
      year,
      country,
      destination,
    } = this.props;
    return (
      <div data-testid="mission-card" className="MissionCard">
        <p data-testid="mission-name" className="missionTitle">{name}</p>
        <p data-testid="mission-year" className="missionTexts">{`Ano: ${year}`}</p>
        <p data-testid="mission-country" className="missionTexts">{`País: ${country}`}</p>
        <p data-testid="mission-destination" className="missionTexts">
          {
            `Destino: ${destination}`
          }

        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
