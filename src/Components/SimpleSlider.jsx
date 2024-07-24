import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import './SimpleSlider.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="slider">
        <Slider className="items-slider" {...settings}>
          <div className="item-1">
                 <img src="https://www.blackbeautyandhair.com/wp-content/uploads/2016/09/Get-your-weave-on-BeyondHairSlider.jpg" alt="" />
          </div>
          <div>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGWoty6Xw03gUin3CKTEI0z3-dxdfuZ6XyA&s" alt="" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNP7rrGEOewn830QdTks2dabg0dGk0AhSw5A&s" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}