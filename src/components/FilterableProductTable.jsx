import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
  }

  render() {
    const { products } = this.props;
    const { filterText, inStockOnly } = this.state;

    return (
      <div className="bg-white p-8 shadow-sm rounded">
        <SearchBar filterText={filterText} inStockOnly={inStockOnly} />
        <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
      </div>
    );
  }
}

FilterProductTable.propTypes = {
  products: PropTypes.array.isRequired,
};
