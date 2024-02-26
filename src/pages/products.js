import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Loader from '@/components/Loader/Loader'
import ProductArea from '@/components/ProductArea/ProductArea'
import Title from '@/components/Title/Title'
import Top from '@/components/Top/Top'
import Whatsapp from '@/components/Whatsapp/Whatsapp'
import React, { useEffect, useState } from 'react'

const headerData={
    logo:'https://www.znifa.com/assets/img/znifa.png',
    linkProducts:'Products',
}

const footerData={
    logo:'https://www.znifa.com/assets/img/znifa.png',
    map:'https://www.znifa.com/assets/img/footer-map.png',
}

const titleData={
    shape1:'https://www.znifa.com/assets/img/shape/shape1.svg',
    shape2:'https://www.znifa.com/assets/img/shape/shape2.png',
    shape3:'https://www.znifa.com/assets/img/shape/shape3.png',
    head:'Products',
    link1:'Home',
    link2:'Products',
  }

const productAreaData={
  icon1:'https://www.znifa.com/assets/img/icon/icon1.png',
  icon2:'https://www.znifa.com/assets/img/icon/icon2.png',
  shape1:'https://www.znifa.com/assets/img/services/shape2.png',
}

const products = () => {
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
    <ProductArea data={productAreaData}/>
    <Footer data={footerData} />
    <Top/>
      </>
    )}
  </>
  )
}

export default products