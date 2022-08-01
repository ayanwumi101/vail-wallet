import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles.module.css'
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
  return (
    <>
    <div className={styles.navbar_container}>
      <Link to='/'><div className="brand"><h2>Vail Wallet</h2></div></Link>
      
      <div className={styles.links}>
        <ul className={styles.navlinks}>
          <Link to='/about'><li>About Us</li></Link>
          <Link to='/contact'><li>Contact Us</li></Link>
          <Link to='/pricing'><li>Pricing</li></Link>
          <li className={styles.sign_in}>Sign In</li>
          <li className={styles.start}>Get started</li>
        </ul>
      </div>
      
        <div className={styles.bar}><FaBars /></div>  
      </div>
      <div className={styles.thin_line}></div>
    </>
  )
}

export default Navbar

export const SideNav = () => {
  return (
    <>
      <div className="sidenav_container">

      </div>
    </>
  )
}