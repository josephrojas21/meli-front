import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col,
} from 'react-bootstrap';

import IconShipping from '../../assets/img/ic_shipping.png';
import './products.scss';

const Products = ({ product, openProduct }) => {
  const {
    id,
    picture,
    title,
    price,
    city,
    free_shipping: isShipping,
  } = product;

  return (
    <>
      <Row className="products-item" onClick={() => openProduct(id)}>
        <Col className="products-item-img" lg={2}>
          <img id="item-img" src={picture} alt="product" />
        </Col>
        <Col className="products-item-info" lg={4}>
          <p id="item-price">
            {`$ ${Number(price.amount).toLocaleString()}`}
            {isShipping && <img src={IconShipping} alt="icon-shipping" />}
          </p>
          <p id="item-title">
            {title}
          </p>
        </Col>
        <Col className="products-item-city" lg={{ span: 2, offset: 3 }}>
          <span>{city}</span>
        </Col>
      </Row>
      <hr className="products-divider" />
    </>
  );
};

Products.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  openProduct: PropTypes.func.isRequired,
};

export default Products;
