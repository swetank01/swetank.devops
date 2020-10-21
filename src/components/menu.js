import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return(
        <header> 
        <ul>
          <li><Link to="/contact">Contact</Link></li>
          <li> <Link to="/blog">blog</Link> </li>
          <li> <Link to="/portfolio">Portfolio</Link> </li>
        </ul>
      </header>
    )
}
export default Navbar