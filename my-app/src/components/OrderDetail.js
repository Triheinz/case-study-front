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
    const orderId = this.props.match.params.id;
    this.orderService
      .getOneBeer(orderId)
      .then((response) => {
        this.setState({ order: response.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getDetails();
  }

  render() {
    const { number, date, clientName, products, orderState, country } =
      this.state.order;

    return (
      <div>
        <OneOrder />
        </div>
      
    );
  }
}

export default OrderDetails;
