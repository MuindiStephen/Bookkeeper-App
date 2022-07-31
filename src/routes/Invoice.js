//import React from 'react'
import { useParams,useNavigate, useLocation } from 'react-router-dom';
import { getInvoice, deleteInvoice} from "../data";




//Returns an object of key/value pairs of the
//Dynamic params from the current URL that were matched by the route path.
export default function Invoice() {
    let navigate = useNavigate();
  let location = useLocation();
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    
    return (
        <main style={{ padding: "1rem" }}>
          <h2>Total Due: {invoice.amount}</h2>
          <p>
            {invoice.name}: {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>

          <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
      </p>
        </main>
      );
}
