import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterProductTable extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className="bg-white p-8 shadow-sm rounded">
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
  }
}

FilterProductTable.propTypes = {
  products: PropTypes.array.isRequired,
};
