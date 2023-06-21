import React from 'react'
import Layout from '@/components/layout/Layout'
import FaqSection from '@/components/homepage/Faqs'
import Link from 'next/link'


const FaqPage = () => {
  return (
    <>
        <Layout>
            <div>
                <div className='bg-[#F0F4FF]'>
                    <div className='h-44 lg:h-[250px] grid place-content-center'>
                        <p className='lg:text-5xl text-2xl fw-600'>Hello can we help?</p>
                    </div>
                </div>
                <div className='section'>
                    <div className='box'>
                        <div>
                            <p className='text-center text-lg lg:text-3xl fw-600 mb-4'>Frequently Asked Questions</p>
                            <p className='lg:w-6/12 mx-auto fw-500 text-center'>To learn more about Pikaboo and for further assistance, please fill in the form below.</p>
                        </div>
                        <div>
                            <FaqSection more={12}/>
                        </div>
                        <div className='mt-8 text-center'>
                            <Link href='/contact' className='btn-primary py-2 px-6 lg:px-12'>Get In Touch With Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>
  )
}

export default FaqPage