import React, {Component} from 'react';
import OrderService from '../service/order.service';
import OneOrder from './OneOrder';



class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      fields: {
        search: '',
      },
    };
    this.orderService = new OrderService();
  }

  refreshState() {
    this.orderService
      .getAllOrders()
      .then((orders) => {
        console.log(orders);
        this.setState({ orders: orders.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
  }
  resetSearch() {
    this.refreshState();
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.fields);
    const numberToSearch = Number(this.state.fields.search);
    console.log(numberToSearch);
    const filteredOrders = this.state.orders.filter(
      (order) =>
        order.number === numberToSearch ||
        order.country
          .toLowerCase()
          .includes(this.state.fields.search.toLowerCase()) ||
        order.orderState
          .toLowerCase()
          .includes(this.state.fields.search.toLowerCase())
    );
    console.log(filteredOrders);
    this.setState({
      orders: filteredOrders,
      fields: {
        search: '',
      },
    });
  }
  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
    });
  }

  displayOrders() {
    const { orders } = this.state;
    console.log(orders);
    return orders.map((order) => {
      return <OneOrder key={order._id} {...order} />;
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.fields.search}
            onChange={(e) => this.handleChange(e)}
            name="search"
          />
          <button type="submit" className="btnBuscar">
            Buscar
          </button>
        </form>
        <button onClick={()=>this.resetSearch()}>Reset Search</button>
        <div className="orderlist">{this.displayOrders()}</div>
      </div>
    );
  }
}

export default Orders;
