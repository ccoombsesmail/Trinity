import React, { useEffect } from 'react'
import styles from './IntroVideo.module.css'
import { withRouter } from 'react-router-dom'

const IntroVideo = (props) => {
  useEffect(() => {
    const state  = props.location.state
    if (state) {
      let path = state.path
      switch (path) {
        case '/contact':
          document.getElementById("contactAnchor").click()
          break;
        case '/about':
          document.getElementById("aboutAnchor").click()
          break;
        case '/services':
          document.getElementById("servicesAnchor").click()
          break;
        default:
          break;
      }
     
    }
  }, [])
  return (
    <video id="introVid" autoPlay loop={true} muted={true}>
      <source src="/example.mp4" type="video/mp4"/>
    </video>
  )
}



export default withRouter(IntroVideo)




    // document.getElementById("introVid").addEventListener("loadeddata", () => {
    //   window.scroll({
    //     top: 0,
    //     left: 0,
    //     behavior: 'smooth'
    //   });
    // })