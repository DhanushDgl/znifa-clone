import { Box, Button, Grid, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = ({data}) => {
  return (
    <Box className='footer-section'>
        <Box className='footer-container' >
            <Box className='footer-grid-box' >
                <Grid container >
                    <Grid item md={3} sm={6} xs={12} className='footer-grid-item'>
                        <Box className='footer-content-one' >
                            <Link href='/' className='footer-logo' >
                                <Image src={data.logo} fill className='footer-logo-img' priority alt='footer-logo' />
                            </Link>
                            <List className='footer-social-list' >
                                <ListItem className='footer-list-item'>
                                    <Link href='/' className='footer-social-link' >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                                    </Link>
                                </ListItem>
                                <ListItem className='footer-list-item'>
                                    <Link href='/' className='footer-social-link' >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                                    </Link>
                                </ListItem>
                                <ListItem className='footer-list-item'>
                                    <Link href='/' className='footer-social-link' >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                    </Link>
                                </ListItem>
                                <ListItem className='footer-list-item'>
                                    <Link href='/' className='footer-social-link' >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                                    </Link>
                                </ListItem>
                                <ListItem className='footer-list-item'>
                                    <Link href='/' className='footer-social-link' >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                                    </Link>
                                </ListItem>
                                <ListItem className='footer-list-item'>
                                   <Box className='footer-follow-container' >
                                        <Box className='footer-follow-box-one' >
                                            <Box className='follow-linked-in-box' >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='footer-follow-logo' ><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                                            </Box>
                                            <Button className='footer-follow-btn'  style={{ width: '38px' }} >
                                                Follow
                                            </Button>
                                        </Box>
                                        <Box className='footer-followers-count'>
                                            1,359
                                        </Box>
                                   </Box>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className='footer-grid-item'>
                        <Box className='footer-link-box' >
                            <Typography className='footer-head' >Explore</Typography>
                            <List className='footer-link-list'>
                                <ListItem className='footer-link-list-item' >
                                    <Link href='/'>Home</Link>
                                </ListItem>
                                <ListItem className='footer-link-list-item' >
                                    <Link href='/'>About</Link>
                                </ListItem>
                                <ListItem className='footer-link-list-item' >
                                    <Link href='/'>Services</Link>
                                </ListItem>
                                <ListItem className='footer-link-list-item' >
                                    <Link href='/'>Products</Link>
                                </ListItem>
                                <ListItem className='footer-link-list-item' >
                                    <Link href='/'>Platform</Link>
                                </ListItem>
                                <ListItem className='footer-link-list-item' >
                                    <Link href='/'>Contact</Link>
                                </ListItem>
                                <ListItem className='footer-link-list-item' >
                                    <Link href='/'>Blog</Link>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className='footer-grid-item'>
                        <Typography className='footer-head'>Office</Typography>
                        <List className='footer-contact-info-list' >
                            <ListItem className='footer-contact-info-list-item' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"/><path fill="currentColor" d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819M12 4c3.309 0 6 2.691 6 6.005c.021 4.438-4.388 8.423-6 9.73c-1.611-1.308-6.021-5.294-6-9.735c0-3.309 2.691-6 6-6"/></svg>
                            Near HDFC Bank, Annai Velankanni Nagar Phase II Mugalivakkam, Chennai - 600125
                            </ListItem>
                            <ListItem className='footer-contact-info-list-item' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59a7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43A15.28 15.28 0 0 0 6.3 17.7A15.28 15.28 0 0 0 16.57 22M6 5.41L8.59 8L7.3 9.29a1 1 0 0 0-.3.91a10.12 10.12 0 0 0 2.3 4.5a10.08 10.08 0 0 0 4.5 2.3a1 1 0 0 0 .91-.27L16 15.41L18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7"/><path fill="currentColor" d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"/></svg>
                            <Link href="tel:+919551585585">+91 9551585585</Link>
                            </ListItem>
                            <ListItem className='footer-contact-info-list-item' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m0 2v.511l-8 6.223l-8-6.222V6zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044L20.002 18z"/></svg>
                            <Link href="mailto:info@znifa.com">info@znifa.com</Link>
                            </ListItem>
                            <ListItem className='footer-contact-info-list-item' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M20 3H4c-1.103 0-2 .897-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5c0-1.103-.897-2-2-2zm-1 9h-3.142c-.446 1.722-1.997 3-3.858 3s-3.412-1.278-3.858-3H4V5h16v7h-1z" fill="currentColor"/></svg>
                            <Link href="tel:+919551585585">+91 9551585585</Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className='footer-grid-item'>
                        <Typography className='footer-head'>Office in US </Typography>
                        <List className='footer-contact-info-list' >
                            <ListItem className='footer-contact-info-list-item' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"/><path fill="currentColor" d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819M12 4c3.309 0 6 2.691 6 6.005c.021 4.438-4.388 8.423-6 9.73c-1.611-1.308-6.021-5.294-6-9.735c0-3.309 2.691-6 6-6"/></svg>
                            23014 SYCAMORE FARM DR CLARKSBURG, MD,20871
                            </ListItem>
                            <ListItem className='footer-contact-info-list-item' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59a7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43A15.28 15.28 0 0 0 6.3 17.7A15.28 15.28 0 0 0 16.57 22M6 5.41L8.59 8L7.3 9.29a1 1 0 0 0-.3.91a10.12 10.12 0 0 0 2.3 4.5a10.08 10.08 0 0 0 4.5 2.3a1 1 0 0 0 .91-.27L16 15.41L18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7"/><path fill="currentColor" d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"/></svg>
                            <Link href="tel:+1 240-345-6314">+1 240-345-6314</Link>
                            </ListItem>
                            <ListItem className='footer-contact-info-list-item' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m0 2v.511l-8 6.223l-8-6.222V6zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044L20.002 18z"/></svg>
                            <Link href="mailto:info@znifa.com">info@znifa.com</Link>
                            </ListItem>
                            <ListItem className='footer-contact-info-list-item' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M20 3H4c-1.103 0-2 .897-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5c0-1.103-.897-2-2-2zm-1 9h-3.142c-.446 1.722-1.997 3-3.858 3s-3.412-1.278-3.858-3H4V5h16v7h-1z" fill="currentColor"/></svg>
                            <Link href="tel:+1 240-345-6314">+1 240-345-6314</Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        <Box className='footer-map' >
            <Image src={data.map} fill className='footer-map-image' priority alt='footer-animation' />
        </Box>
    </Box>
  )
}

export default Footer