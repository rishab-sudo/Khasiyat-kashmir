import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Menu from "../components/HomeMenu"
import "./Home.css"
import { Container } from 'react-bootstrap'
import Quality from '../components/Quality'
import Testimonial from '../components/Testimonial'
import Connect from '../components/Connect'
import HomeAbout from '../components/HomeAbout'

const Home = () => {
  return (
    <>

      {/* ✅ HOME */}
      <section id="home">
        <HomeBanner/>
      </section>

      {/* ✅ ABOUT (optional if you want scroll) */}
      <section id="about" >
       <HomeAbout/>
      </section>

      {/* ✅ MENU */}
      <section id="menu">
        <Menu/>
      </section>

      {/* ✅ QUALITY */}
      <section id="quality">
        <Quality/>
      </section>

      {/* ✅ REVIEW */}
      <section id="review">
        <Testimonial/>
      </section>

      {/* ✅ CONTACT */}
      <section id="contact">
        <Connect/>
      </section>

    </>
  )
}

export default Home