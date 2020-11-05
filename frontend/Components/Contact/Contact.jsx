import React from 'react'
import styles from './Contact.module.css'
import { Animated } from 'react-animated-css'

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <Animated animationIn="slideInUp" animationInDelay={800}>
        <h1 id="contact">Team</h1>
      </Animated>
      <section className={styles.teamDescriptionWrapper}>
        <div className={styles.imgCard}>
          <img src="/therock.jpg" alt="" />
          <h2>
            Corey Callery
          </h2>
          <h3>
            El Presidente
          </h3>
          <h4>
            Contact: ...
          </h4>
        </div>
        <div className={styles.imgCard}>
          <img src="/therock.jpg" alt="" />
          <h2>
            Jared Callery
          </h2>
          <h3>
            El Vice-Presidente
          </h3>
          <h4>
            Contact: ...
          </h4>
        </div>
      </section>
      <div className={styles.svgDiv} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%"}}>
          <path d="M0.00,49.98 C140.24,162.33 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z">
          </path>
        </svg>
      </div>
      {/* <hr /> */}
    </div>
  )
}

export default Contact
