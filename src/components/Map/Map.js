import { Box } from '@mui/material'
import React from 'react'

const Map = () => {
  return (
    <Box className='map-section'>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.234934139702!2d80.15727127507732!3d13.020705787299203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261cffbbd6205%3A0x23a887bf589c3557!2sZnifa%20Technologies%20Private%20Ltd!5e0!3m2!1sen!2sin!4v1708524766427!5m2!1sen!2sin"
              className="map-frame"
            ></iframe>
            <style>
              {`.mapouter{position:relative;height:400px;width:100%;background:#fff;}
                .mapouter a{color:#fff !important;position:absolute !important;top:0 !important;z-index:0 !important;}
                .gmap_canvas{overflow:hidden;height:400px;width:100%}
                .gmap_canvas iframe{position:relative;z-index:2}`}
            </style>
          </div>
        </div>
    </Box>
  )
}

export default Map