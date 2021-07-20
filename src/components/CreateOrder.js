import React, { Component } from 'react';
import OrderService from '../service/order.service';
import AllOrders from './AllOrders';

class CreateOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        id: '',
        number: '',
        date: '',
        clientName: '',
        products: '',
        orderState: '',
        country: '',
      },

    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.fields);
    this.props.editOrder(this.state.fields);
    this.props.history.push('/');
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

  render() {
    const { fields } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} className="form">
        <div className="form-item">
          <label htmlFor="number" />
          <input
            placeholder="Order Number"
            type="text"
            name="number"
            value={fields.number}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="password" />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={fields.password}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="name" />
          <input
            placeholder="Your name"
            type="text"
            name="name"
            value={fields.name}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="surname" />
          <input
            placeholder="Your Surname"
            type="text"
            name="surname"
            value={fields.surname}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="phone" />
          <input
            placeholder="Phone number"
            type="number"
            name="phone"
            value={fields.phone}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="position" />
          <input
            placeholder="Company position"
            type="text"
            name="position"
            value={fields.position}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <button type="submit" className="form-btn">
          Create user
        </button>
      </form>
    );
  }
}

export default CreateOrder;
