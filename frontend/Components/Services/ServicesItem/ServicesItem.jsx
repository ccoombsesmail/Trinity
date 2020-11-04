import React, { useState, useEffect } from 'react'
import styles from './ServicesItem.module.css'
// import 'animate.css/animate.min.css'
import { Animated } from 'react-animated-css'

import { throttle } from 'lodash'

const ServicesItem = ({ itemId, picLeft, imgSrc }) => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollFunction = () => {
    const elem = document.getElementById(itemId)
    if (isInViewport(elem, 200)) {
      setIsVisible(true)
    } else {
      setIsVisible(false)

    }
  }

  useEffect(() => {
    window.addEventListener("scroll", throttle(scrollFunction, 500))
  }, [])

  const classes = picLeft ? [[styles.imgLeft], [styles.pLeft], [styles.h1Left]] : [[styles.imgRight], [styles.pRight], [styles.h1Right]]
  console.log(classes)
  return (
    <div id={itemId} className={styles.itemWrapper}>
      {
        picLeft ? (
            <>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={isVisible}>
              <img className={classes[0].join(' ')} src={imgSrc} alt="" />
              </Animated>

              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={isVisible}>
              <h1 className={classes[2].join(' ')}>Installation</h1>
              </Animated>

              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={isVisible}>
              <p className={classes[1].join(' ')}> This is some text which is just a placeholder idk what to type so I am just typing random stuff. LALALALA today is a day that is not the same day as yesterday </p>
              </Animated>
            </>
        ) : (
            <>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={isVisible}>
                <p className={classes[1]}> This is some text which is just a placeholder idk what to type so I am just typing random stuff. LALALALA today is a day that is not the same day as yesterday </p>
              </Animated>

              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={isVisible}>
                <h1 className={classes[2]}>Moving</h1>
              </Animated>

              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={isVisible}>
                <img className={classes[0]} src={imgSrc} alt="" />
              </Animated>
            </>
        )
      }
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


