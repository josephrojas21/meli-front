import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  InputGroup, Form, FormControl, Row, Col, Button,
} from 'react-bootstrap';

import { fetchSearchItems } from '../../redux/actions/search.reducer';

import Logo from '../../assets/img/Logo_ML.png';
import Search from '../../assets/img/ic_Search.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    const { status, resp } = await dispatch(fetchSearchItems(text));
    if (status === 'error') alert('There was an error fetching the items', resp);
    console.log('query', text);
  };

  return (
    <div className="layout-navbar">
      <Row className="layout-row">
        <Col lg={{ span: 1, offset: 1 }}>
          <img src={Logo} alt="mainLogo" />
        </Col>
        <Col lg="9">
          <Form onSubmit={handleSearch}>
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
};

export default Navbar;
