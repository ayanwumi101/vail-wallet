import React from 'react'
import styles from './styles.module.css'
import {FaCheck} from 'react-icons/fa'
import image from '../../images/boy.png'

const Home = () => {
  return (
    <div className={styles.home_container}>
        <div className={styles.first_section}>
              <div className={styles.section_text}>
                  <h1>Mobile and Online Payment Systems</h1>
                  <p>
                      Send and receive payments very fast and your account is automatically credited or debited. 
                  </p>
                  <p>Make single transfers to bank accounts from your vail wallet app.</p>

                  <div className={styles.buttons}>
                      <button>App store</button>
                      <button>Play store</button>
                  </div>
              </div>

              <div className={styles.section_image}>
                  <img src={image} alt='Vail wallet image' />
              </div>
        </div>
        
          
        <div className={styles.second_section}>
              <div className={styles.heading}>
                <h2>Vail Wallet</h2>
                <h3>"Not just an ordinary Wallet!"</h3>      
              </div>
              
              <div className="text">
                  <p>Unlike any other wallet, VAIL WALLET has some exclusive features to help your finances.
                Certain things are hard, but making payments shouldn't be part of them. Vail Wallet helps you open your business to the world by giving you access to accept over 120+ currencies. With Vail Wallet, fast payment service is just at your fingertips.</p>
              </div>
        </div>
        

        <div className={styles.third_section}>
            <div className={styles.heading}>
                <h2>Features of Vail Wallet App</h2>
            </div>
            
            
            <div className={styles.features}>
                
                <div className={styles.column}>
                        <div className={styles.feature}>
                            <FaCheck className={ styles.check_icon} />
                            <p>Wallet To Wallet Transfer</p>
                        </div>
                    
                        <div className={styles.feature}>
                            <FaCheck className={ styles.check_icon} />
                            <p>Get Personal Account Number</p>
                        </div>
                        
                        <div className={styles.feature}>
                            <FaCheck className={ styles.check_icon} />
                            <p>Accept Payment in Over 120 Currencies</p>
                        </div>
                        
                        <div className={styles.feature}>
                            <FaCheck className={ styles.check_icon} />
                            <p>Wallet Address For Sending Payments</p>
                        </div>
                </div>
                
                  
                <div className={styles.column}>
                        <div className={styles.feature}>
                            <FaCheck className={ styles.check_icon} />
                            <p>Wallet To Wallet Transfer</p>
                        </div>
                    
                        <div className={styles.feature}>
                            <FaCheck className={ styles.check_icon} />
                            <p>Get Personal Account Number</p>
                        </div>
                        
                        <div className={styles.feature}>
                            <FaCheck className={ styles.check_icon} />
                            <p>Accept Payment in Over 120 Currencies</p>
                        </div>
                        
                        <div className={styles.feature}>
                            <FaCheck className={ styles.check_icon} />
                            <p>Wallet Address For Sending Payments</p>
                        </div>
                </div>

            </div>
            
        </div>


        <div className={styles.first_section}>
            <div className={styles.section_image}>
                <img src={image} alt="vail wallet image" />
            </div>
            
            <div className={styles.section_text}>
                <div className={styles.heading}>
                    <h2>Vail Wallet Scan to Pay</h2>
                </div>

                <div className={styles.text}>
                      <h4>This a Heading</h4>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe id modi reiciendis magni est possimus sunt non dolores facilis perspiciatis, eos, quaerat recusandae vero ipsa quam deleniti adipisci deserunt.
                      </p>
                </div>

                <div className={styles.text}>
                      <h4>This a Heading</h4>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe id modi reiciendis magni est possimus sunt non dolores facilis perspiciatis, eos, quaerat recusandae vero ipsa quam deleniti adipisci deserunt.
                      </p>
                </div>

                <div className={styles.text}>
                      <h4>This a Heading</h4>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe id modi reiciendis magni est possimus sunt non dolores facilis perspiciatis, eos, quaerat recusandae vero ipsa quam deleniti adipisci deserunt.
                      </p>
                </div>

                <div className={styles.app_link}>
                      <button className={ styles.learn }>Learn More</button>
                      <button className={styles.create_account}>Create Account</button>
                </div>
            </div>
        </div>



        <div className={styles.first_section}>
            
            <div className={styles.section_text}>
                <div className={styles.heading}>
                    <h2>Vail Wallet Payment Gateway</h2>
                </div>

                <div className={styles.text}>
                      <h4>This a Heading</h4>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe id modi reiciendis magni est possimus sunt non dolores facilis perspiciatis, eos, quaerat recusandae vero ipsa quam deleniti adipisci deserunt.
                      </p>
                </div>

                <div className={styles.text}>
                      <h4>This a Heading</h4>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe id modi reiciendis magni est possimus sunt non dolores facilis perspiciatis, eos, quaerat recusandae vero ipsa quam deleniti adipisci deserunt.
                      </p>
                </div>

                <div className={styles.text}>
                      <h4>This a Heading</h4>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe id modi reiciendis magni est possimus sunt non dolores facilis perspiciatis, eos, quaerat recusandae vero ipsa quam deleniti adipisci deserunt.
                      </p>
                </div>

                <div className={styles.app_link}>
                      <button className={ styles.learn }>Learn More</button>
                      <button className={styles.create_account}>Create Account</button>
                </div>
            </div>

              
            <div className={styles.section_image}>
                <img src={image} alt="vail wallet image" />
            </div>
            
        </div>

          

        <div className={styles.first_section}>
            <div className={styles.section_image}>
                <img src={image} alt="vail wallet image" />
            </div>
            
            <div className={styles.section_text}>
                <div className={styles.heading}>
                    <h2>Vail Wallet Mobile Apps</h2>
                </div>

                <div className={styles.text}>
                      <h4>This a Heading</h4>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe id modi reiciendis magni est possimus sunt non dolores facilis perspiciatis, eos, quaerat recusandae vero ipsa quam deleniti adipisci deserunt.
                      </p>
                </div>

                <div className={styles.text}>
                      <h4>This a Heading</h4>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe id modi reiciendis magni est possimus sunt non dolores facilis perspiciatis, eos, quaerat recusandae vero ipsa quam deleniti adipisci deserunt.
                      </p>
                </div>

                <div className={styles.text}>
                      <h4>This a Heading</h4>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe id modi reiciendis magni est possimus sunt non dolores facilis perspiciatis, eos, quaerat recusandae vero ipsa quam deleniti adipisci deserunt.
                      </p>
                </div>

                <div className={styles.buttons}>
                      <button>App store</button>
                      <button>Play store</button>
                </div>
            </div>
        </div>
          
    </div>
  )
}

export default Home