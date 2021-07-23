import React from 'react';
import { Link } from 'react-router-dom';
function OneOrder({
order
}) {
  const { _id,
  number,
  date,
  clientName,
  products,
  orderState,
  country} = order
  return (
    <tr>
      <th scope="col">
        <Link to={`/orders/${_id}`} key={_id}>
          {number}
        </Link>
      </th>
      <th scope="col">{date}</th>
      <th scope="col">{clientName}</th>
      <tr>
        <th scope="col">{this.clientName.id}</th>
        <th scope="col">{this.clientName.name}</th>
        <th scope="col">{this.clientName.lastName}</th>
        <th scope="col">{this.clientName.address}</th>
        <th scope="col">{this.clientName.country}</th>
      </tr>
      <th scope="col">{products}</th>
      <th scope="col">{orderState}</th>
      <th scope="col">{country}</th>
    </tr>
  );
}
export default OneOrder;
