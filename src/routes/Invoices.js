import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getInvoices } from '../data'

export default function Invoices() {
    let invoices = getInvoices();
  return (
   
    <div
        style={{textAlign: 'center', color:'green',
        
        fontSize:36, 
        
        }}>
            Invoices
            <nav  style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}>
                {invoices.map((invoice) => (
                    <Link  style={{display:'block', margin:'1rem 0', justifyContent:'space-between'}}
                    to={`/invoices/${invoice.number}`} key={invoice.number}>
                        {invoice.number}
                    </Link>
                ))}
            </nav>
        <Outlet/>
    </div>
  )
}
