import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductArea = ({data}) => {
  return (
    <>
    <Box className='product-area-section' >
        <Box className='product-area-container' >
            <Grid container className='product-area-grid-container' >
                <Grid item md={2} sm={6} className='product-area-grid-item'></Grid>
                <Grid item md={4} sm={6} className='product-area-grid-item'>
                    <Box className='product-area-content' >
                        <Box className='product-area-icon'>
                            <Image src={data.icon1} fill className='product-area-icon-image' priority alt='icon'/>
                        </Box>
                        <Typography className='product-area-head' >
                            <Link href='/' className='product-area-head-link'>ZCRM </Link>
                        </Typography>
                        <Typography className='product-area-para'>
                        Keeping strong Leads and Deal pipeline is the key for any business growth and a simple and smart ...
                        </Typography>
                        <Link href='/' className='product-area-read'>
                            <i></i>
                            Read More
                        </Link>
                        <Box className='product-area-shape1'>
                            <Image src={data.shape1} fill className='product-area-shape1-img' priority alt='design' />
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} className='product-area-grid-item'>
                <Box className='product-area-content' >
                        <Box className='product-area-icon'>
                            <Image src={data.icon2} fill className='product-area-icon-image'  priority alt='icon' />
                        </Box>
                        <Typography className='product-area-head' >
                            <Link href='/' className='product-area-head-link'>ZHRMS</Link>
                        </Typography>
                        <Typography className='product-area-para'>
                        Power of a HRMS system should be experienced by religiously using to capture all the details of ...  
                        </Typography>
                        <Link href='/' className='product-area-read'>
                            <i></i>
                            Read More
                        </Link>
                        <Box className='product-area-shape2'>
                            <Image src={data.shape1} fill className='product-area-shape1-img '  priority alt='design' />
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={2} sm={6} className='product-area-grid-item'></Grid>
            </Grid>
        </Box>
    </Box>
    </>
  )
}

export default ProductArea