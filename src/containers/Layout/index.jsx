import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Row, Col,
} from 'react-bootstrap';

import Navbar from '../../components/Navbar';
import './layout.scss';

const Layout = ({ children }) => {
  const history = useHistory();
  const [text, setText] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    history.push(`/items?q=${text}`);
  };

  return (
    <div className="layout-container">
      <Navbar
        search={handleSearch}
        text={text}
        setText={setText}
      />
      <Row className="layout-row">
        <Col lg={{ span: 10, offset: 1 }}>
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
