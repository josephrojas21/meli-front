import React from 'react';
import PropTypes from 'prop-types';

import { InputGroup, FormControl } from 'react-bootstrap';

import Logo from '../../assets/img/Logo_ML.png';
import './layout.scss';

const Layout = ({ children }) => {
  console.log('hola');

  return (
    <div>
      <div className="layout-navbar">
        <img src={Logo} alt="mainLogo" />
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,

};

export default Layout;
