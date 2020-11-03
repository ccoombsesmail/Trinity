import React, { useEffect } from 'react'
import styles from './IntroVideo.module.css'

const IntroVideo = (props) => {
  useEffect(() => {
    document.getElementById("introVid").addEventListener("loadeddata", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    })
  }, [])
  return (
    <video id="introVid" autoPlay loop={true} muted={true}>
      <source src="/example.mp4" type="video/mp4"/>
    </video>
  )
}



export default IntroVideo
