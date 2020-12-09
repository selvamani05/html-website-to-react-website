import React from 'react'
import galleryimg from '../assets/pngimg.png'


function GalleryImage() {

    const galimage = [
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
  },{
    id:7,
    img: galleryimg   
},{
  id:8,
  img: galleryimg   
},{
  id:9,
  img: galleryimg   
}

    ]



    return (
        <div id="gallery">
        

        <figure>
          <header class="heading">Gallery Title Goes Here</header>
          <ul class="nospace clear">
          {galimage.map(pepper => 
            
            <li class="one_quarter"><a href="#"><img src={pepper.img} alt="" key={pepper.id}/></a></li>
            )}
          </ul>
          <figcaption>Gallery Description Goes Here</figcaption>
        </figure>
        
      </div>
    )
}

export default GalleryImage
