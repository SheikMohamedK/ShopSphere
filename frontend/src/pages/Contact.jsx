import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} alt="contact_img" className='w-full md:max-w-[480px]'/>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>No.64/A, Flemingo St., <br />Canberra, Australia</p>
          <p className='text-gray-500'>Tel: (+61) 172-1239 <br />Email: contact@shopsphere.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forecer</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-blue-900 px-8 py-4 text-sm hover:bg-blue-900 hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact