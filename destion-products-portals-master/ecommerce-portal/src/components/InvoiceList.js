import React, { useState } from "react";
import { invoices } from "../data";
import InvoiceDetail from "./InvoiceDetail";
import "./InvoiceList.css"
import { Link } from "react-router-dom";


const InvoiceList = () => {
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  return (
    <div className="invoice-list">
      <h2>Invoice List</h2>
      {invoices.map((invoice) => (
        <div key={invoice.id} onClick={() => setSelectedInvoice(invoice)}>
         <Link to=""> <p className="data-value-112">{invoice.storeName} - {invoice.orderId}</p></Link>
        </div>
      ))}
      {selectedInvoice && <InvoiceDetail invoice={selectedInvoice} />}
    </div>
  );
};

export default InvoiceList;