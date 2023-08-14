import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  state = { };

  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missionCards">
          {missions.map((mission) => (<MissionCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
