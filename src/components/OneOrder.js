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
    <tbody>
      <th scope="col">
        <Link to={`/orders/${_id}`} key={_id}>
          {number}
        </Link>
      </th>
      <th scope="col">{date}</th>
      <th scope="col">{clientName}</th>
      <tr>
        <td>{clientName.id}</td>
        <td>{clientName.name}</td>
        <td>{clientName.lastName}</td>
        <td>{clientName.address}</td>3
        <td>{clientName.country}</td>
      </tr>
      <th scope="col">{products}</th>
      <th scope="col">{orderState}</th>
      <th scope="col">{country}</th>
    </tbody>
  );
}
export default OneOrder;
