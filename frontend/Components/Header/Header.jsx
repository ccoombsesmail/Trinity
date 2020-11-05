import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header id="home">
      <div className={styles.left}>
        <img src="https://i.ibb.co/h7mpGR4/trinity.png" alt="" />
        <h1>Trinity 3 In 1</h1>
      </div>
      <ul className={styles.navWrapper}>
        <li>
          <a data-scroll href="#home">Home</a>
        </li>
        <li>
          <a data-scroll href="#services">Services</a>
        </li>
        <li>
          <a data-scroll href="#about">About</a>
        </li>
        <li>
          Projects
        </li>
        <li>
          <a data-scroll href="#contact">Contact</a>
        </li>
        <li>
          Get A Quote
        </li>
      </ul>
    </header>
  )
}

export default Header
