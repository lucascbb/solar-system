import React from 'react';
import PropTypes from 'prop-types';
import { BsCalendarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { IoIosRocket } from 'react-icons/io';

class MissioCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missionCard">
        <div className="paiNome">
          <p data-testid="mission-name" className="nome">{ name }</p>
        </div>
        <div className="mission-info">
          <p data-testid="mission-year" className="mission-text">
            <BsCalendarFill className="mission-icon" />
            { year }
          </p>
          <p data-testid="mission-country" className="mission-text">
            <IoIosRocket className="mission-icon" />
            { country }
          </p>
          <p data-testid="mission-destination" className="mission-text">
            <MdLocationPin className="mission-icon" />
            { destination }
          </p>
        </div>
      </div>
    );
  }
}

MissioCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissioCard;
