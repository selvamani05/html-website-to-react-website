import React from 'react';
import {Link} from "react-router-dom";
import Footer from './common/Footer';

function BasicGrid() {
    return (
        <div id="top">
        


{/* <!-- Top Background Image Wrapper --> */}
{/* <div className="bgded overlay" style="background-image:url('../images/demo/backgrounds/01.png');">  */}

<div className="bgded overlay"> 
  
  <div className="wrapper row1">
    <header id="header" className="hoc clear"> 
      
      <div id="logo" className="fl_left">
        <h1><Link to="/">Yeinydd</Link></h1>
      </div>
      
      <nav id="mainav" className="fl_right">
        <ul className="clear">
          <li><Link to="/">Home</Link></li>
          <li className="active"><a className="drop" href="#">Pages</a>
            <ul>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/fullwidth">Full Width</Link></li>
              <li><Link to="/sidebarleft">Sidebarleft</Link></li>
              <li><Link to="/sidebarright">Sidebarright</Link></li>
              <li className="active"><Link to="/basicgrid">Basicgrid</Link></li>
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
  
  
  
  <div id="breadcrumb" className="hoc clear"> 
    
    <h6 className="heading">Basic Grid</h6>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Lorem</a></li>
      <li><a href="#">Ipsum</a></li>
      <li><a href="#">Dolor</a></li>
    </ul>
    
  </div>
  
</div>
{/* <!-- End Top Background Image Wrapper --> */}



<div className="wrapper row3">
  <main className="hoc container clear"> 
    {/* <!-- main body --> */}
    
    <div className="content"> 
      
      <h2>Half</h2>
      
      <div className="group btmspace-50 demo">
        <div className="one_half first">1/2</div>
        <div className="one_half">1/2</div>
      </div>
      
      <h2>Quarter</h2>
      
      <div className="group btmspace-50 demo">
        <div className="one_quarter first">1/4</div>
        <div className="one_quarter">1/4</div>
        <div className="one_quarter">1/4</div>
        <div className="one_quarter">1/4</div>
      </div>
      <div className="group btmspace-50 demo">
        <div className="one_quarter first">1/4</div>
        <div className="one_quarter">1/4</div>
        <div className="two_quarter">2/4 or 1/2</div>
      </div>
      <div className="group btmspace-50 demo">
        <div className="one_quarter first">1/4</div>
        <div className="three_quarter">3/4</div>
      </div>
      
      <h2>Third</h2>
      
      <div className="group btmspace-50 demo">
        <div className="one_third first">1/3</div>
        <div className="one_third">1/3</div>
        <div className="one_third">1/3</div>
      </div>
      <div className="group demo">
        <div className="one_third first">1/3</div>
        <div className="two_third">2/3</div>
      </div>
      
    </div>
    
    {/* <!-- / main body --> */}
    <div className="clear"></div>
  </main>
</div>



<Footer/>
<a id="backtotop" href="#top"><i className="fas fa-chevron-up"></i></a>
{/* <!-- JAVASCRIPTS -->
<script src="../layout/scripts/jquery.min.js"></script>
<script src="../layout/scripts/jquery.backtotop.js"></script>
<script src="../layout/scripts/jquery.mobilemenu.js"></script> */}
            
        </div>
    )
}

export default BasicGrid
