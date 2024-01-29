import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
     <h1 className={styles.title}>Hi,I am Hifzah</h1>
     <p className={styles.description}>
        I am a passionate frontend developer with a BTech degree . I have a keen interest in creating visually appealing and user-friendly interfaces that seamlessly blend aesthetics with functionality.Reach out if you'd like to learn more
         </p>
     <a href="mail to:hafsahsbkhn@gmail.com"
      className={styles.contactBtn}>Contact Me
      </a>
    </div>
    <img
     src={getImageUrl("hero/new.png")}
      alt="Hero image of me" 
     className={styles.heroImg}
      />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur} />
  </section>
  )
}
