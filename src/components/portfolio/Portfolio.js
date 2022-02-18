import React from 'react'
import colorama from "../../components/media/colorama.JPG";
import mickey from "../../components/media/mickeycss.JPG";




const Portfolio = () => {
    return(
      <div className='Projects'>
        <div className='project-1'>
          <div className='image-1'><img src={colorama}></img></div>
          <div className='link-1'>
            <a href="#"><i class="fa fa-github fa-2x"></i></a><a href="https://coloringpagemintbean.herokuapp.com/">https://coloringpagemintbean.herokuapp.com/</a>
          </div>
          <br/>
        </div>
        <div className='project-2'>
          <div className='image-2'><img src={mickey}/></div>
          <div className='link-2'><a href="https://github.com/Crystal-Mackey/mickeyCSS.git"><i class="fa fa-github fa-2x"></i></a></div>
        </div>
      </div>
    )
}

export default Portfolio;