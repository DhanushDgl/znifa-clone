import ContactArea from '@/components/ContactArea/ContactArea'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Loader from '@/components/Loader/Loader'
import Map from '@/components/Map/Map'
import Title from '@/components/Title/Title'
import Top from '@/components/Top/Top'
import Whatsapp from '@/components/Whatsapp/Whatsapp'
import React, { useEffect, useState } from 'react'

const headerData={
    logo:'https://www.znifa.com/assets/img/znifa.png',
}

const footerData={
    logo:'https://www.znifa.com/assets/img/znifa.png',
    map:'https://www.znifa.com/assets/img/footer-map.png',
}

const titleData={
  shape1:'https://www.znifa.com/assets/img/shape/shape1.svg',
  shape2:'https://www.znifa.com/assets/img/shape/shape2.png',
  shape3:'https://www.znifa.com/assets/img/shape/shape3.png',
  head:'Contact Us',
  link1:'Home',
  link2:'Contact Us'
}

const contactAreaData={
  icon:'https://www.znifa.com/assets/img/star-icon.png',
  image:'https://www.znifa.com/assets/img/contact.png',
  captcha:'https://www.znifa.com/assets/php/captcha.php',
  refresh:'https://www.znifa.com/assets/img/Refresh_icon.png',
}



const contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 3 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []); 
  
  return (
<>
{loading && <Loader />}
{!loading && (
 <>
    <Whatsapp/>
     <Header data={headerData} />
    <Title data={titleData} />
    <ContactArea data={contactAreaData} />
    <Map/>
    <Footer data={footerData} />
    <Top/>
 </>
)}
</>
  )
}

export default contact