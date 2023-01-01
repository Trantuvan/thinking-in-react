import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    const { filterText, inStockOnly, handleChange } = this.props;
    return (
      <form className="flex flex-col gap-2">
        <input
          type="search"
          name="filterText"
          value={filterText}
          onChange={handleChange}
          placeholder="Search..."
          className="appearance-none rounded border-2 "
        />
        <p>
          <input
            type="checkbox"
            name="inStockOnly"
            onChange={handleChange}
            checked={inStockOnly}
            className="text-indigo-500"
          />
          Only show products in stock
        </p>
      </form>
    );
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};
