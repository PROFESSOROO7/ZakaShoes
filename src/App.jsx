import { useState } from "react";
import "./index.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Employee from "./Pages/Employee/Employee";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Stock from "./Pages/Stock/Stock";
import Rider from "./Pages/Rider/Rider";
import Order from "./Pages/Order/Order";
import Product from "./Pages/Product/Product";
import Account from "./Pages/Account/Account";
import Login from "./Pages/Auth/Login";
import { Link } from "react-router-dom";

function App() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <BrowserRouter>
    <div className="App">

      <section id="sidebar"  className={isActive ? 'hide': null} >
        <Link to="/" className="brand">
          <i className='bx '></i>
          <span className="text">
            <br />
            <br />
            <img src="../src\assets\Images\logo.png" width="180" className="p-4" alt="" />

            <img src="../src/assets/Images/logo.png" ></img>
            </span>
        </Link>
        <ul className="side-menu top">
          <li className="active">
            <Link to="/">
              <i className='bx bxs-dashboard' ></i>
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="employee">
              <i className='bx bxs-group' ></i>
              <span className="text">Employee</span>
            </Link>
          </li>
          <li>
            <Link to="rider">
              <i className='bx bxs-group' ></i>
              <span className="text">Rider</span>
            </Link>
          </li>
          <li>
            <Link to="product">
              <i className='bx bxs-category' ></i>
              <span className="text">Product</span>
            </Link>
          </li>
          <li>
            <Link to="stock">
              <i className='bx bxs-message-dots' ></i>
              <span className="text">Stock</span>
            </Link>
          </li>
          <li>
            <Link to="order">
              <i className='bx bxs-group' ></i>
              <span className="text">Order</span>
            </Link>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <Link to="profile">
              <i className='bx bxs-cog' ></i>
              <span className="text">profile</span>
            </Link>
          </li>
          <li>
            <Link to="login" className="logout">
              <i className='bx bxs-log-out-circle' ></i>
              <span className="text">Login</span>
            </Link>
          </li>
        </ul>


      
      </section>
     
      <section id="content">
       
        <nav>
          <i  className='bx bx-menu'  onClick={toggleClass}  ></i>
          {/* <a href="#" className="nav-link">Categories</a> */}
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="button" className="search-btn"><i className='bx bx-search' ></i></button>
            </div>
          </form>
          <a href="#" className="notification">
            <i className='bx bxs-bell' ></i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
          </a>
        </nav>

        

  
       {/* <Employee /> */}
       {/* <Dashboard /> */}
       {/* <Stock /> */}
       {/* < Rider /> */}
       {/* <Order /> */}
       {/* <Product /> */}
       {/* <Account/> */}
       {/* <Login /> */}
  
  <Routes>
    <Route  path="/" element={<Dashboard /> }/>
    <Route  path="/employee" element={<Employee /> }/>
    <Route  path="/stock" element={<Stock /> }/>
    <Route  path="/rider" element={< Rider /> }/>
    <Route  path="/order" element={<Order /> }/>
    <Route  path="/product" element={<Product /> }/>
    <Route  path="/profile" element={<Account/> }/>
    <Route  path="/login" element={<Login /> }/>
  </Routes>


       
      </section>
     
    </div>
    </BrowserRouter>
  );
}

export default App;