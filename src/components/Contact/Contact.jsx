import React from 'react'
import styles from './styles.module.css'
import image from '../../images/boy.png'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'


const Contact = () => {

    return (
    <> 
        <div className={styles.container}>
                <div className={styles.contact_form}>
                  <Fade top>
                    <div className="heading">
                        <h2>Contact Us</h2>
                    </div>
                  </Fade>
                <Fade left>
                    <form action="">
                        
                        <div className={styles.split}>
                            <div className={styles.form_control}>
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" />
                            </div>
                            
                            <div className={styles.form_control}>
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className={styles.split}>
                            <div className={styles.form_control}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" />
                            </div>
                            
                            <div className={styles.form_control}>
                                <label htmlFor="tel">Phone Number</label>
                                <input type="tel" />
                            </div>
                        </div>
                        
                        <div className={styles.form_control}>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" />
                        </div>
                        
                        <div className={styles.form_control}>
                            <label htmlFor="comment">Description</label>
                            <textarea name="comment" id="" cols="30" rows="10"></textarea>
                        </div>
                        
                        <div className={styles.form_control}>
                            <input type="submit" value='Send a Message' className={styles.submit} />
                        </div>
                    </form>
                </Fade>
            </div>

            <div className={styles.contact_image}>
                <Fade right>
                <p>We are available to receive your message and get back to you as soon as possible.</p>
                </Fade>
                <Zoom>
                    <img src={image} alt="Contact us image" className={styles.contact_img} />
                </Zoom>
            </div>
        </div>
    </>
  )
}

export default Contact