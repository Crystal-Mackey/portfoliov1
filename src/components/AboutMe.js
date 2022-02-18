import React, {Component} from 'react';
import LOGO from "./media/pawprints.png"


const About = () => {
        return(<div className='head' style={{width: '100%', margin: 'auto'}}>
        <div className="landing-grid">
          <div>
            <div className="banner-text">
              <h1>Crystal Mackey</h1>

           <h2>React Web Developer</h2>

          <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

        <div className="social-links">
        <a href='https://github.com/Crystal-Mackey'><i class="fa fa-github fa-2x"></i></a>
        <a href='https://www.linkedin.com/in/crystal-mackey-02763a102/'><i class="fa fa-linkedin fa-2x"></i></a>
        <a href='https://www.facebook.com/crystal.mackey.397'><i class="fa fa-facebook fa-2x"></i></a>
        </div>
        <img src={LOGO}/>
            </div>
          </div>
        </div>
      </div>
    )
  }



export default About;