import Layout from '@/components/layout/Layout'
import React from 'react'

const TermsPage = () => {
  return (
    <>
        <Layout>
            <div className='section'>
                <div className='box'>
                    <div>
                        <p className='text-lg lg:text-3xl fw-600'>TERMS & CONDITIONS</p>
                        <div className='mt-8'>
                            <ul className='list-disc list-inside'>
                                <li>Users are not expected to be below 18 years of Age.</li>
                                <li className='mt-4'>All users of this App are signed up by higher-level operators of the system according to their service requirement.</li>
                                <li className='mt-4'>Users comprise Registered Residents, Fleet Managers, Waste Managers, Waste Collectors/Drivers. Others are system administrators.</li>
                                <li className='mt-4'>For best service outcomes, users are expected to promptly meet their payment obligations to the system.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>
  )
}

export default TermsPage