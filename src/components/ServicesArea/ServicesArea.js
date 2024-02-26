import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServicesArea = ({data}) => {
  return (
    <Box className='services-area-section' >
        <Box className='services-area-container' >
            <Grid container  className='services-grid-container'>
            {data.map((service, index) => (
                <Grid item md={4} sm={6} className='services-grid-item' key={index}>
                    <Box className='services-content'>
                        <Box className='services-icon'>
                            <Image src={service.icon} fill className='services-icon-image' priority alt='icon' />
                        </Box>
                        <Typography className='services-head'>
                        <Link href='/' className='services-head-link'>
                            {service.title}
                        </Link>
                        </Typography>
                        <Typography className='services-para'>{service.description}</Typography>
                        <Link href='/' className='read-more-link'>
                            Read More<i></i>
                        </Link>
                    </Box>
                </Grid>
            ))}
            </Grid>
        </Box>
        <Box className='circle-background' >
            <Image src='/assets/images/circle.png' fill className='circle-background-image' priority alt='design' />
        </Box>
        <Box className='lines' >
            <Box className='line' ></Box>
            <Box className='line' ></Box>
            <Box className='line' ></Box>
            <Box className='line' ></Box>
            <Box className='line' ></Box>
        </Box>
    </Box>
  )
}

export default ServicesArea