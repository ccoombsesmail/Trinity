import React from 'react'
import Header from './Header/Header'
import IntroVideo from './IntroVideo/IntroVideo'
import styles from './App.module.css'
import Services from './Services/Services'
import { Animated } from 'react-animated-css'

class App extends React.Component {

  

  render() {
    return (
      <main>
        <Animated className={styles.headerAnimateWrapper} animationIn="fadeInDown" animationInDelay={1000}>
          <Header />
        </Animated>
        <IntroVideo />
        
         <Services  />
        
      </main>
    )
  }
}


export default App
