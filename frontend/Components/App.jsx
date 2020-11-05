import React from 'react'
import Header from './Header/Header'
import IntroVideo from './IntroVideo/IntroVideo'
import styles from './App.module.css'
import Services from './Services/Services'
import { Animated } from 'react-animated-css'
import About from './About/About'
import Contact from './Contact/Contact'

class App extends React.Component {

  

  render() {
    return (
      <main>
        <Animated className={styles.headerAnimateWrapper} animationIn="fadeInDown" animationInDelay={800}>
          <Header />
        </Animated>
        <IntroVideo />
        
         <Services  />
         <About />
         <Contact />
        
      </main>
    )
  }
}


export default App
