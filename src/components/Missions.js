import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissioCard from './MissionCard';

class Missions extends React.Component {
  render() {

    return (
      <>
        <div data-testid="missions" />
        <Title headline="Missões" />
        <div className="pai-missionCard">
          {missions.map((ele) => (<MissioCard
            key={ ele.name }
            name={ ele.name }
            year={ ele.year }
            country={ ele.country }
            destination={ ele.destination }
          />))}
        </div>
      </>
    );
  }
}
export default Missions;
