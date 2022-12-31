import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductRow extends Component {
  render() {
    const { product } = this.props;
    const name = product.stocked ? product.name : <span className="text-red-400">{product.name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td className="text-center">{product.price}</td>
      </tr>
    );
  }
}

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
};
