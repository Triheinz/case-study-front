import React from 'react';
import { Link } from 'react-router-dom';
function OneOrder({
order
}) {
  const { _id,
  number,
  date,
  clientName,
  clientLastName,
  clientAddress,
  products,
  orderState,
  country} = order
  return (
    <tbody>
      <th scope="col">
        <Link to={`/orders/${_id}`} key={_id}>
          {number}
        </Link>
      </th>
      <th scope="col">{date}</th>
      <th scope="col">{clientName}</th>
      <th scope="col">{clientLastName}</th>
      <th scope="col">{clientAddress}</th>
      <th scope="col">{products}</th>
      <th scope="col">{orderState}</th>
      <th scope="col">{country}</th>
    </tbody>
  );
}
export default OneOrder;
