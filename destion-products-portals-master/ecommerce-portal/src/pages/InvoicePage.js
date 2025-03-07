import React from "react";
import InvoiceList from "../components/InvoiceList";
import "./InvoicePage.css"


const InvoicePage = () => {
  return (
    <div className="invoice-page">
      <h1>Invoice Generation Portal</h1>
      <InvoiceList />
    </div>
  );
};

export default InvoicePage;