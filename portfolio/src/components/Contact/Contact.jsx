import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id ="contact" className={styles.container}>
     <div className={styles.text}>
      <h2>Contact Me</h2>
      <p>Reach out for any queries</p>
     </div>
     <ul className={styles.links}>
      <li className={styles.link}>
       <img 
         src={getImageUrl("contact/emailIcon.png")}
         alt="Email icon" 
        />
        <a href="mailto:hafsahsbkhn@gmail.com">hafsahsbkhn@gmail.com</a>
      </li>
      <li className={styles.link}>
       <img
         src={getImageUrl("contact/linkedinIcon.png")}
         alt="linkedIn icon"
       />
       <a href="https://www.linkedin.com/in/hifzah-haseeb-b8410a21b/">LinkedIn.com</a>
      </li>
      <li className={styles.link}>
       <img
        src={getImageUrl("contact/githubIcon.png")}
        alt="Github icon"
       />
       <a href="https://github.com/Hifzahk">Github.com</a>
      </li>
     </ul>
    </footer>
  )
}
