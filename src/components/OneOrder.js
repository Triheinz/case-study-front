import React from 'react';
import { Link } from 'react-router-dom';


function OneOrder({ _id,number, date, clientName, products, orderState, country }) {
  return (
    <div className="OrderContainer">
      <Link to={`/orders/${_id}`} key={_id}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Client Name</th>
              <th scope="col">Products</th>
              <th scope="col">Order State</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">{number}</th>
              <th scope="col">{date}</th>
              <th scope="col">{clientName}</th>
              <th scope="col">{products}</th>
              <th scope="col">{orderState}</th>
              <th scope="col">{country}</th>
            </tr>
          </tbody>
        </table>
      </Link>
    </div>
  );
}

export default OneOrder;
