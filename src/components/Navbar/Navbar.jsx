import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from './styles.module.css'
import {FaBars} from 'react-icons/fa'
import logo from '../../images/logo1.png'


const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 800) {
      setShowNav(true);
    }
  })

  // useEffect(() => {
    // if (window.innerWidth < 800) {
    //   setShowNav(false);
    // }
  // })

  const handleClick = () => {
    if (window.innerWidth < 800) {
      setShowNav(!showNav);
    }
  }

  return (
    <>
        <div className={styles.navbar_container}>
            <Link to='/'><div className={styles.brand}><img src={logo} alt="" /></div></Link>
            
        <div className={styles.bar} onClick={handleClick}><FaBars /></div> 
          
              {showNav ? <div className={styles.links}>
                  <ul className={styles.navlinks} onClick={() => setShowNav(false)}>
                    <Link to='/about'><li>About Us</li></Link>
                    <Link to='/contact'><li>Contact Us</li></Link>
                    <Link to='/pricing'><li>Pricing</li></Link>
                    <Link to='/contact'><li className={styles.sign_in}>Sign In</li></Link>
                    <Link to='/contact'><li className={styles.start}>Get started</li></Link>
                  </ul>
              </div> : null}
             
        </div>
        <div className={styles.thin_line}></div>
    </>
  )
}

export default Navbar
