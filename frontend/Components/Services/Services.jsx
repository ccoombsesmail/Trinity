import React from 'react'
import ServicesItem from './ServicesItem/ServicesItem'
import styles from './Services.module.css'

const Services = () => {
  return (
    <div className={styles.servicesWrapper}>
      <h1>Our Services</h1>
      <hr/>
      <ServicesItem itemId="item1" picLeft={true} imgSrc="/offices.jpg" />
      <ServicesItem itemId="item2" picLeft={false} imgSrc="/example2.jpg" />
      <ServicesItem itemId="item3" picLeft={true} imgSrc="/offices.jpg"/>
    </div>
  )
}

export default Services
