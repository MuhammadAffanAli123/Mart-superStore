import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import './nav.css'
class Nav extends Component {
    render() {
        return (
           <div>
                  {/* <div className="row" style={{backgroundColor:"rgb(7, 96, 237)"}}>
<div className="col-6">
                        <Link to="/">
                            
                            <span style={{color:"white",fontFamily: "Oswald, sans-serif",marginLeft:"9%",textDecoration:"underline",fontSize:"32px"}}>Products</span></Link>
</div>

<div className="col-6" >

<Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}  style={{color:"white",marginLeft:"55%",fontSize:"300%"}} /></Link>
</div>
               </div> */}
               <div>
  
  <nav className="navbar navbar-expand-sm bg-black navbar-dark" style={{backgroundColor:"black"}}>
  <Link to="/">
    <a className="navbar-brand" href="#">
      SMART MART
    </a>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Account
          </a>
        </li>
        <li className="nav-item">
        <Link to="/cart">
          <a className="nav-link" href="#">
             Cards
          </a>
       </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
         Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
</div>;

           </div>
        
                         
        )
    }
}

export default Nav
