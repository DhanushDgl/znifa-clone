import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Whatsapp = () => {
  return (
    <>
        <Link href='https://api.whatsapp.com/send?phone=91 9841282411&amp;text=Welcome to Znifa Technologies.' className='whatsapp-link'>
            <Box className='whatsapp-box'>
                <i class="fa fa-whatsapp "></i>
            </Box>
        </Link>
    </>
  )
}

export default Whatsapp