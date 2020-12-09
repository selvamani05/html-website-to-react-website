import React from 'react'
import {Link} from "react-router-dom";
import Header from './common/Header' ;
import Footer from './common/Footer';
import HomePageImage from './HomePageImage'; 
import galleryimg from '../assets/pngimg.png'
import HomePage3section from './HomePage3section'
function HomePage() {

  
  return (
    <div>
<div className="bgded overlay"> 

{/* <div className="bgded overlay" style="background-image:url('images/demo/backgrounds/01.png');">  */}
  
  
{/*   <Header/> */}
  
  
  <div id="pageintro" className="hoc clear"> 
    
    <article>
      <h3 className="heading">Gravida ligula pulvinar</h3>
      <p>Sem eu tincidunt magna nulla eu turpis mauris eget ante fusce pharetra sodales arcu sed rutrum ipsum a ipsum.</p>
      <footer>
        <form className="group" method="post" action="#">
          <fieldset>
            <legend>Sign-Up:</legend>
            <input type="email" value="" placeholder="Email Here&hellip;"/>
            <button className="fas fa-sign-in-alt" type="submit" title="Submit"><em>Submit</em></button>
          </fieldset>
        </form>
      </footer>
    </article>
    
  </div>
  
</div>
{/* <!-- End Top Background Image Wrapper --> */}



<div className="wrapper row3">
  <main className="hoc container clear"> 
   {/*  <!-- main body --> */}
    
    <section id="introblocks">
      <div className="sectiontitle">
        <h6 className="heading">Quisque adipiscing</h6>
        <p>Urna sed augue className aptent taciti sociosqu ad litora torquent</p>
      </div>
      <ul className="nospace group">
        <li className="one_quarter first">
          <article><a href="#"><i className="fas fa-golf-ball"></i></a>
            <h6 className="heading">Suspendisse</h6>
            <p>Per conubia nostra per mauris aliquet massa nulla facilisi porta ligula non elementum</p>
            <footer><a className="btn" href="#">More Details</a></footer>
          </article>
        </li>
        <li className="one_quarter">
          <article><a href="#"><i className="fas fa-ribbon"></i></a>
            <h6 className="heading">Inceptos</h6>
            <p>Ultricies justo urna egestas metus ut ornare leo augue pharetra risus morbi tincidunt massa</p>
            <footer><a className="btn" href="#">More Details</a></footer>
          </article>
        </li>
        <li className="one_quarter">
          <article><a href="#"><i className="fas fa-tablets"></i></a>
            <h6 className="heading">Himenaeos</h6>
            <p>Ac vestibulum rutrum orci augue iaculis nibh quis porta nunc nisi suscipit leo nam ac lacus</p>
            <footer><a className="btn" href="#">More Details</a></footer>
          </article>
        </li>
        <li className="one_quarter">
          <article><a href="#"><i className="fas fa-wine-glass"></i></a>
            <h6 className="heading">Facilisis</h6>
            <p>Cras tempor ultricies urna aliquam massa sapien posuere in iaculis adipiscing vulputate</p>
            <footer><a className="btn" href="#">More Details</a></footer>
          </article>
        </li>
      </ul>
    </section>
    
    {/* <!-- / main body --> */}
    <div className="clear"></div>
  </main>
</div>



<HomePageImage/>






<HomePage3section/>



<div className="wrapper bgded overlay" >

{/* <div className="wrapper bgded overlay" style="background-image:url('images/demo/backgrounds/01.png');"> */}
  <section id="testimonials" className="hoc container clear"> 
    
    <div className="sectiontitle">
      <h6 className="heading">Donec condimentum</h6>
      <p>Adipiscing justo nulla mollis iaculis tortor in mauris integer</p>
    </div>
    <div className="group">
      <article className="one_half first"><img src="images/demo/80x80.png" alt=""/>
        <blockquote>Pretium duis viverra malesuada mi proin iaculis mauris eu sodales cursus sapien erat pharetra justo vitae volutpat eros magna et magna mauris hendrerit pellentesque.</blockquote>
        <h6 className="heading font-x1">A. Doe</h6>
        <em>Et ipsum mattis ipsum</em></article>
      <article className="one_half"><img src="images/demo/80x80.png" alt=""/>
        <blockquote>Pellentesque pretium proin molestie erat in rhoncus posuere nibh quam consectetuer lectus ac vulputate ligula lorem ut dolor duis tempus mauris nunc et ligula ut.</blockquote>
        <h6 className="heading font-x1">B. Doe</h6>
        <em>Tortor suscipit convallis</em></article>
    </div>
    
  </section>
</div>



<div className="wrapper row3">
  <article className="hoc cta clear"> 
    
    <h6 className="three_quarter first">Sed ullamcorper arcu eu ante ut sollicitudin sem sit amet</h6>
    <footer className="one_quarter"><a className="btn" href="#">Ipsum fusce non pede</a></footer>
    
  </article>
</div>


<HomePageImage/>
<Footer/>



<a id="backtotop" href="#top"><i className="fas fa-chevron-up"></i></a>
{/* <!-- JAVASCRIPTS --> */}
<script src="layout/scripts/jquery.min.js"></script>
<script src="layout/scripts/jquery.backtotop.js"></script>
<script src="layout/scripts/jquery.mobilemenu.js"></script>

      
    </div>
  )
}

export default HomePage
