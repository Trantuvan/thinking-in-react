import React, { Component } from 'react';
import FilterProductTable from './components/FilterableProductTable';

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

export default class App extends Component {
  render() {
    return (
      <div className="w-screen h-screen bg-slate-200 flex justify-center items-center">
        <FilterProductTable products={PRODUCTS} />
      </div>
    );
  }
}
