import React, { useState, useEffect } from 'react'
import styles from './ProjectsTabNav.module.css'

const ProjectsTabNav = ({ setImgSrcs }) => {
  const projects = [
    ["/offices.jpg", "/offices.jpg", "/offices.jpg", "/offices.jpg", "/offices.jpg", "/offices.jpg"],
    ["/example2.jpg", "/example2.jpg", "/example2.jpg", "/example2.jpg", "/example2.jpg", "/example2.jpg"]
  ]
  const [selected, setSelected] = useState(0)
  const selectedTabStyles = [styles.selected]

  const handleClick = (tabNum) => {
    setSelected(tabNum)
    setImgSrcs(projects[tabNum])
  }
  return (
    <nav>
      <li onClick={() => handleClick(0)} className={selected === 0 ? selectedTabStyles.join(' ') : null}>
        Project 1
      </li>
      <li onClick={() => handleClick(1)} className={selected === 1 ? selectedTabStyles.join(' ') : null}>
        Project 2
      </li>
    </nav>
  )
}

export default ProjectsTabNav
