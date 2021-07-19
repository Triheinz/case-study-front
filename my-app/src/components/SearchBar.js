import React, { Component } from 'react';
import OrderService from '../service/order.service';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  searchOrders(event) {
    this.setState({ search: event.target.value });
    this.orderService
      .searchOrder(this.state.search)
      .then((response) => {
        this.setState({ orders: response.data });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="barraBusqueda">
        <input>
          type="text" placeholder="search" className="textField" name="search"
          value={this.state.search}
          onChange={(e) => this.searchOrders(e)}
        </input>
        <button type="button" className="btnBuscar">
          Buscar
        </button>
      </div>
    );
  }
}
export default SearchBar;
