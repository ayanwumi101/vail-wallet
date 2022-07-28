import React from 'react'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_text}>
        <div className="heading">
          <h2>Vail Wallet</h2>
        </div>

        <div>
          <p>With Vail Wallet, setting feels like catching up. Sending and receiving payments with Vail Wallet feels cool and opening your business to the world makes you explore.</p>
        </div>
      </div>

      <div className={styles.footer_links}>

          <div className={styles.columns}>
            
            <div className={styles.link_list}>
              <h4>Company</h4>
              <ul>
                  <li>About Us</li>
                  <li>Vail Wallet Blog</li>
                  <li>Payment Protection</li>
                  <li>Documentation</li>
              </ul>
            </div>
            

            <div className={styles.link_list}>
              <h4>Legal</h4>
              <ul>
                  <li>Terms of use</li>
                  <li>Privacy and policy</li>
                  <li>Cookies policy</li>
                  <li>KYC policy</li>
              </ul>
            </div>

           <div className={styles.link_list}>
              <h4>Support</h4>
              <ul>
                  <li>Contact us</li>
                  <li>Help desk</li>
                  <li>Email support</li>
                  <li>Live chat</li>
              </ul>
            </div>


            <div className={styles.link_list}>
              <h4>Merchant</h4>
              <ul>
                  <li>Payment Gateway</li>
                  <li>Scan to pay</li>
                  <li>Compliance</li>
                  <li>Terms of use</li>
              </ul>
            </div>
            
          </div>

        
          <div className={styles.columns}>
            
            <div className={styles.link_list}>
              <h4>Business</h4>
              <ul>
                  <li>Accept payments</li>
                  <li>Vail Wallet blog</li>
                  <li>Payment protection</li>
              </ul>
            </div>
            

            <div className={styles.link_list}>
              <h4>Crypto</h4>
              <ul>
                  <li>About crypto</li>
                  <li>Crypto we accept</li>
                  <li>How it works</li>
              </ul>
            </div>

           <div className={styles.link_list}>
              <h4>Ways to Pay</h4>
              <ul>
                  <li>Wallet address</li>
                  <li>Pay with crypto</li>
                  <li>Scan to pay</li>
              </ul>
            </div>


            <div className={styles.link_list}>
              <h4>Social Media</h4>
              <ul>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
              </ul>
            </div>
            
          </div>
          
      </div>


    </footer>
  )
}

export default Footer