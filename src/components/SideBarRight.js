import React from 'react';
import {Link} from "react-router-dom";
import Footer from './common/Footer';


function SideBarRight() {
    return (
        <div id="top">




{/* <!-- Top Background Image Wrapper --> */}
{/* <div className="bgded overlay" style="background-image:url('../images/demo/backgrounds/01.png');"> */}

<div className="bgded overlay">

  
  <div className="wrapper row1">
    <header id="header" className="hoc clear"> 
      
      <div id="logo" className="fl_left">
        <h1>
<Link to="/">Yeinydd</Link></h1>
      </div>
      
      <nav id="mainav" className="fl_right">
        <ul className="clear">
          <li><Link to="/">Home</Link></li>
          <li className="active"><Link to="/sidebarright">Pages</Link>
            <ul>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/fullwidth">Full Width</Link></li>
              <li><Link to="/sidebarleft">Sidebarleft</Link></li>
              <li className="active"><Link to="/sidebarright">Sidebarright</Link></li>
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
    
    <h6 className="heading">Sidebar Right</h6>
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
    
    <div className="content three_quarter first"> 
      
      <h1>&lt;h1&gt; to &lt;h6&gt; - Headline Colour and Size Are All The Same</h1>
      <img className="imgr borderedbox inspace-5" src="../images/demo/imgr.gif" alt=""/>
      <p>Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</p>
      <p>Dapiensociis <a href="#">temper donec auctortortis cumsan</a> et curabitur condis lorem loborttis leo. Ipsumcommodo libero nunc at in velis tincidunt pellentum tincidunt vel lorem.</p>
      <img className="imgl borderedbox inspace-5" src="../images/demo/imgl.gif" alt=""/>
      <p>This is a W3C compliant free website template from <a href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a>. For full terms of use of this template please read our <a href="https://www.os-templates.com/template-terms">website template licence</a>.</p>
      <p>You can use and modify the template for both personal and commercial use. You must keep all copyright information and credit links in the template and associated files. For more website templates visit our <a href="https://www.os-templates.com/">free website templates</a> section.</p>
      <p>Portortornec condimenterdum eget consectetuer condis consequam pretium pellus sed mauris enim. Puruselit mauris nulla hendimentesque elit semper nam a sapien urna sempus.</p>
      <h1>Table(s)</h1>
      <div className="scrollable">
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
              <th>Header 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#">Value 1</a></td>
              <td>Value 2</td>
              <td>Value 3</td>
              <td>Value 4</td>
            </tr>
            <tr>
              <td>Value 5</td>
              <td>Value 6</td>
              <td>Value 7</td>
              <td><a href="#">Value 8</a></td>
            </tr>
            <tr>
              <td>Value 9</td>
              <td>Value 10</td>
              <td>Value 11</td>
              <td>Value 12</td>
            </tr>
            <tr>
              <td>Value 13</td>
              <td><a href="#">Value 14</a></td>
              <td>Value 15</td>
              <td>Value 16</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="comments">
        <h2>Comments</h2>
        <ul>
          <li>
            <article>
              <header>
                <figure className="avatar"><img src="../images/demo/avatar.png" alt=""/></figure>
                <address>
                By <a href="#">A Name</a>
                </address>
                <time dateTime="2045-04-06T08:15+00:00">Friday, 6<sup>th</sup> April 2045 @08:15:00</time>
              </header>
              <div className="comcont">
                <p>This is an example of a comment made on a post. You can either edit the comment, delete the comment or reply to the comment. Use this as a place to respond to the post or to share what you are thinking.</p>
              </div>
            </article>
          </li>
          <li>
            <article>
              <header>
                <figure className="avatar"><img src="../images/demo/avatar.png" alt=""/></figure>
                <address>
                By <a href="#">A Name</a>
                </address>
                <time dateTime="2045-04-06T08:15+00:00">Friday, 6<sup>th</sup> April 2045 @08:15:00</time>
              </header>
              <div className="comcont">
                <p>This is an example of a comment made on a post. You can either edit the comment, delete the comment or reply to the comment. Use this as a place to respond to the post or to share what you are thinking.</p>
              </div>
            </article>
          </li>
          <li>
            <article>
              <header>
                <figure className="avatar"><img src="../images/demo/avatar.png" alt=""/></figure>
                <address>
                By <a href="#">A Name</a>
                </address>
                <time dateTime="2045-04-06T08:15+00:00">Friday, 6<sup>th</sup> April 2045 @08:15:00</time>
              </header>
              <div className="comcont">
                <p>This is an example of a comment made on a post. You can either edit the comment, delete the comment or reply to the comment. Use this as a place to respond to the post or to share what you are thinking.</p>
              </div>
            </article>
          </li>
        </ul>
        <h2>Write A Comment</h2>
        <form action="#" method="post">
          <div className="one_third first">
            <label for="name">Name <span>*</span></label>
            <input type="text" name="name" id="name" value="" size="22" required/>
          </div>
          <div className="one_third">
            <label for="email">Mail <span>*</span></label>
            <input type="email" name="email" id="email" value="" size="22" required/>
          </div>
          <div className="one_third">
            <label for="url">Website</label>
            <input type="url" name="url" id="url" value="" size="22"/>
          </div>
          <div className="block clear">
            <label for="comment">Your Comment</label>
            <textarea name="comment" id="comment" cols="25" rows="10"></textarea>
          </div>
          <div>
            <input type="submit" name="submit" value="Submit Form"/>
            &nbsp;
            <input type="reset" name="reset" value="Reset Form"/>
          </div>
        </form>
      </div>
      
    </div>
    
    
    <div className="sidebar one_quarter"> 
      
      <h6>Lorem ipsum dolor</h6>
      <nav className="sdb_holder">
        <ul>
          <li><a href="#">Navigation - Level 1</a></li>
          <li><a href="#">Navigation - Level 1</a>
            <ul>
              <li><a href="#">Navigation - Level 2</a></li>
              <li><a href="#">Navigation - Level 2</a></li>
            </ul>
          </li>
          <li><a href="#">Navigation - Level 1</a>
            <ul>
              <li><a href="#">Navigation - Level 2</a></li>
              <li><a href="#">Navigation - Level 2</a>
                <ul>
                  <li><a href="#">Navigation - Level 3</a></li>
                  <li><a href="#">Navigation - Level 3</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Navigation - Level 1</a></li>
        </ul>
      </nav>
      <div className="sdb_holder">
        <h6>Lorem ipsum dolor</h6>
        <address>
        Full Name<br/>
        Address Line 1<br/>
        Address Line 2<br/>
        Town/City<br/>
        Postcode/Zip<br/>
        <br/>
        Tel: xxxx xxxx xxxxxx<br/>
        Email: <a href="#">contact@domain.com</a>
        </address>
      </div>
      <div className="sdb_holder">
        <article>
          <h6>Lorem ipsum dolor</h6>
          <p>Nuncsed sed conseque a at quismodo tris mauristibus sed habiturpiscinia sed.</p>
          <ul>
            <li><a href="#">Lorem ipsum dolor sit</a></li>
            <li>Etiam vel sapien et</li>
            <li><a href="#">Etiam vel sapien et</a></li>
          </ul>
          <p>Nuncsed sed conseque a at quismodo tris mauristibus sed habiturpiscinia sed. Condimentumsantincidunt dui mattis magna intesque purus orci augue lor nibh.</p>
          <p className="more"><a href="#">Continue Reading &raquo;</a></p>
        </article>
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

export default SideBarRight
