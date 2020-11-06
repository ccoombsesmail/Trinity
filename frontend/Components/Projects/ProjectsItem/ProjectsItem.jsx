import React, { useState, useEffect } from 'react'
import styles from './ProjectsItem.module.css'
import { Animated } from 'react-animated-css'


const ProjectsItem = ({imgSrc, cardNum}) => {

  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(false)
    setTimeout(() => {
      setVisible(true)
    }, 10)
  }, [imgSrc, cardNum])

  return (
    <div className={styles.cardWrapper}>
      <Animated animationIn="fadeIn" animationInDelay={100 * cardNum} isVisible={visible} >
        <img className={styles.imgCard} src={imgSrc} alt="" />
      </Animated>
    </div>
  )
}

export default ProjectsItem
