import { Inter } from 'next/font/google'
import Layout from '@/components/layout/Layout'
import HeroPage from '@/components/homepage/Hero'
import OverviewSection from '@/components/homepage/Overview'
import ControlSection from '@/components/homepage/Control'
import FeatureSection from '@/components/homepage/Feature'
import FaqSection from '@/components/homepage/Faqs'
import AdvertSection from '@/components/homepage/Advert'

const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
  return (
    <>
      <Layout>
        <HeroPage/>
        <OverviewSection/>
        <ControlSection/>
        <FeatureSection/>
        <FaqSection header more={5}/>
        <AdvertSection/>
      </Layout>
    </>
  )
}

export default HomePage
