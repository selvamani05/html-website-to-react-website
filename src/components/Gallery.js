import React from 'react'
import Footer from './common/Footer'
import {Link} from "react-router-dom";
import GalleryImage from './GalleryImage'
import HomePageImage from './HomePageImage'

function Gallery() {
    return (
        <div>
            


{/* <!-- Top Background Image Wrapper --> */}
<div className="bgded overlay"> 

{/* <div className="bgded overlay" style="background-image:url('../images/demo/backgrounds/01.png');">  */}
  
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
              <li className="active"><Link to="/gallery">Gallery</Link></li>
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
  
  
  
  <div id="breadcrumb" className="hoc clear"> 
    
    <h6 className="heading">Gallery</h6>
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
      
      <GalleryImage/>
      
      
      <nav className="pagination">
        <ul>
          <li><a href="#">&laquo; Previous</a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><strong>&hellip;</strong></li>
          <li><a href="#">6</a></li>
          <li className="current"><strong>7</strong></li>
          <li><a href="#">8</a></li>
          <li><a href="#">9</a></li>
          <li><strong>&hellip;</strong></li>
          <li><a href="#">14</a></li>
          <li><a href="#">15</a></li>
          <li><a href="#">Next &raquo;</a></li>
        </ul>
      </nav>
      
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

export default Gallery
