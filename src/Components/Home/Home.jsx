import React from 'react'
import About from './About'
import Banner from './Banner'
import Faq from './Faq'
import Feature from './Feature'
import Group from './Group'
import Review from './Review'

function Home() {

  return (
    <div>
      <Banner/>
   <div className='my-8'>
   <Feature/>
   </div>
      <Faq/>
      <div>
        <About/>
      </div>
    <div className='my-14'>
    <Group/>
    </div>
    <div className='my-20'>
      <Review/>
    </div>
    </div>
  )
}

export default Home
