import About from '@/components/About/About'
import Banner from '@/components/Banner/Banner'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Loader from '@/components/Loader/Loader'
import Top from '@/components/Top/Top'
import Whatsapp from '@/components/Whatsapp/Whatsapp'
import React, { useEffect, useState } from 'react'

const headerData={
  logo:'https://www.znifa.com/assets/img/znifa.png',
}

const bannerData=[
  {
    heading: "Bringing 50+ years of experience in IT Services",
    paragraph: "Znifa offers full spectrum of IT Services with complete domain expertise and consultative solution approach. Our expertise brings over 5 decades of experience in building and supporting transformation engagements for fortune 100 conglomerate.",
    image: 'https://www.znifa.com/assets/img/case-study/img3.png',
  },
  {
    heading: "Simple, Seamless and Swift to adopt Products",
    paragraph: "Off the shelf products brings down the capex of an IT investments significantly, majority of the product in the market fulfil more than 90% of need of common business process. Znifa built couple of products in customer relationship management and human resource management space targeting the SME segment with all required features and quick adoption.",
    image: 'https://www.znifa.com/assets/img/case-study/img4.png',
  },
  {
    heading: "Customizable eCommerce platform",
    paragraph: "The competition is increasing day by day in every field, hence it is imperative to leverage every channel to reach out to customers to increase our brand, business and to receive the feedback. Adoption of the internet and affordability of data bandwidth has significantly increased in recent years, hence it is important that everyone in B2C business should have their own eCommerce platform to market their products. Znifa offers quick to market eCommerce platform with unique features.",
    image:'https://www.znifa.com/assets/img/case-study/img5.png',
  },
  {
    heading: "WE @ZNIFA REDEFINE THE DIGITAL TRANSFORMATION",
    paragraph: "FULL SPECTRUM OF IT SERVICES WITH SPECIALIZED TECHNICAL, DOMAIN AND CONSULTATIVE SERVICES.",
    image:'/assets/images/img4.png',
  },
  {
    heading: "Pioneered in Keycloak implementations, clustering, application on-boarding and user management",
    paragraph: "IAM (Identity and Access Management) is key security measure each organization should adopt to ensure that proper application access is provided to the users with Single-Sign-On. This is also mandatory to be compliant. Our expertise in enabling the IAM using KeyCloak enables to customer IAM compliant by onboarding the custom build applications and off-the-shelf products in the market..",
    image:'/assets/images/img5.png',
  },
]

const aboutData={
  image1:'https://www.znifa.com/assets/img/home/img2.png',
  subImage:'https://www.znifa.com/assets/img/star-icon.png',
  subTitle:'Services',
  content:' Znifa offers full spectrum of IT Services with complete domain expertise and consultative solution approach.  Our expertise brings over 5 decades of experience in  building and supporting transformation engagements for fortune 100 conglomerate.',
  servicesData: [
    'Custom Build Application Development',
    'Application Support',
    'Single-Sign On(Keycloak)',
    'Mobile App Development',
    'Independent Verification and Validation (Testing)',
    'IT Consulting',
  ],
}

const productData={
  image1:'https://www.znifa.com/assets/img/home/img3.png',
  subImage:'https://www.znifa.com/assets/img/star-icon.png',
  subTitle:'Products',
  content:'Off the shelf products brings down the capex of an IT investments significantly, majority of the product in the market fulfil more than 90% of need of common business process.  Znifa built couple of products in customer relationship management and human resource management space targeting the SME segment with all required features and quick adoption.',
  servicesData: [
    'ZCRM',
    'ZHRMS',
  ],
}

const platformData={
  image1:'https://www.znifa.com/assets/img/home/img4.jpg',
  subImage:'https://www.znifa.com/assets/img/star-icon.png',
  subTitle:'Platform',
  content:' The competition is increasing day by day in every field, hence it is imperative to leverage every channel to reach out to customers to increase our brand, business and to receive the feedback.  Adoption of the internet and affordability of data bandwidth has significantly increased in recent years,  hence it is important that everyone in B2C business should have their own eCommerce platform to market their products.  Znifa offers quick to market eCommerce platform with unique features.',
  servicesData: [
    'Mymagz',
    'eCommerce platform for all types of business',
  ],
}

const footerData={
  logo:'https://www.znifa.com/assets/img/znifa.png',
  map:'https://www.znifa.com/assets/img/footer-map.png',
}


const index = () => {

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
          <Banner data={bannerData} />
          <About data={aboutData} />
          <About data={productData} isProduct={true} />
          <About data={platformData} isPlatform={true} />
          <Footer data={footerData} />
          <Top/>
        </>
      )}
    </>
  )
}

export default index