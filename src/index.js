import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';

//Learn more here
//https://reactrouter.com/docs/en/v6/getting-started/tutorial

//BrowserRouter to connect the App to browse's urls
//and making the routes to be the children of our app
ReactDOM.render(
<BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}>
    <Route path='expenses' element={<Expenses/>}/>
    <Route path='invoices' element={<Invoices/>}>
    <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
    <Route path='*' element={
      <main>
        <p>Nothing here!</p>
      </main>
    }/>
    </Route>
   </Routes>
</BrowserRouter>, document.getElementById('root'));

