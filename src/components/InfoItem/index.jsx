import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Button,
} from 'react-bootstrap';

import './infoItem.scss';

const InfoItem = ({ info }) => {
  const {
    title,
    price,
    picture,
    condition,
    sold_quantity: quantity,
    description,
  } = info;

  const condicion = condition === 'new' ? 'Nuevo' : 'Usado';

  return (
    <>
      <Row className="info">
        <Col className="info-img" lg={8}>
          <img src={picture} alt="img-product" />
        </Col>
        <Col className="info-details" lg={4}>
          <p>{`${condicion} - ${quantity} vendidos`}</p>
          <h4>{title}</h4>
          <h3>{`$ ${Number(price.amount).toLocaleString()}`}</h3>
          <Button style={{ width: '100%' }}>
            Comprar
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="info-title">Descripcion del producto</h2>
          <p className="info-description">{description}</p>
        </Col>
      </Row>
    </>
  );
};

InfoItem.propTypes = {
  info: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default InfoItem;
