import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form className="flex flex-col gap-2">
        <input type="search" placeholder="Search..." className="appearance-none rounded border-2 " />
        <p>
          <input type="checkbox" className="text-indigo-500" />
          Only show products in stock
        </p>
      </form>
    );
  }
}
