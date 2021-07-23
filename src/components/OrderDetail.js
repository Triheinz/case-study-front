import React from 'react';
import OrderService from '../service/order.service';
import OneOrder from './OneOrder';

class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {},
    };
    this.orderService = new OrderService();
  }

  getDetails() {
    const orderId = this.props.id;

    this.orderService
      .getOrder(orderId)
      .then((response) => {
        
        this.setState({ order: response.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {

    this.getDetails();
  }

  render() {
    return <OneOrder order={this.state.order} />;
  }
}

export default OrderDetails;
