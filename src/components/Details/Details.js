import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Details = ({data}) => {
  return (
    <Box className='deatils-section' >
        <Box className='details-container' >
            <Box className='details-title' >
            <span className='details-sub-title' >
            <Image src={data.icon} fill className='deatils-sub-icon' />
           {data.head}
            </span>
            </Box>
            <Grid container className='details-grid'>
                <Grid item md={12} className='details-grid-item' >
                    <Box className='deatils-para-box' >
                        <Typography className='details-para' >
                        eCommerce Platform for books with four hierarchical structure from category to book type and intuitive search, selection options. Integration with leading service providers for Delivery, SMS and Payment gateway to choose based on the customer choice Control Panel with a dashboard for analytical reports and dynamic updates. Responsive for Mobile and Tablets. Inventory management and different login for bulk purchase clients and distributors.
                        </Typography>
                    </Box>
                    <br></br>
                    <Box className='details-image-box' >
                        <Image src={data.image1} fill className='details-img' priority alt='image' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default Details