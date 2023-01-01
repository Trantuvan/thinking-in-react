import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    const { filterText, inStockOnly, products } = this.props;
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
      //  *string.indexOf('') | string.indexOf() defaults to 0
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      if (inStockOnly && !product.stocked) {
        return;
      }

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
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
