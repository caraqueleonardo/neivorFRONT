import React from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css"

function NavBar() {
    return (
      <>
        <ul>
          <li> <Link to="/create"><a href='a'class="active" >Generate</a></Link></li>
          <li> <Link to="/home"><a href='a' >Charge</a></Link> </li>
          <li> <Link to="/validate"><a href='a' >In progress</a></Link> </li>
        </ul>
      </>
    );
  }
  
  export default NavBar;