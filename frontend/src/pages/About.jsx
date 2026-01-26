import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="about_us" className='w-full md:max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Discover an endless selection of products at unbeatable prices—your one-stop shop for everything you need. Fast shipping, easy returns, and a seamless shopping experience await. Shop the latest trends and must-have items from top brands, all in one place.</p>
          <p>Enjoy secure checkout, exclusive deals, and personalized recommendations just for you. Explore thousands of curated products with intuitive search and hassle-free checkout, making online shopping simpler than ever</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To provide customers with a seamless, reliable, and enjoyable online shopping experience through quality products and exceptional service. Our mission is to make shopping accessible, affordable, and convenient for everyone</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Asuusrance:</b>
          <p className='text-gray-600'>To empower customers with a wide range of products delivered with speed, transparency, and trust.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Covenience:</b>
          <p className='text-gray-600'>To connect people with the products they love through a user-friendly platform built on reliability and value.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exception Customer Service:</b>
          <p className='text-gray-600'>To simplify online shopping by offering quality products, fair prices, and exceptional convenience.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About