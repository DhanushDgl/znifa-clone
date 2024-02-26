import { Box, Grid, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = ({data,isProduct,isPlatform}) => {
  return (
    <Box className='about-section'>
        <Box className='about-container' >
            <Box className='about-grid' >
            <Grid container >
                <Grid item md={6} className={`about-grid-item ${isProduct ? 'product-about-grid-image' : ''}`}>
                    <Box className={`about-image-box ${isProduct ? 'product-about-image-box' : ''}`} >
                        <Image src={data.image1} fill className={`about-image ${isProduct ? 'product-about-image' : ''} ${isPlatform ? 'platform-about-image' : ''}`} />
                    </Box>
                </Grid>
                <Grid item md={6} className={`about-grid-item ${isProduct ? 'product-about-grid' : ''} ${isPlatform ? 'platform-about-grid' : ''}`}>
                    <Box className='about-content-box' >
                        <span className='about-sub-title' >
                            <Image src={data.subImage} fill className='about-sub-img' priority alt='images' />
                            {data.subTitle}
                        </span>
                        <Typography className='about-content-para p'>
                       {data.content}
                        </Typography>
                        <List  className={`about-list ${isProduct ? 'product-list' : ''}`}>
                        {data.servicesData.map((service, index) => (
                            <ListItem className='about-list-item' key={index}>
                                <Link href='/' className='about-link'>
                                <span>
                                    <Box className='about-tick-box'>
                                        <Image src='/assets/images/tick.png' fill className='about-tick-img about-before-hover' priority alt='tick'/>
                                        <Image src='/assets/images/wtick.png' fill className='about-tick-img about-after-hover' priority alt='tick'/>
                                    </Box>
                                    {service}
                                </span>
                                </Link>
                            </ListItem>
                        ))}
                        </List>
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </Box>
    </Box>
  )
}

export default About