import React from 'react';
import PropTypes from 'prop-types';

import './breadcum.scss';

const Breadcum = ({ text }) => (
  <p className="items-breadcum">{text.join(' > ')}</p>
);

Breadcum.propTypes = {
  text: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Breadcum;
