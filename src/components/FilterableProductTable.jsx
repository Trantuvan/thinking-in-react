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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { products } = this.props;
    const { filterText, inStockOnly } = this.state;

    return (
      <div className="bg-white p-8 shadow-sm rounded">
        <SearchBar filterText={filterText} inStockOnly={inStockOnly} handleChange={this.handleChange} />
        <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
      </div>
    );
  }
}

FilterProductTable.propTypes = {
  products: PropTypes.array.isRequired,
};
