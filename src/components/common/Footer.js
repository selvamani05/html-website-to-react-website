import React from 'react'

function Footer() {

  const mediaIcons = [
{
  aclassname:"faicon-dribble",
  iclassname:"fab fa-dribbble"
},
{
  aclassname:"faicon-facebook",
  iclassname:"fab fa-facebook"
},
{
  aclassname:"faicon-google-plus",
  iclassname:"fab fa-google-plus-g"
},
{
  aclassname:"faicon-linkedin",
  iclassname:"fab fa-linkedin"
},
{
  aclassname:"faicon-twitter",
  iclassname:"fab fa-twitter"
},
{
  aclassname:"faicon-vk",
  iclassname:"fab fa-vk"
},



  ]
    return (
        <div>
            <div className="wrapper row4">
  <footer id="footer" className="hoc clear"> 
    
    <div className="group btmspace-80">
      <div className="one_third first">
      
        <h6 className="heading">Non erat varius lacinia</h6>
        <p>Morbi tincidunt in hac habitasse platea dictumst praesent pretium donec tincidunt laoreet diam nullam augue.</p>
        <p className="btmspace-30">Tortor rhoncus sed dictum vitae viverra posuere lorem pellentesque suscipit eros vel ante curabitur pretium [<a href="#"><i className="fas fa-arrow-right"></i></a>]</p>
        
        
          
        <ul className="faico clear">
        <div>
        {mediaIcons.map(icon=>
        
          <li><a className={icon.aclassname} ><i className={icon.iclassname}></i></a></li>,
          {/* <li><a className={aclassname} href="#"><i className={icon.iclassname}></i></a></li>
          <li><a className={aclassname} href="#"><i className={icon.iclassname}></i></a></li>
          <li><a className={aclassname} href="#"><i className={icon.iclassname}></i></a></li>
          <li><a className={aclassname} href="#"><i className={icon.iclassname}></i></a></li>
          <li><a className={aclassname} href="#"><i className={icon.iclassname}></i></a></li> */}
          )}
          </div>
        </ul>
        
      </div>
      <div className="one_third">
        <h6 className="heading">Enim et mauris quisque vitae</h6>
        <p className="nospace btmspace-15">Libero className aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
        <form method="post" action="#">
          <fieldset>
            <legend>Newsletter:</legend>
            <input className="btmspace-15" type="text" value="" placeholder="Name"/>
            <input className="btmspace-15" type="text" value="" placeholder="Email"/>
            <button type="submit" value="submit">Submit</button>
          </fieldset>
        </form>
      </div>
      <div className="one_third">
        <h6 className="heading">Per inceptos himenaeos</h6>
        <ul className="nospace clear latestimg">
          <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
          <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
          <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
          <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
          <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
          <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
        </ul>
      </div>
    </div>
    
    <div id="ctdetails" className="clear">
      <ul className="nospace clear">
        <li className="one_quarter first">
          <div className="block clear"><a href="#"><i className="fas fa-phone"></i></a> <span><strong>Give us a call:</strong> +00 (123) 456 7890</span></div>
        </li>
        <li className="one_quarter">
          <div className="block clear"><a href="#"><i className="fas fa-envelope"></i></a> <span><strong>Send us a mail:</strong> support@domain.com</span></div>
        </li>
        <li className="one_quarter">
          <div className="block clear"><a href="#"><i className="fas fa-clock"></i></a> <span><strong> Monday - Saturday:</strong> 08.00am - 18.00pm</span></div>
        </li>
        <li className="one_quarter">
          <div className="block clear"><a href="#"><i className="fas fa-map-marker-alt"></i></a> <span><strong>Come visit us:</strong> Directions to <a href="#">our location</a></span></div>
        </li>
      </ul>
    </div>
    
  </footer>
</div>



<div className="wrapper row5">
  <div id="copyright" className="hoc clear"> 
    
    <p className="fl_left">Copyright &copy; 2018 - All Rights Reserved - <a href="#">Domain Name</a></p>
    <p className="fl_right">Template by <a target="_blank" href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
    
  </div>
</div> 
        </div>
    )
}

export default Footer
