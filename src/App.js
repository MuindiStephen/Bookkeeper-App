import { Link, Outlet } from 'react-router-dom';

import './App.css';

export default function App() {
  return (
    <div className="App">
        <h1 style={{color: 'blue'}}>Bookkeeper!</h1>
        <nav style={{
            borderBottom: 'solid 3px',
            paddingBottom: '2rem',
           
        }}>
          <Link to={"/invoices"} style={{padding:20 }}>Invoices</Link>
          <Link to={"/expenses"} style={{padding:20}}>Expenses</Link>
        </nav>
        <Outlet/> 
    </div>
  );
}

//Outer - UI components will use a shared layout 
//       - swaps between the two child routes Invoices and Expenses



