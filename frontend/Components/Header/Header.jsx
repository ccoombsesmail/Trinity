import React from 'react'
import styles from './Header.module.css'
import { Link, withRouter } from 'react-router-dom'

const Header = (props) => {
  const { pathname } = props.location
  return (
    <header id="home">
      <div className={styles.left}>
        <img src="https://i.ibb.co/h7mpGR4/trinity.png" alt="" />
        <h1>Trinity 3 In 1</h1>
      </div>
      <ul className={styles.navWrapper}>
        <li>
          {
            pathname === "/projects" ? (
              <Link
                to={{
                  pathname: "/",
                  state: { path: "/" }
                }}
              >
                Home
              </Link>
            ): <a data-scroll href="#home">Home</a>
          }
          
        </li>
        <li>
          {
            pathname === "/projects" ? (
              <Link
                to={{
                  pathname: "/",
                  state: { path: "/services" }
                }}
              >
              Services
              </Link>
            ) : <a data-scroll id="servicesAnchor" href="#services">Services</a>
          }
          
        </li>
        <li>
          {
            pathname === "/projects" ? (
              <Link
                to={{
                  pathname: "/",
                  state: { path: "/about" }
                }}
              >
              About
              </Link>
            ) : <a data-scroll id="aboutAnchor" href="#about">About</a>
          }
        </li>
        <li>
          {
            pathname === "/projects" ? (
              <Link
                to={{
                  pathname: "/",
                  state: { path: "/contact" }
                }}
              >
              Contact
              </Link>
            ) : <a id="contactAnchor" data-scroll href="#contact">Contact</a>
          }
          
        </li>
        <li>
          <Link
            to={{
              pathname: "/projects",
              state: { path: "/projects" }
            }}
          >
          Projects
          </Link>
        </li>
        <li>
          Get A Quote
        </li>
      </ul>
    </header>
  )
}

export default withRouter(Header)
