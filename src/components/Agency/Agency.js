import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components';

const HoverEffectBox = styled.div`
  position:relative;
  perspective: ${(props) => props.perspective}px;
  transition: transform 0.2s ease;
  transform-style: preserve-3d;
  will-change: transform;
  z-index:100;
  overflow:clip;

  &:hover {
    transform: perspective(${(props) => props.perspective}px) rotateX(${(props) => props.rotateY}deg) rotateY(${(props) => props.rotateX}deg) scale3d(1, 1, 1);
    z-index:100;
  }
`;

const Agency = ({data}) => {

    const handleMouseEnter = (e) => {
        const button = e.currentTarget;
        const parentOffset = button.getBoundingClientRect();
        const relX = e.pageX - parentOffset.left;
        const relY = e.clientY - parentOffset.top;
    
        const span = button.getElementsByTagName("span")[0];
    
        span.style.top = relY + "px";
        span.style.left = relX + "px";
    };
    

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
    
  return (
    <>
    <Box className='agency-section' >
        <Box className='agency-container' >
            <Grid container className='agency-grid' >
                <Grid item md={5} sm={12} className='agency-grid-item'>
                    <Box className='agency-content'>
                        <span className='agency-sub-title'>Platform</span>
                        <Typography className='agency-title' >eCommerce Platform</Typography>
                        <Typography className='agency-para'>
                        Today, eCommerce/digital influences up to 56% of in-store purchases, while eCommerce itself represents almost 10% of U.S. retail sales and that figure is growing by nearly 15% annually. Digital commerce has gone beyond “buying something on a website” to a series of interactions that rely on technology to move goods. As these figures suggest, stores can no longer survive without being present on their customers’ preferred channels; retailers need to fully integrate digital commerce to thrive. Znifa has expertise in leading eCommerce B2B and B2C platforms such as Magento, BigCommerce, WooCommerce, Wix, Shopify, Nopcommerce, etc.,
                        </Typography>
                        <Box className='agency-btn-box' >
                            <Link href='/' className='agency-btn-link'  onMouseEnter={handleMouseEnter}>
                            <span ></span>
                                <i></i>
                                Get Started
                               
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={7} sm={12} className='agency-grid-item'>
                <HoverEffectBox perspective={perspective}
              rotateX={rotation.rotateX}
              rotateY={rotation.rotateY}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave} className='banner-hover-effect-box agency-hover-effect-box'>
              
                  <Image src={data.image1} fill className='agency-image' priority alr='image'/>
              
              </HoverEffectBox>
                </Grid>
            </Grid>
        </Box>
    </Box>
    </>
  )
}

export default Agency