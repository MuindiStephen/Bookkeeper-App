//import React from 'react'
import { useParams } from 'react-router-dom';
import { getInvoice } from "../data";




//Returns an object of key/value pairs of the
//Dynamic params from the current URL that were matched by the route path.
export default function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    
    return (
        <main style={{ padding: "1rem" }}>
          <h2>Total Due: {invoice.amount}</h2>
          <p>
            {invoice.name}: {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>
        </main>
      );
}
