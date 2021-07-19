import React, { Component } from 'react';
import OrderService from '../service/order.service';
import OneOrder from './OneOrder';


class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      search: '',
    };
  }

  orderService = new OrderService();

  refreshState() {
    this.orderService
      .getAllOrders()
      .then((orders) => {
        console.log(orders);
        this.setState({ order: orders.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
  }

  displayOrders() {
    const { orders } = this.state;
    return orders.map((order) => {
      return (
        <OneOrder
          refreshState={() => this.refreshState()}
          key={order._id}
          {...order}
        />
      );
    });
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
    const search = this.state.search;
    return (
      <div>

        <input
          type="text"
          className="form-control"
          id="search-input"
          name="search"
          placeholder="Find a order..."
          onChange={(e) => this.searchOrders(e)}
        />
        <div className="orderlist">{this.displayOrders()}</div>
      </div>
    );
  }
}

export default Orders;
