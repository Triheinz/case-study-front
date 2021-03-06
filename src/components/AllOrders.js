import React from 'react';
import OrderService from '../service/order.service';
import OrderDetail from './OrderDetail';

class AllOrders extends React.Component {
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

    const numberToSearch = Number(this.state.fields.search);

    const filteredOrders = this.state.orders.filter(
      (order) => {

        return order.number === numberToSearch ||
        order.country
          .toLowerCase()
          .includes(this.state.fields.search.toLowerCase()) ||
        order.orderState
          .toLowerCase()
          .includes(this.state.fields.search.toLowerCase())
      });

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
    return (
      <div className="OrderContainer">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Client Name</th>
              <th scope="col">Client Last Name</th>
              <th scope="col">Client Address</th>
              <th scope="col">Products</th>
              <th scope="col">Order State</th>
              <th scope="col">Country</th>
            </tr>
          </thead>

          {orders.map((order) => (
            <OrderDetail key={order._id} {...order} />
          ))}
        </table>
      </div>
    );
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
        <a href="/orders/createOrder" className="create-order">
          Create New Order
        </a>
        <button onClick={() => this.resetSearch()}>Reset Search</button>
        <div className="orderlist">{this.displayOrders()}</div>
      </div>
    );
  }
}

export default AllOrders;
