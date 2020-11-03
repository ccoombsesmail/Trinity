import React from 'react'
import ServicesItem from './ServicesItem/ServicesItem'
import styles from './Services.module.css'

const Services = () => {
  return (
    <div className={styles.servicesWrapper}>
      <h1>Services</h1>
      <hr/>
      <ServicesItem itemId="item1" />
      <ServicesItem itemId="item2"/>
      <ServicesItem itemId="item3"/>
    </div>
  )
}

export default Services
