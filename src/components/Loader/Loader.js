import { Box } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <>
    <Box className='loader-section'>
        <Box className='loading' >
            <Box className='circle-spin' >
                <Box className='second-circle' ></Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Loader