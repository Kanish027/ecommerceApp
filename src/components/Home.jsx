import React from 'react'
import Slider from './Slider'
import FeaturedProduct from './FeaturedProduct'
import Categories from './Categories'
import Contact from './Contact'

const Home = () => {
  return (
   <div className='home'>
    <Slider />
    <FeaturedProduct type="featured"/>
    <Categories/>
    <FeaturedProduct type="trending"/>
    <Contact/>
   </div>
  )
}

export default Home