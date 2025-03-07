import React from "react";
import "./InvoiceDetail.css";


const InvoiceDetail = ({ invoice }) => {
  const { storeName, orderId, date, items } = invoice;
  const totalWithoutTax = items.reduce((sum, item) => sum + item.dealPrice * item.quantity, 0);
  const totalTax = items.reduce((sum, item) => sum + item.tax * item.quantity, 0);
  const totalWithTax = totalWithoutTax + totalTax;

  return (
    <div className="invoice-detail">
      <h3>Invoice Details</h3>
      <p>Store: {storeName}</p>
      <p>Order ID: {orderId}</p>
      <p>Date: {date}</p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Tax</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.dealPrice}</td>
              <td>{item.tax}</td>
              <td>{(item.dealPrice * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Without Tax: {totalWithoutTax.toFixed(2)}</p>
      <p>Total Tax: {totalTax.toFixed(2)}</p>
      <p>Grand Total: {totalWithTax.toFixed(2)}</p>
    </div>
  );
};

export default InvoiceDetail;