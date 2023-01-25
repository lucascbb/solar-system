import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;

    return (
      <h2
        className={ headline === 'Planetas' ? 'tittle-planetas' : 'tittle-missoes' }
      >
        {headline}
      </h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
