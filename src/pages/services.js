import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Loader from '@/components/Loader/Loader'
import ServicesArea from '@/components/ServicesArea/ServicesArea'
import Title from '@/components/Title/Title'
import Top from '@/components/Top/Top'
import Whatsapp from '@/components/Whatsapp/Whatsapp'
import React, { useEffect, useState } from 'react'

const headerData={
    logo:'https://www.znifa.com/assets/img/znifa.png',
    linkServices:'Services',
}

const footerData={
    logo:'https://www.znifa.com/assets/img/znifa.png',
    map:'https://www.znifa.com/assets/img/footer-map.png',
}

const titleData={
  shape1:'https://www.znifa.com/assets/img/shape/shape1.svg',
  shape2:'https://www.znifa.com/assets/img/shape/shape2.png',
  shape3:'https://www.znifa.com/assets/img/shape/shape3.png',
  head:'Services',
  link1:'Home',
  link2:'Services'
}

const servicesAreaData = [
  {
    icon: 'https://www.znifa.com/assets/img/services/icon1.png',
    title: 'Custom Build Application Development',
    description: 'There is no such things as perfect software, the digital transformation journey of any company should go through custom build application ...',
  },
  {
    icon: 'https://www.znifa.com/assets/img/services/icon5.png',
    title: 'Single-Sign On(Keycloak)',
    description: 'IAM (Identity and Access Management) is key security measure each organization should adopt to ensure that proper application access is provided to the users with Single-Sign-On...',
  },
  {
    icon: 'https://www.znifa.com/assets/img/services/icon2.png',
    title: 'Application Support',
    description: 'Uptime is a key parameter in the applications in production and increasing the stability of the application is vital to ensure that the application uptime.  The support should be ... ',
  },
  {
    icon:'https://www.znifa.com/assets/img/services/icon3.png',
    title:'Independent Verification and Validation(Testing)',
    description:'As complexity of the software increases and there is various ways and means a particular data getting produced and used across the a software application...',
  },
  {
    icon:'https://www.znifa.com/assets/img/services/icon4.png',
    title:'Mobile App Development',
    description:'One-third of the world population is using smartphone and it is increasing. it is imperative that organization utilize this platform to increase their business through...',
  },
  {
    icon:'https://www.znifa.com/assets/img/services/icon6.png',
    title:'IT Consulting ',
    description:'Majority of the companies is unaware of importance and benefits of IT systems bring it on the table. When the volume and revenue of organization increases, it is imperative to invest in IT system ...',
  },
];

const services = () => {
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
    <ServicesArea data={servicesAreaData} />
    <Footer data={footerData} />
    <Top/>
     </>
   )}
 </>
  )
}

export default services