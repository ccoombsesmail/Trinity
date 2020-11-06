import React, { useState, useEffect } from 'react'
import styles from './Projects.module.css'
import ProjectsItem from './ProjectsItem/ProjectsItem'
import ProjectsTabNav from './ProjectsTabNav/ProjectsTabNav'

const Projects = () => {

  const [imgSrcs, setImgSrcs] = useState(["/offices.jpg", "/offices.jpg", "/offices.jpg", "/offices.jpg", "/offices.jpg", "/offices.jpg"])
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])


  return (
    <div className={styles.projectsWrapper}>
      <ProjectsTabNav setImgSrcs={setImgSrcs} />
      <div className={styles.projectWrapper}>
      {
        imgSrcs.map((imgSrc, idx) => {
          return (
            <ProjectsItem imgSrc={imgSrc} cardNum={idx+1} key={idx}  />
          )
        })
      }
      </div>
    </div>
  )
}

export default Projects
