import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';

const Top = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setIsScrolled(scrollY > 100);
      };

      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <>
        <Box  className={`goto-top ${isScrolled ? 'goto-top-active' : ''}`} onClick={handleGoToTop}>
            <i className='goto-icon'></i>
        </Box>
    </>
  )
}

export default Top