import React from 'react'
import './home.sass'
import DoubleArrow from '../../images/DoubleArrow.png'
import Header from '../../components/header'
import Scroller from '../../components/scroller'

function Home() {
  return (
    <section className='home'>
      <Header />
      <Scroller arrow={DoubleArrow} text={'SCROLL DOWN TO SEE MORE'} />
    </section>
  )
}

export default Home