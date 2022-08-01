import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import image from '../../images/boy.png'
import { Link } from 'react-router-dom'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const PaymentGateway = () => {
  return (
    <div className={styles.container}>
        <div className={styles.first_section}>
            <Fade left>
                <div className={styles.section_text}>
                    <div className={styles.heading}>
                        <h2>Vail Wallet Payment Gateway</h2>
                    </div>
                    <p>Send and receive payments super fast and your account is automatically credited or debited. Make single transfers to bank account from your vail wallet app</p>

                    <div className={styles.app_link}>
                        <Link to='/scan-to-pay'  className={ styles.learn }><button>Learn More</button></Link>
                        <button className={styles.create_account}>Create Account</button>
                    </div>
                </div>
            </Fade>

            <Fade right>
                <div className={styles.section_image}>
                    <img src={image} alt="vail wallet" />
                </div>
            </Fade>
        </div>
        
          <Zoom>
          <div className={styles.testimony}>
              <h2>Over $1 million payments processed daily</h2>
          </div>
          </Zoom>

          
        <div className={styles.first_section}>
            <Fade left>
            <div className={styles.section_text}>
                <div className={styles.heading}>
                    <h3>For Developers</h3>
                </div>
                
                <div className={styles.row}>
                      <h4>Sell Online</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti modi commodi, dolor facere dolorum neque assumenda sapiente! Ex ipsam neque perspiciatis tempora corrupti ut.</p>
                </div>
                
                <div className={styles.row}>
                      <h4>Sell Online</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti modi commodi, dolor facere dolorum neque assumenda sapiente! Ex ipsam neque perspiciatis tempora corrupti ut.</p>
                </div>

                <div className={styles.row}>
                      <h4>Sell Online</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti modi commodi, dolor facere dolorum neque assumenda sapiente! Ex ipsam neque perspiciatis tempora corrupti ut.</p>
                </div>
                 <div className={styles.app_link}>
                        <Link to='/scan-to-pay'  className={ styles.learn }><button>Learn More</button></Link>
                        <button className={styles.create_account}>Create Account</button>
                </div>
            </div>
            </Fade>

            <Fade right>
            <div className={styles.section_image}>
                <img src={image} alt="vail wallet logo" />
            </div>
            </Fade>
        </div>

        <div className={styles.reviews}>
            <Zoom>
            <div className={styles.reviews_container}>
                <div className={styles.logo}>
                    <img src={image} alt="vail wallet logo" />
                </div>

                <div className={styles.comment}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ducimus aperiam pariatur saepe a nemo, mollitia deleniti numquam exercitationem placeat ex eos non laboriosam architecto! Autem ex nisi dicta distinctio.</p>
                </div>
                
                <div className={styles.user_details}>
                    <div className={styles.logo}>
                        <img src={image} alt="vail wallet logo" />
                    </div>

                    <div className="other_details">
                        <h3>Mr. Victor</h3>
                        <p>Microsoft CEO, London</p>
                    </div>
                </div>
                
                <div className={styles.action_btns}>
                    <button className={styles.prev_btn}>
                        <FaChevronLeft/>
                    </button>

                    <button className={styles.next_btn}>
                        <FaChevronRight/>
                    </button>
                </div>
            
            </div>
            </Zoom>
        </div>

        <div className={styles.first_section}>
            <Fade left>
            <div className={styles.section_image}>
                <img src={image} alt="vail wallet" />
            </div>
            </Fade>
            
            <Fade right>
            <div className={styles.section_text}>
                <div className={styles.heading}>
                    <h3>Vail Wallet mobile app</h3>
                </div>
                
                <div className={styles.row}>
                      <h4>Sell Online</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti modi commodi, dolor facere dolorum neque assumenda sapiente! Ex ipsam neque perspiciatis tempora corrupti ut.</p>
                </div>
                
                <div className={styles.row}>
                      <h4>Sell Online</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti modi commodi, dolor facere dolorum neque assumenda sapiente! Ex ipsam neque perspiciatis tempora corrupti ut.</p>
                </div>

                <div className={styles.row}>
                      <h4>Sell Online</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti modi commodi, dolor facere dolorum neque assumenda sapiente! Ex ipsam neque perspiciatis tempora corrupti ut.</p>
                </div>
                 <div className={styles.app_link}>
                        <Link to='/scan-to-pay'  className={ styles.learn }><button>Learn More</button></Link>
                        <button className={styles.create_account}>Create Account</button>
                </div>
            </div>
            </Fade>
        </div>
    </div>
  )
}

export default PaymentGateway