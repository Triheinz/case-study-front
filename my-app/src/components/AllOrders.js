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
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.fields);
    this.orderService
      .getOrder(this.state.search)
      .then((response) => {
        //this.setState({ this.props.order: response.data });
      })
      .catch((err) => console.error(err));
  }
  handleChange(event) {
    //1, filtrar el array de orders y buscar por value, 2. set state de este nuevo array en el array orders orginal

    const { name, value } = event.target;
    orders.filter((order) => order.client_name === value);
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
    const { fields } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={fields.search}
            onChange={(e) => this.handleChange(e)}
            name="search"
          />
          <button type="submit" className="btnBuscar">
            Buscar
          </button>
        </form>
        <div className="orderlist">{this.displayOrders()}</div>
      </div>
    );
  }
}

export default Orders;
