import { Box, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Title = ({data}) => {
  return (
    <>
    <Box className='page-title-section'>
      <Box className='page-title-container'>
        <Box className='page-title-content'>
          <Typography className='page-title-head' >{data.head}</Typography>
          <List className='page-title-list'>
            <ListItem className='page-title-list-item'>
              <Link href='/' className='page-title-link page-title-link-first' >{data.link1}</Link>
            </ListItem>
            <ListItem className='page-title-list-item'>
              <Link href='/' className='page-title-link' >{data.link2}</Link>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box className='shape-img1'>
        <Image src={data.shape1} fill className='shape-image-one' priority alt='design' />
      </Box>
      <Box className='shape-img2'>
        <Image src={data.shape2} fill className='shape-image-two' priority alt='design' />
      </Box>
      <Box className='shape-img3'>
        <Image src={data.shape3} fill className='shape-image-three' priority alt='design' />
      </Box>
    </Box>
    </>
  )
}

export default Title