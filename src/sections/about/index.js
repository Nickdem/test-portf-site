import React from 'react'
import AboutContent from '../../components/aboutContent'
import Header from '../../components/header'
import Scroller from '../../components/scroller'
import DoubleArrow from '../../images/DoubleArrow-grey.png'
import './about.sass'

function About() {
  return (
    <section className='about'>
      <Header />
      <AboutContent />
      <Scroller arrow={DoubleArrow} text={'KEEP SCROLLING, THERE IS STILL MORE TO COME'} />
    </section>
  )
}

export default About