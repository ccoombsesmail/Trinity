import React, { useState, useEffect } from 'react'
import styles from './ServicesItem.module.css'
// import 'animate.css/animate.min.css'
import { Animated } from 'react-animated-css'

import { throttle } from 'lodash'

const ServicesItem = ({itemId}) => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollFunction = () => {
    const elem = document.getElementById(itemId)
    console.log(isInViewport(elem))
    if (isInViewport(elem, 200)) {
      setIsVisible(true)
    } else {
      setIsVisible(false)

    }
  }

  useEffect(() => {
    window.addEventListener("scroll", throttle(scrollFunction, 500))
  }, [])

  return (
    <div id={itemId} className={styles.itemWrapper}>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={isVisible}>
        <img src="/offices.jpg" alt="" />
      </Animated>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={isVisible}>
        <h1>Installation</h1>
      </Animated>

      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={isVisible}>
        <p> This is some text which is just a placeholder idk what to type so I am just typing random stuff. LALALALA today is a day that is not the same day as yesterday </p>
      </Animated>

    </div>
  )
}

export default ServicesItem


const isInViewport = (elem, offset) => {
  const distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 - offset &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


