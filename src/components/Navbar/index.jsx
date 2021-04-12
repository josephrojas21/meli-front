import React from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup, Form, FormControl, Row, Col, Button,
} from 'react-bootstrap';

import Logo from '../../assets/img/Logo_ML.png';
import Search from '../../assets/img/ic_Search.png';

const Navbar = ({ search, text, setText }) => (
  <div className="layout-navbar">
    <Row className="layout-row">
      <Col lg={{ span: 1, offset: 1 }}>
        <img src={Logo} alt="mainLogo" />
      </Col>
      <Col lg="9">
        <Form onSubmit={search}>
          <InputGroup>
            <FormControl
              className="layout-searchInput"
              placeholder="Nunca dejes de buscar"
              aria-label="Nunca dejes de buscar"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <InputGroup.Append>
              <Button type="submit" className="layout-searchButton"><img src={Search} alt="searchLogo" /></Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  </div>
);

Navbar.propTypes = {
  search: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,

};

export default Navbar;
