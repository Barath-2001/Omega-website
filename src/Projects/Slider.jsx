import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { FaArrowCircleLeft,FaArrowCircleRight} from "react-icons/fa";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project2 from './Project2';
import {Container as Contain} from "react-bootstrap";
import { Zoom } from 'react-awesome-reveal';

let data = [
  {
    img: "https://www.youtube.com/embed/POQex5wF-9A?si=f6gbJQWDfYBQrn9S"
  },
  {
    img: "https://www.youtube.com/embed/Mq8zNon8SFY?si=Tdasn7--eLouscko"
  },
  {
    img: "https://www.youtube.com/embed/GbpcBG2395M?si=Teb0_LJHvHvCairy"
  },
  {
    img: "https://www.youtube.com/embed/e5p238fTDO0?si=thz5mhGMQhBHsiBS"
  }
];
let data2=[
  {
    img:require("../Images/image1.1.png")
  },
  {
    img:require("../Images/image1.png")
  },
  {
    img: require("../Images/Picture1.png")
  },
  {
    img: require("../Images/Picture2.jpg")
  }
];
var settings = {
  className: "center",
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow:2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: false,
        dots:true
      }
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        dots:true
      }
    }
  ]
};
var settings1 = {
  centerMode: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        dots: true
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  const arrowRef2 = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} />
  ))
  let sliderProject2 = data2.map((item) => (
    <Project2 item={item} />
  ))
  return (
    <>
      <Container>
        <Slider ref={arrowRef} {...settings}>
          {sliderProject}
        </Slider>
        <Buttons >
          <button 
            onClick={() => arrowRef.current.slickPrev()}
            className='back btn' ><FaArrowCircleLeft /></button>
          <button
            onClick={() => arrowRef.current.slickNext()}
            className='next btn'><FaArrowCircleRight/></button>
        </Buttons>
      </Container>
      <Zoom>
        <h1 className='gallery-head'>Recent <span className="green">Photo</span></h1>
      </Zoom>
      <Contain>
        <Slider  className="Gallery" ref={arrowRef2}{...settings1}>
            {sliderProject2}
        </Slider>
        <Buttons>
          <button
            onClick={() => arrowRef2.current.slickPrev()}
            className='back btn2' ><FaArrowCircleLeft /></button>
          <button
            onClick={() => arrowRef2.current.slickNext()}
            className='next btn2'><FaArrowCircleRight /></button>
        </Buttons>
      </Contain>
    </>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: black;
    border: none;
    position: absolute;
    top: 45%;
    font-size:2rem;
  }

  .back{
    left: -1.9rem;
  }
 .next{
  right:-1.9rem;
 }
`