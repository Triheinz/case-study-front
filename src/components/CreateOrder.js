import React, { Component } from 'react';
import OrderService from '../service/order.service';


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
    this.orderService = new OrderService();
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.fields);

    this.orderService
      .createOrder(this.state.fields)
      .then(() => {
        console.log('Created');

        this.setState(
          {
            fields: {
              number: '',
              date: '',
              clientName: '',
              products: '',
              orderState: '',
              country: '',
            },
          },
          () => {
            this.props.refreshState();
          }
        );
      })
      .catch((err) => console.error(err));
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
      <form onSubmit={(e) => this.handleSubmit(e)} class="form">
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
          <label htmlFor="date" />
          <input
            placeholder="date"
            type="date"
            name="date"
            value={fields.date}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="clientName" />
          <input
            placeholder="client Name"
            type="text"
            name="clientName"
            value={fields.clientName.name}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="products" />
          <input
            placeholder="Products"
            type="text"
            name="products"
            value={fields.products}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="orderState" />
          <input
            placeholder="Order State"
            type="text"
            name="orderState"
            value={fields.orderState}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="country" />
          <input
            placeholder="Company country"
            type="text"
            name="country"
            value={fields.country}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <button type="submit">Create Order</button>
      </form>
    );
  }
}

export default CreateOrder;
