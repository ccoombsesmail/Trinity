import React from 'react'
import ServicesItem from './ServicesItem/ServicesItem'
import styles from './Services.module.css'
import { Animated } from 'react-animated-css'

const Services = () => {
  return (
    <div className={styles.servicesWrapper}>
      <Animated animationIn="slideInUp" animationInDelay={800}>
        <h1 id="services">Our Services</h1>
      </Animated>
      <hr/>
      <ServicesItem itemId="item1" picLeft={true} imgSrc="/offices.jpg" />
      <ServicesItem itemId="item2" picLeft={false} imgSrc="/example2.jpg" />
      <ServicesItem itemId="item3" picLeft={true} imgSrc="/offices.jpg"/>
    </div>
  )
}

export default Services
