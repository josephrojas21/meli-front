import React from 'react';
import PropTypes from 'prop-types';

import {
  Row, Col,
} from 'react-bootstrap';

import Navbar from '../../components/Navbar';
import './layout.scss';

const Layout = ({ children }) => {
  console.log('hola');

  return (
    <div className="layout-container">
      <Navbar />
      <Row className="layout-row">
        <Col lg={{ span: 11, offset: 1 }}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,

};

export default Layout;
