import {NavLink, Outlet } from 'react-router-dom';

import './App.css';

export default function App() {
  return (
    <div className="App">
        <h1 style={{color: 'blue'}}>Bookkeeper!</h1>
        <nav style={{
            borderBottom: 'solid 3px',
            paddingBottom: '2rem',
           
        }}>
          <NavLink to={"/invoices"} style={({isActive}) => { 
            return {padding:20, color: isActive ? 'red' : 'blue' }
            }}>Invoices</NavLink>
          <NavLink to={"/expenses"} style={{padding:20}}>Expenses</NavLink>
        </nav>
        <Outlet/> 
    </div>
  );
}

//Outer - UI components will use a shared layout 
//       - swaps between the two child routes Invoices and Expenses



