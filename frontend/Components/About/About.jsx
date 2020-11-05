import React from 'react'
import styles from './About.module.css'
import { Animated } from 'react-animated-css'

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <hr />
      <Animated animationIn="slideInUp" animationInDelay={800}>
        <h1 id="about">About</h1>
      </Animated>
      <h2>
        This is our mission statement
      </h2>
      <section className={styles.aboutDescriptionWrapper}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <img src="/example2.jpg" alt=""/>
      </section>
      {/* <hr /> */}
    </div>
  )
}

export default About
