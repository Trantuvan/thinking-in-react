import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    const rows = [];
    let lastCategory = null;
    const { products } = this.props;

    products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table className="w-full bg-slate-50 rounded">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
};
