import Agency from '@/components/Agency/Agency'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect, useState } from 'react'
import Features from '../components/Features/Features'
import Details from '@/components/Details/Details'
import Loader from '@/components/Loader/Loader'
import Whatsapp from '@/components/Whatsapp/Whatsapp'
import Top from '@/components/Top/Top'

const headerData={
    logo:'https://www.znifa.com/assets/img/znifa.png',
    linkPlatform:'Platforms',
}

const footerData={
    logo:'https://www.znifa.com/assets/img/znifa.png',
    map:'https://www.znifa.com/assets/img/footer-map.png',
}

const agencyData={
  image1:'https://www.znifa.com/assets/img/platform/img1.png',
}

const featuresData={
  icon1:'https://www.znifa.com/assets/img/services/icon7.png',
  icon2:'https://www.znifa.com/assets/img/services/icon8.png',
  icon3:'https://www.znifa.com/assets/img/services/icon9.png',
  shape:'	https://www.znifa.com/assets/img/services/shape4.png',
}

const detailsData={
  icon:'https://www.znifa.com/assets/img/star-icon.png',
  head:'E-books',
  para: 'eCommerce Platform for books with four hierarchical structure from category to book type and intuitive search, selection options. Integration with leading service providers for Delivery, SMS and Payment gateway to choose based on the customer choice Control Panel with a dashboard for analytical reports and dynamic updates. Responsive for Mobile and Tablets. Inventory management and different login for bulk purchase clients and distributors.',
  image1:'https://www.znifa.com/assets/img/scshot/img005.jpg',
}
const detailsData1={
  icon:'https://www.znifa.com/assets/img/star-icon.png',
  image1:'https://www.znifa.com/assets/img/scshot/img002.jpg',
  head:'Mymagz',
  para:'This subscription management portal enables the publishers and subscriber to manage the subscription of magazine online.  For publisher it is a complete portal to manage their subscription by sending timely reminders for renewal, checking the circulation etc., and for the subscribers it portal helps to subscribe magazines of interest from the portal.',
}

const detailsData2={
  icon:'https://www.znifa.com/assets/img/star-icon.png',
  image1:'https://www.znifa.com/assets/img/scshot/img003.jpg',
  head:'Electronics',
  para:'The buying behaviour of electronic goods is entirely different from the normal online buyers. We must provide all required data, multiple options,comparison to enable the customer to decide and purchase. Znifa’s eCommerce Platform for Electronics is easily customizable to accommodate the all required information, categorization relevant filter criteria and narrow down search options.',
}

const detailsData3={
  icon:'https://www.znifa.com/assets/img/star-icon.png',
  image1:'https://www.znifa.com/assets/img/scshot/emobile.png',
  head:'Mobile View',
  para:'Mobile devices became an integral part of business and hence it is implicit that every business should be on mobile devices to beat the competition.  All our platform are mobile friendly both android and iOS platform.',
}

const platform = () => {
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
    <Agency data={agencyData}/>
    <Features data={featuresData}/>
    <Details data={detailsData} />
    <Details data={detailsData1}/>
    <Details data={detailsData2}/>
    <Details data={detailsData3}/>
    <Footer data={footerData} />
    <Top/>
      </>
    )}
  </>
  )
}

export default platform