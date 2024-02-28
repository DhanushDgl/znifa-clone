import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components';

import { userValidation } from '../Validation/Validation';

const HoverEffectBox = styled.div`
  position:relative;
  perspective: ${(props) => props.perspective}px;
  transition: transform 0.2s ease;
  transform-style: preserve-3d;
  margin-top:20px;
  will-change: transform;
  z-index:100;
  overflow:clip;

  &:hover {
    transform: perspective(${(props) => props.perspective}px) rotateX(${(props) => props.rotateY}deg) rotateY(${(props) => props.rotateX}deg) scale3d(1, 1, 1);
    z-index:100;
  }
`;

const ContactArea = ({data}) => {
  const [buttonPressed, setButtonPressed] = useState(false);
    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const perspective = 300; 
  const threshold = 15;

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (threshold / 2 - horizontal * threshold).toFixed(2);
    const rotateY = (vertical * threshold - threshold / 2).toFixed(2);

    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleChange = async (event) => {
    const { name, value } = event.target;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    
  
    if (value.trim() === '') {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `Please enter your ${name === 'phone' ? 'phone number' : name} `,
      }));
    } else {
      try {
        await userValidation.validateAt(name, { [name]: value });
        setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      } catch (error) {
        setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
      }
  
      if (name === 'phone' && value.length > 0) {
        if (!/^\d+$/.test(value)) {
          setValidationErrors((prevErrors) => ({
            ...prevErrors,
            [name]: 'The Phone field must contain only digits',
          }));
        }
      }
    }
  };
  
  const handleFocus = async (fieldName) => {
    if (!submitClicked && focusedField !== fieldName) {
      setFocusedField(fieldName);

      try {
        await userValidation.validateAt(fieldName, { [fieldName]: formData[fieldName] });
        setValidationErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
      } catch (error) {
        setValidationErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error.message }));
      }
    }
  };

  const handleBlur = async () => {
    if (!submitClicked && focusedField !== null) {
      setFocusedField(null);

      try {
        await userValidation.validateAt(focusedField, { [focusedField]: formData[focusedField] });
        setValidationErrors((prevErrors) => ({ ...prevErrors, [focusedField]: '' }));
      } catch (error) {
        setValidationErrors((prevErrors) => ({ ...prevErrors, [focusedField]: error.message }));
      }
    }
  };


  const createUser = async (event) => {
    event.preventDefault();
    setSubmitClicked(true);
  
    try {
      await userValidation.validate(formData, { abortEarly: false });
      setValidationErrors({});
      console.log('Form is valid. Submitting...');
    } catch (error) {
      const newValidationErrors = {};
  
      error.inner.forEach((validationError) => {
        newValidationErrors[validationError.path] = validationError.message;
      });
      if (!formData.phone.trim()) {
        newValidationErrors['phone'] = 'Please enter your phone number';
      } else {
        if (!/^\d+$/.test(formData.phone)) {
          newValidationErrors['phone'] = 'The Phone field must contain only digits';
        }
      }
  
      setValidationErrors(newValidationErrors);
      console.log('Validation Errors:', newValidationErrors);
    }
  };
  

  return (
    <>
    <Box className='contact-area-section'>
        <Box className='contact-area-container' >
            <Box className='contact-section-title' >
                <Box className='contact-sub-title'>
                    <Image src={data.icon} fill className='contact-sub-icon-rotate' priority alt='design'/>
                    Get in Touch
                </Box>
                <Typography className='contact-area-head' >Ready to Get Started?</Typography>
            </Box>
            <Grid container className='contact-area-grid' >
                <Grid item md={6} className='contact-area-grid-item' >
                <HoverEffectBox perspective={perspective}
              rotateX={rotation.rotateX}
              rotateY={rotation.rotateY}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave} className='banner-hover-effect-box'>
            
                  <Image src={data.image} fill className='contact-area-image' priority alt='image'/>
             
              </HoverEffectBox>
                </Grid>
                <Grid item md={6} className='contact-area-grid-item'>
                    <Box className='contact-form' >
                        <form id='contactForm'  onSubmit={createUser} className={`${(submitClicked && Object.keys(validationErrors).length > 0) ? 'animated' : ''}`}>
                            <Grid container className='contact-form-grid'>
                                <Grid md={12} sm={6} xs={12} item className='contact-form-grid-item' >
                                    <Box className='form-group'>
                                        <input type="text" name="name" class="form-control" id="name" required="" data-error="Please enter your name" placeholder="Your name"       onChange={handleChange} 
                                        onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}/>
                                         {validationErrors.name && (!focusedField || focusedField === 'name') && (
                      <Box className='error'>
                        <Typography className='error-message'>
                        Please enter your name
                        </Typography>
                      </Box>
                    )}
                                    </Box>
                                </Grid>
                                <Grid  md={12} sm={6} xs={12} item className='contact-form-grid-item' >
                                    <Box className='form-group'>
                                    <input type="email" name="email" class="form-control" required="" data-error="Please enter your valid email" placeholder="Your email address"    onChange={handleChange} 
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}/>
                        {validationErrors.email && (!focusedField || focusedField === 'email') && (
                      <Box className='error'>
                        <Typography className='error-message'>
                        Please enter your valid email
                        </Typography>
                      </Box>
                    )}
                                    </Box>
                                </Grid>
                                <Grid xs={12} item className='contact-form-grid-item' >
                                    <Box className='form-group'>
                                    <input type="text"  name="phone" class="form-control" id="phone" required="" data-error="Please enter your phone number" placeholder="Your phone number" onChange={handleChange} 
                      onFocus={() => handleFocus('phone')}
                      onBlur={handleBlur}/>
                       {validationErrors.phone && (!focusedField || focusedField === 'phone') && (
                    <Box className='error'>
                      <Typography className='error-message'>
                     {validationErrors.phone}
                      </Typography>
                    </Box>
                    )}
                                    </Box>
                                </Grid>
                                <Grid xs={12} item className='contact-form-grid-item' >
                                    <Box className='form-group'>
                                    <textarea name="message" id="message" class="form-control" cols="30" rows="6" required="" data-error="Please enter your message" placeholder="Write your message..."  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}></textarea>
                  {validationErrors.message && (!focusedField || focusedField === 'message') && (
                  <Box className='error'>
                    <Typography className='error-message'>
                      {validationErrors.message}
                    </Typography>
                  </Box>
                )}
                                    </Box>
                                </Grid>
                                <Grid sm={6} xs={12} item className='contact-form-grid-item captcha-group' >
                                <input type="text" class="form-control" name="captcha" id="captcha" placeholder="Enter captcha" required="" data-error="Please enter Captcha" onChange={handleChange}
    onFocus={() => handleFocus('captcha')}
    onBlur={handleBlur}/>
    {validationErrors.captcha && (!focusedField || focusedField === 'captcha') && (
    <Box className='error'>
      <Typography className='error-message'>
        {validationErrors.captcha}
      </Typography>
    </Box>
  )}
                                
                                </Grid>
                                <Grid sm={4} xs={12} item className='contact-form-grid-item captcha-group captcha-gropu-one' >
                                    <Image src={data.captcha} fill className='captcha-image' priority alt='captcha' />
                                </Grid>
                                <Grid sm={2} xs={12} item className='contact-form-grid-item captcha-group captcha-gropu-two' >
                                    <Image src={data.refresh} fill className='refresh-image' priority alt='refresh' />
                                </Grid>
                                <Grid sm={12} xs={12} item className='contact-form-grid-item' >
                                    <button className='contact-form-button' >
                                        <i></i>Send Message
                                    </button>
                                    {submitClicked && Object.keys(validationErrors).length > 0 && (
                <Box className='message-submit'>
                  Did you fill in the form properly?
                </Box>
              )}
                                </Grid>
                            </Grid>
                        </form> 
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
    </>
  )
}

export default ContactArea