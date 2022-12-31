import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCategoryRow extends Component {
  render() {
    const { category } = this.props;

    return (
      <tr>
        <th colSpan="2" className="text-left bg-indigo-50">
          {category}
        </th>
      </tr>
    );
  }
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired,
};
