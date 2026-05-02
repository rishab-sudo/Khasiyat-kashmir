import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Menu from "../components/HomeMenu"
import "./Home.css"
import { Container } from 'react-bootstrap'
import Quality from '../components/Quality'
import Testimonial from '../components/Testimonial'
import Connect from '../components/Connect'

const Home = () => {
  return (
    <>

      {/* ✅ HOME */}
      <section id="home">
        <HomeBanner/>
      </section>

      {/* ✅ ABOUT (optional if you want scroll) */}
      <section id="about" className="homeabout">
        <div className="homeabout-container">

          <div className="homeabout-left">
            <img src={require("../assets/about.png")} alt="Food" />
          </div>

          <div className="homeabout-right">
            <span className="tag">FRESH & TASTY FOOD</span>

            <h2 className="title">
              A Sophisticated and <br /> Traditional Cuisine
            </h2>

            <p className="desc">
              Rosoi is one of the most popular restaurants with a unique and
              special menu crafted by our passionate chefs.
            </p>

            <p className="contact">
              Call for Reservation <strong>+01234 567 891</strong>
            </p>

            <button className="menu-btn book-btn">
              View Full Menu
            </button>
          </div>

        </div>

        <Container fluid className='home-about-cards'>
          <Container className="homeabout-bottom">
            <div>
              <img src={require("../assets/small-banner.jpg")} alt="Food 1" />
            </div>
            <div>
              <img src={require("../assets/small-banner.jpg")} alt="Food 2" />
            </div>
          </Container>
        </Container>
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