import React from 'react'
import {Search}  from '@material-ui/icons';
import {ShoppingCart} from '@material-ui/icons';

import {Link} from "react-router-dom"
import '.././App.css';
const Navbar = () => {
    return (
        <div className='navBar'>
            <div className='wrapper'>

                <div className='left'>
                    <div className = "language">EN</div>
                    <div className = "search">
                        <input type = "text">
                        </input>
                        <Search/>
                        
                    </div>
                </div>
                <div className='center'>
                    <h1 className='logo'>ECOMMERCE SITE</h1>
                </div>
                <div className='right'>
                    <Link to = "/register" ><div className='menuItem'>REGISTER</div> </Link>
                    <Link to = "/login" > <div className='menuItem'>SIGN IN</div> </Link>
                    <div className='menuItem'>
                        
                        <Link   to="/cart"><ShoppingCart/></Link>
                    </div>
                </div>
           
           </div>

           <div >
               
           <nav className="navbar navbar-expand-lg navbar-light bg-light" style = {{justifyContent : 'space-between'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
                        
                    
                
           </div>
             
   


        </div>
    )
}
 
export default Navbar