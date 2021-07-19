import React, {Component} from 'react';
import OrderService from '../service/order.service';
import OneOrder from './OneOrder';


class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
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

  render() {

    return (

        <div className="orderlist">{this.displayOrders()}</div>

    );
  }
}

export default Orders;
