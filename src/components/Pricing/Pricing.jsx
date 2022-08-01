import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'

const Pricing = () => {
  return (
      <div className={styles.container}>
        <Fade left>
            <div className="heading">
                <h2>Pricing</h2>
            </div>
        </Fade>

          <div className="pricing_content">
              <Fade top>
                <div className={styles.sub_heading}>
                    <h3>Transparent and Fair pricing.</h3>
                    <p>Simple, transparent and fair pricing for your business.</p>
                </div>
              </Fade>

              <div className={styles.price_cards}>
                  <Fade left>
                    <div className={styles.price_card}>
                        <h4>Vail Wallet payment gateway</h4>
                        <div className={styles.percentage}>
                            <h3>2.5%</h3>
                            <p>Per transaction</p>
                        </div>
                        <p>Accept payments from anywhere in the world</p>
                    </div>
                  </Fade>

                  <Fade right>
                    <div className={styles.price_card}>
                        <h4>Scan to pay gateway</h4>
                        <div className={styles.percentage}>
                            <h3>1.5%</h3>
                            <p>Per transaction</p>
                        </div>
                        <p>Accept payments from anywhere in the world</p>
                    </div>
                  </Fade>

                  <Fade left>
                    <div className={styles.price_card}>
                        <h4>Deposits</h4>
                        <div className={styles.percentage}>
                            <h3>0.5%</h3>
                            <p>Per transaction</p>
                        </div>
                        <p>Accept payments from anywhere in the world</p>
                    </div>
                  </Fade>

                  <Fade right>
                    <div className={styles.price_card}>
                      <h4>Withdrawal</h4>
                      <div className={styles.percentage}>
                          <h3>2.5%</h3>
                          <p>Per transaction</p>
                      </div>
                      <p>Accept payments from anywhere in the world</p>
                    </div>
                  </Fade>

                  <Fade left>
                    <div className={styles.price_card}>
                        <h4>Send payments globally</h4>
                        <div className={styles.percentage}>
                            <h3>2.5%</h3>
                            <p>Per transaction</p>
                        </div>
                        <p>Accept payments from anywhere in the world</p>
                    </div>
                  </Fade>

                  <Fade right>
                    <div className={styles.price_card}>
                        <h4>Scan to pay</h4>
                        <div className={styles.percentage}>
                            <h3>0.8%</h3>
                            <p>Per transaction</p>
                        </div>
                        <p>Accept payments from anywhere in the world</p>
                    </div>
                  </Fade>
              </div>
        </div>
    </div>
  )
}

export default Pricing