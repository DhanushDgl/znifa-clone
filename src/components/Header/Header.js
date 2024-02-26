import { Box, Container, List, ListItem } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EastIcon from '@mui/icons-material/East';


const Header = ({data}) => {

  const [isActive, setIsActive] = useState(false);
  const [isMegaActive, setIsMegaActive] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  
  const [isServicesActive, setIsServicesActive] = useState(false);
  const [isProductsActive, setIsProductsActive] = useState(false);
  const [isCompanyActive, setIsCompanyActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMegaActive(!isMegaActive);
  };

  const handleDotInnerClick = () => {
    setIsActive(!isActive);
  };

  const toggleDropServices = () => {
    setIsServicesActive(!isServicesActive);
  };

  const toggleDropProducts = () => {
    setIsProductsActive(!isProductsActive);
  };

  const toggleDropCompany = () => {
    setIsCompanyActive(!isCompanyActive);
  };

  const pageServices = () => {
     setActiveLink('services-page-active-link'); 
  };

  const handleMouseEnter = (e) => {
    const button = e.currentTarget;
    const parentOffset = button.getBoundingClientRect();
    const relX = e.pageX - parentOffset.left;
    const relY = e.clientY - parentOffset.top;

    const span = button.getElementsByTagName("span")[0];

    span.style.top = relY + "px";
    span.style.left = relX + "px";
};

 
  return (
    <>
      <Box  className={`header-section ${isSticky ? 'sticky' : ''}`}>
        <Box className='header-main' >
          <Container className='header-container' >
            <Box className='header-content' >
              <Link href='/' className='header-logo'>
                <Image src={data.logo} fill className='header-logo-image' priority alt='logo' />
              </Link>
              <Box className='header-menu-bar' >
                <Link href='/' className={`menu-bar-reveal ${isMegaActive ? 'menu-bar-reveal-active' : ''}`} onClick={(e) => { e.preventDefault(); toggleMenu(); }}>
                  <span>
                    <span>
                      <span>

                      </span>
                    </span>
                  </span>
                </Link>
                <Link href='/' className={`menu-bar-cross ${isMegaActive ? 'menu-bar-cross-active' : ''}`} onClick={(e) => { e.preventDefault(); toggleMenu(); }}>
                X
                </Link>
                <Box className={`mega-menu ${isMegaActive ? 'mega-menu-active' : ''}`}>
                  <List className='mega-menu-list'>
                    <ListItem className='mega-menu-list-item'  onClick={toggleDropServices}  >
                      <span className='mega-menu-list-link' >Services</span>
                      <List className={`mega-drop-list ${isServicesActive ? 'mega-drop-list-active' : ''}`} >
                        <ListItem className='mega-drop-list-item' >
                          <Link href='/services' className='mega-drop-list-link'>
                          Custom Build Application Development
                          </Link>
                        </ListItem>
                        <ListItem className='mega-drop-list-item' >
                          <Link href='/services' className='mega-drop-list-link'>
                          Single-Sign On(Keycloak)
                          </Link>
                        </ListItem>
                        <ListItem className='mega-drop-list-item' >
                          <Link href='/services' className='mega-drop-list-link'>
                          Application Support
                          </Link>
                        </ListItem>
                        <ListItem className='mega-drop-list-item' >
                          <Link href='/services' className='mega-drop-list-link'>
                          Independent Verification and Validation(Testing)
                          </Link>
                        </ListItem>
                        <ListItem className='mega-drop-list-item' >
                          <Link href='/services' className='mega-drop-list-link'>
                          Mobile App Development
                          </Link>
                        </ListItem>
                        <ListItem className='mega-drop-list-item' >
                          <Link href='/services' className='mega-drop-list-link'>
                          IT Consulting
                          </Link>
                        </ListItem>
                      </List>
                      <Link href='/' className={`mega-expand ${isServicesActive ? 'mega-expand-plus-active' : ''}`}>+</Link>
                      <Link href='/' className={`mega-expand ${isServicesActive ? 'mega-expand-minus-active' : ''}`} >-</Link>
                    </ListItem>
                    <ListItem className='mega-menu-list-item' onClick={toggleDropProducts}  >
                      <span className='mega-menu-list-link' >Products</span>
                      <List  className={`mega-drop-list ${isProductsActive ? 'mega-drop-list-active' : ''}`}>
                        <ListItem className='mega-drop-list-item' >
                          <Link href='/products' className='mega-drop-list-link'>
                          ZCRM
                          </Link>
                        </ListItem>
                        <ListItem className='mega-drop-list-item' >
                          <Link href='/products' className='mega-drop-list-link'>
                          ZHRMS
                          </Link>
                        </ListItem>
                      </List>
                      <Link href='/' className={`mega-expand ${isProductsActive ? 'mega-expand-plus-active' : ''}`}>+</Link>
                      <Link href='/' className={`mega-expand ${isProductsActive ? 'mega-expand-minus-active' : ''}`} >-</Link>
                    </ListItem>
                    <ListItem className='mega-menu-list-item' >
                      <Link href='/platform' className='mega-menu-list-link' >Platforms</Link>
                    </ListItem>
                    <ListItem className='mega-menu-list-item' onClick={toggleDropCompany}  >
                      <span className='mega-menu-list-link' >Company</span>
                      <List className={`mega-drop-list ${isCompanyActive ? 'mega-drop-list-active' : ''}`}>
                        <ListItem className='mega-drop-list-item' >
                          <Link href='/company' className='mega-drop-list-link'>
                          About Us
                          </Link>
                        </ListItem>
                        <ListItem className='mega-drop-list-item' >
                          <Link href='/company' className='mega-drop-list-link'>
                          Careers
                          </Link>
                        </ListItem>
                        <ListItem className='mega-drop-list-item' >
                          <Link href='/company' className='mega-drop-list-link'>
                          Blog
                          </Link>
                        </ListItem>
                        <ListItem className='mega-drop-list-item' >
                          <Link href='/company' className='mega-drop-list-link'>
                          Case Studies
                          </Link>
                        </ListItem>
                      </List>
                      <Link href='/' className={`mega-expand ${isCompanyActive ? 'mega-expand-plus-active' : ''}`}>+</Link>
                      <Link href='/' className={`mega-expand ${isCompanyActive ? 'mega-expand-minus-active' : ''}`} >-</Link>
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box className='header-link-box' >
                <List className='header-list' >
                  <ListItem className='header-list-item' >
                    <Link href='/services' className={`header-list-link ${data.linkServices ? 'header-color-link-active' : ''}`} onClick={pageServices}>
                    Services 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"/></svg>
                    </Link>
                    <List className='dropdown-list' >
                      <ListItem className='dropdown-list-item'>
                        <Link href='/' className='dropdown-list-link'>Custom Build Application Development</Link>
                      </ListItem>
                      <ListItem className='dropdown-list-item'>
                        <Link href='/' className='dropdown-list-link'>Single-Sign On(Keycloak)</Link>
                      </ListItem>
                      <ListItem className='dropdown-list-item'>
                        <Link href='/' className='dropdown-list-link'>Application Support</Link>
                      </ListItem>
                      <ListItem className='dropdown-list-item'>
                        <Link href='/' className='dropdown-list-link'>Independent Verification and Validation(Testing)</Link>
                      </ListItem>
                      <ListItem className='dropdown-list-item'>
                        <Link href='/' className='dropdown-list-link'>Mobile App Development</Link>
                      </ListItem>
                      <ListItem className='dropdown-list-item'>
                        <Link href='/' className='dropdown-list-link'>IT Consulting</Link>
                      </ListItem>
                    </List>
                  </ListItem>
                  <ListItem className='header-list-item' >
                    <Link href='/products' className={`header-list-link ${data.linkProducts ? 'header-color-link-active' : ''}`}>
                    Products
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"/></svg>
                    </Link>

                    <List className='dropdown-list' >
                      <ListItem className='dropdown-list-item'>
                        <Link href='/' className='dropdown-list-link'>ZCRM</Link>
                      </ListItem>
                      <ListItem className='dropdown-list-item'>
                        <Link href='/' className='dropdown-list-link'>ZHRMS</Link>
                      </ListItem>
                    </List>
                  </ListItem>
                  <ListItem className='header-list-item' >
                  <ListItem className='header-list-item'>
                   <Link href='/platform' className={`header-list-link ${data.linkPlatform ? 'header-color-link-active' : ''}`}>
                      Platforms
                    </Link>
                  </ListItem>

                  </ListItem>
                  <ListItem className='header-list-item' >
                    <Link href='/company' className={`header-list-link ${data.linkCompany ? 'header-color-link-active' : ''}`} >
                    Company
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"/></svg>
                    </Link>
                    <List className='dropdown-list' >
                      <ListItem className='dropdown-list-item'>
                        <Link href='/' className='dropdown-list-link'>About Us</Link>
                      </ListItem>
                      <ListItem className='dropdown-list-item'>
                        <Link href='/' className='dropdown-list-link'>Careers</Link>
                      </ListItem>
                      <ListItem className='dropdown-list-item'>
                        <Link href='/' className='dropdown-list-link'>Blog</Link>
                      </ListItem>
                      <ListItem className='dropdown-list-item'>
                        <Link href='/' className='dropdown-list-link'>Case Studies</Link>
                      </ListItem>
                    </List>
                  </ListItem>
                </List>

                <Box className='header-btn-box' > 
                  <Link href='/contact' className='header-contact-link'  onMouseEnter={handleMouseEnter} >
                  <i></i>
                    Contact Us 
                   <span></span>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box className='contact-btn-responsive' >
          <Container className='contact-btn-responsive-container' >
            <Box className='dot-menu' >
              <Box className='dot-inner' onClick={handleDotInnerClick} >
                <Box className='dot-inner-circle'></Box>
                <Box className='dot-inner-circle'></Box>
                <Box className='dot-inner-circle'></Box>
              </Box>
            </Box>
            <Box className={`dot-container-active ${isActive ? 'active-dot-container' : ''}`} >
              <Box className='dot-container-active-inner' >
                <Box className='dot-container-active-content' >
                <Link href='/contact' className='header-contact-link'  onMouseEnter={handleMouseEnter} >
                  <i></i>
                    Contact Us 
                   <span></span>
                </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Header