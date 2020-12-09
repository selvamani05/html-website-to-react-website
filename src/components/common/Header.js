import React from 'react'
import {Link} from "react-router-dom";  

function Header() {
    return (
        <div className="wrapper row1">
    <header id="header" className="hoc clear"> 
      
      <div id="logo" className="fl_left">
        <h1><Link to="/">Yeinydd</Link></h1>
      </div>
      
      <nav id="mainav" className="fl_right">
        <ul className="clear">
          <li className="active"><Link to="/">Home</Link></li>
          <li><a className="drop" href="#">Pages</a>
            <ul>
              <li>
              <Link to="/gallery">Gallery</Link>
              </li>
              <li><Link to="/fullwidth">Full Width</Link></li>
              <li><Link to="/sidebarleft">Sidebarleft</Link></li>
              <li><Link to="/sidebarright">Sidebarright</Link></li>
              <li><Link to="/basicgrid">Basicgrid</Link></li>
              <li><Link to="/fonticons">Font-Icons</Link></li>
            </ul>
          </li>
          <li><a className="drop" href="#">Dropdown</a>
            <ul>
              <li><a href="#">Level 2</a></li>
              <li><a className="drop" href="#">Level 2 + Drop</a>
                <ul>
                  <li><a href="#">Level 3</a></li>
                  <li><a href="#">Level 3</a></li>
                  <li><a href="#">Level 3</a></li>
                </ul>
              </li>
              <li><a href="#">Level 2</a></li>
            </ul>
          </li>
          {/* <li><a href="#">Link Text</a></li>
          <li><a href="#">Link Text</a></li>
          <li><a href="#">Link Text</a></li>
          <li><a href="#">Long Link Text</a></li> */}
        </ul>
      </nav>
      
    </header>
  </div>
    )
}

export default Header
