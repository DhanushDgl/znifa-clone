import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HoverEffectBox = styled.div`
  position:relative;
  perspective: ${(props) => props.perspective}px;
  transition: transform 0.2s ease;
  transform-style: preserve-3d;
  will-change: transform;
  z-index:100;
  border-radius:50%;
  &:hover {
    transform: perspective(${(props) => props.perspective}px) rotateX(${(props) => props.rotateY}deg) rotateY(${(props) => props.rotateX}deg) scale3d(1, 1, 1);
    z-index:100;
  }
`;


const Banner = ({ data }) => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const perspective = 300; 
  const threshold = 15;

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (threshold / 2 - horizontal * threshold).toFixed(2);
    const rotateY = (vertical * threshold - threshold / 2).toFixed(2);

    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  const handleMouseEnter = (e) => {
    const button = e.currentTarget;
    const parentOffset = button.getBoundingClientRect();
    const relX = e.pageX - parentOffset.left;
    const relY = e.clientY - parentOffset.top;

    const span = button.getElementsByTagName("span")[0];

    span.style.top = relY + "px";
    span.style.left = relX + "px";
};


  const slider = useRef(null);

 
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3000,
    autoplay:false,
    autoplaySpeed: 3000,
    beforeChange: (currentSlide, nextSlide) => {
      if (currentSlide === null && nextSlide === 1 && slider.current) {
        slider.current.slickGoTo(0, true);
        slider.current.slickNext();
      }
    },
  };
  const handlePrev = () => {
    if (slider.current) {
      slider.current.slickPrev();
    }
  };
  
  const handleNext = () => {
    if (slider.current) {
      slider.current.slickNext();
    }
  };
  

  return (
    <Box className='banner-section'>
      <Box className='banner-section-main'>
      <Slider {...settings} ref={slider}>
      {data.map((item, index) => (
            <Box key={index} className='banner-content-box'>
              <Box className='banner-container'>
                <Grid container className='banner-grid'>
                  <Grid item md={6} className='banner-grid-item'>
                    <Box className='banner-main-content'>
                      <Typography className='banner-head h3'>{item.heading}</Typography>
                      <Typography className='banner-para'>{item.paragraph}</Typography>
                      <Box className='banner-btn-box'>
                        <Link href='/' className='banner-btn-link' onMouseEnter={handleMouseEnter}>
                          <span></span>
                          <i></i>
                          Get Started
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item md={6} className='banner-grid-item banner-grid-img-item'>
                    <HoverEffectBox
                      perspective={perspective}
                      rotateX={rotation.rotateX}
                      rotateY={rotation.rotateY}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      className='banner-hover-effect-box'>
                      <Link href='/' className='banner-image-link'>
                        <Image src={item.image} fill className='banner-image' priority alt='banner-image' />
                      </Link>
                    </HoverEffectBox>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          ))}
    
      </Slider>
      <Box className='banner-arrow-box' >
        <Box className='banner-btn banner-btn-left' onClick={handlePrev}>
          <Image src='/assets/images/bannerLeft.png' fill className='banner-arrow-img banner-arrow-left-img' priority alt='arrow' />
          <Image src='/assets/images/bannerLeftHover.png' fill className='banner-arrow-left-hover' priority alt='arrow'/>
        </Box>
        <Box className='banner-btn banner-btn-right' onClick={handleNext}>
          <Image src='/assets/images/bannerRight.png' fill className='banner-arrow-img banner-arrow-right-img' priority alt='arrow' />
          <Image src='/assets/images/bannerRightHover.png' fill className='banner-arrow-right-hover' priority  alt='arrow'/>
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default Banner;


