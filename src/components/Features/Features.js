import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Features = ({data}) => {
  const [showExtraPara1, setShowExtraPara1] = useState(false);
  const [showExtraPara2, setShowExtraPara2] = useState(false);
  const [learnMoreClicked1, setLearnMoreClicked1] = useState(false);
  const [learnMoreClicked2, setLearnMoreClicked2] = useState(false);

  const handleReadMoreClick = (e, gridNumber) => {
    e.preventDefault();
    if (gridNumber === 1) {
      setShowExtraPara1(!showExtraPara1);
      setLearnMoreClicked1(true);
    } else if (gridNumber === 2) {
      setShowExtraPara2(!showExtraPara2);
      setLearnMoreClicked2(true);
    } 
  };

 
  return (
    <Box className='features-section' >
      <Box className='features-container'>
        <Box className='features-title'>
          <Typography className='features-head' > Our Features
          <Box className='features-overlay'  >

          </Box>
          </Typography>
        </Box>
        <Grid container className='features-grid' >
          <Grid item md={4} sm={6} className='features-grid-item' >
            <Box className='features-content-box'>
              <Box className='features-icon'>
                <Image src={data.icon1} fill className='features-icon-image'  priority alt='icon' />
              </Box>
              <Typography className='features-card-head'>
                <Link href='/' className='features-card-head-link' >Customizable for any business</Link>
              </Typography>
              <Typography className='features-card-para'>
              Znifa eCommerce portal built such a way that easily customizable to any business and manage the by the simple and effective admin. The product &nbsp;
              {!showExtraPara1 && (
                  <span id="dots4" className='features-dots'>...</span>
                )}
              {showExtraPara1 && (
                  <span>
                   definition is designed to accommodate various parameters of the products and bundled with categories and subcategories.
                  </span>
                )}
              </Typography>
              <Link href='/'className='features-read-more' onClick={(e) => handleReadMoreClick(e, 1)}> 
                <i></i>
                {learnMoreClicked1 ? (showExtraPara1 ? 'Read less' : 'Read more') : 'Learn More'}
              </Link>
              <Box className='features-shape' >
                <Image src={data.shape} fill className='features-shape-image'  priority alt='design' /> 
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} className='features-grid-item' >
            <Box className='features-content-box'>
              <Box className='features-icon features-icon-two'>
                <Image src={data.icon2} fill className='features-icon-image features-icon-image-two'  priority alt='icon'/>
              </Box>
              <Typography className='features-card-head'>
                <Link href='/' className='features-card-head-link' >Intuitive admin panel </Link>
              </Typography>
              <Typography className='features-card-para'>
              An intuitive admin panel help the business owners effectively manage the portal and monitor the sales from dashboards and reports. Admin panel can also be used as inventory&nbsp;
              {!showExtraPara2 && (
                  <span id="dots4" className='features-dots'>...</span>
                )}
              {showExtraPara2 && (
                  <span>
                    management and move products between offline inventory to online vice versa.
                  </span>
                )}
              </Typography>
              <Link href='/'className='features-read-more' onClick={(e) => handleReadMoreClick(e, 2)}> 
                <i></i>
                {learnMoreClicked2 ? (showExtraPara2 ? 'Read less' : 'Read more') : 'Learn More'}
              </Link>
              <Box className='features-shape' >
                <Image src={data.shape} fill className='features-shape-image ' priority alt='design' /> 
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} className='features-grid-item' >
            <Box className='features-content-box'>
              <Box className='features-icon features-icon-three'>
                <Image src={data.icon3} fill className='features-icon-image features-icon-image-three' priority alt='icon' />
              </Box>
              <Typography className='features-card-head'>
                <Link href='/' className='features-card-head-link' >Seamless Integration</Link>
              </Typography>
              <Typography className='features-card-para'>
              Znifa eCommerce portal has seamless integration with any payment gateway, SMS Service provider and Logistic provider. This also integrates with downstream system viz Invoice, Accounting etc., &nbsp;
              </Typography>
              <Box className='features-shape' >
                <Image src={data.shape} fill className='features-shape-image' priority alt='design' /> 
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Features