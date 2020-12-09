import React from 'react';
import galleryimg from '../assets/pngimg.png'

function HomePageImage(){

    const hmepic = [
        {
          id:1,
          img: galleryimg
                  },
        {
          id:2,
          img: galleryimg
        },
        {
          id:3,
          img: galleryimg
        },
        {
          id:4,
          img: galleryimg
        },
        {
          id:5,
          img: galleryimg
        },
        {
          id:6,
          img: galleryimg
        } 
        
      ]


    
    return (

        
          <div className="wrapper row2">
          <section id="references" className="hoc container clear"> 
            
            <div className="sectiontitle">
              <h6 className="heading">Aliquet vestibulum</h6>
              <p>Eget magna eget sem imperdiet tincidunt vestibulum fringilla nulla</p>
            </div>
            <nav className="ref-sort">
              <ul>
                <li className="current"><a href="#">Ultricies</a></li>
                <li><a href="#">Curabitur</a></li>
                <li><a href="#">Porttitor</a></li>
                <li><a href="#">Pulvinar</a></li>
              </ul>
            </nav>
            <ul className="nospace group ref-img">
            {hmepic.map(homepicture => 
              <li className="one_third"><a className="imgover" href="#"><img src={homepicture.img} alt="" key={homepicture.id}/></a></li>
              
              )}
            </ul>
            <footer className="block center"><a className="btn" href="#">View more here</a></footer>
            
          </section>
        </div>
    )
}

export default HomePageImage
