import { NavLink, Outlet , useSearchParams,} from 'react-router-dom'
import { getInvoices } from '../data'


export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
  return (
   
    <div
        style={{textAlign: 'center', color:'green',
        display:'block',
        fontSize:36, 
        
        }}>
            Invoices
            <nav  style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}>
                    <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          }) //added search filter
                
                .map((invoice) => (
                  <NavLink to={`/invoices/${invoice.number}`
                  } key={invoice.number} style={({isActive}) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",  //shows the current active tab 
                    };
                  }}>
                    {invoice.number}
                  </NavLink>
                ))}
            </nav>
        <Outlet/>
    </div>
  );
}


