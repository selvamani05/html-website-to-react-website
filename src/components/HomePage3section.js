import React from 'react'

function HomePage3section() {

    const row3 = [
        {
            id:1,
            title: 'Aliquam volutpat donec posuere',
            para: 'Ornare dolor phasellus ornare dui vel euismod ultrices orci libero pulvinar justo quis condimentum quam',
            foot:'Full Story',
            
        },
        {
            id:2,
            title: 'Nisl id ligula pellentesque',
            para: 'Felis nunc interdum vitae pretium ac bibendum vel velit phasellus commodo nullam vitae quam cras auctor',
            foot:'Full Story'
        },
        /* {
            id:3,
            title: 'Commodo metus proin blandit',
            para: 'Quam molestie luctus vehicula orci massa interdum justo nec rutrum risus augue ut nisl suspendisse elit.',
            foot:'Full Story'
        } */,
        

    ]





    return (
        <div class="wrapper row3">
      <section class="hoc container clear">
        
        <div class="sectiontitle">
          <h6 class="heading">Pellentesque consectetuer</h6>
          <p>Felis vitae sapien gravida interdum curabitur eu quam nec est</p>
        </div>
        <div id="latest" class="group">
        {row3.map(
                details=>
          <article class="one_third" key={details.id}>
                    
            <a class="imgover" href="#"
              ><img src="images/demo/348x261.png" alt=""
            /></a>

            <div class="excerpt">
            
            <div>
            
            
            
              <time datetime="2045-04-03T08:15+00:00"
                ><i class="far fa-calendar-alt"></i> 03<sup>rd</sup> April 2045
                @ 15:00pm</time
              >
              
              <h6 class="heading">{details.title}</h6>
              <ul class="meta">
                <li>
                  <i class="fas fa-user rgtspace-5"></i> <a href="#">Admin</a>
                </li>
                <li>
                  <i class="fas fa-tags rgtspace-5"></i> <a href="#">Tag 1</a>,
                  <a href="#">Tag 2</a>
                </li>
              </ul>
              <p>
              {details.para}
              </p>
              <footer><a class="btn" href="#">{details.foot}</a></footer>
              
              </div>
              
            </div>
            
          </article>
          )}
          
        </div>


        
        
      </section>
    </div>

    )
}

export default HomePage3section
