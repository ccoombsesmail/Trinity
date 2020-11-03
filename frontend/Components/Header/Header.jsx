import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header >
      <img src="https://i.ibb.co/h7mpGR4/trinity.png" alt="" />
      <ul className={styles.navWrapper}>
        <li>
          Home
        </li>
        <li>
          Services
        </li>
        <li>
          About
        </li>
        <li>
          Projects
        </li>
        <li>
          Contact
        </li>
        <li>
          Get A Quote
        </li>
      </ul>
    </header>
  )
}

export default Header
