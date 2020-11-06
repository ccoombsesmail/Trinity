import React from 'react'
import Header from './Header/Header'
import IntroVideo from './IntroVideo/IntroVideo'
import styles from './App.module.css'
import Services from './Services/Services'
import { Animated } from 'react-animated-css'
import About from './About/About'
import Contact from './Contact/Contact'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import Projects from './Projects/Projects'

class App extends React.Component {

  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route path="/projects">
              <Header />
              <Projects />
            </Route>
            <Route path="/">
              <Animated className={styles.headerAnimateWrapper} animationIn="fadeInDown" animationInDelay={800}>
                <Header />
              </Animated>
              <IntroVideo />
              <Services />
              <About />
              <Contact />
            </Route>
          </Switch>
        </Router>
      </main>
    )
  }
}


export default App
