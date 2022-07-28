import React from 'react'
import styles from './styles.module.css'
import image from '../../images/boy.png'

const About = () => {
  return (
    <div className={styles.container}>

      <div className={styles.about_text}>
        <div className={styles.row}>
          <div className={styles.heading}>
            <h2>About Us</h2>
          </div>

          <div className="div">
            <p>Vail Wallet is an online mobile app founded by a Group of Computer based skilled entrepreneurs. This app provide an unlimited reliable, powerful and uninterupted online payment services</p>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.heading}>
            <h3>Our Mission</h3>
          </div>

          <div className="div">
            <p>Our mission is to provide the easiest and fastest way of unlimited transactions on a daily basis at user's comfortability</p>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.heading}>
            <h3>Our Vision</h3>
          </div>

          <div className="div">
            <p>Our vision is to be the best online app with the easiest, fastest and simplest transaction services.</p>
          </div>
        </div>
      </div>

      <div className={styles.about_image}>
        <img src={image} alt="About us image" className={styles.about_img} />
      </div>

    </div>
  )
}

export default About