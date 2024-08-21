import React from 'react'
import styles from './Header.module.css'
import LoginSignup from '../LoginSignup/LoginSignup'
import { FaTwitter, FaLinkedin, FaGoogle, FaPinterest, FaSearch, FaChevronDown } from 'react-icons/fa'

const Header: React.FC = () => {
  return (
    <header>
        <div className={styles.firstLine}>
            <div className={styles.contact}>
                <p>(000) 999-989-999</p>
                <p>info@trisog.com</p>
            </div>
            <div>
                <div className={styles.socialIcons}>
                    <a href="https://twitter.com" target="_blank">
                        <FaTwitter 
                            size={18} 
                            style={{
                                color: '#666A83',
                                transition: 'color 0.3s'
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.color = '#FD5056')}
                            onMouseOut={(e) => (e.currentTarget.style.color = '#666A83')}
                        />
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                        <FaLinkedin 
                            size={18} 
                            style={{
                                color: '#666A83',
                                transition: 'color 0.3s'
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.color = '#FD5056')}
                            onMouseOut={(e) => (e.currentTarget.style.color = '#666A83')}
                        />
                    </a>
                    <a href="https://google.com" target="_blank">
                        <FaGoogle 
                            size={18} 
                            style={{
                                color: '#666A83',
                                transition: 'color 0.3s'
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.color = '#FD5056')}
                            onMouseOut={(e) => (e.currentTarget.style.color = '#666A83')}
                        />
                    </a>
                    <a href="https://pinterest.com" target="_blank">
                        <FaPinterest 
                            size={18} 
                            style={{
                                color: '#666A83',
                                transition: 'color 0.3s'
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.color = '#FD5056')}
                            onMouseOut={(e) => (e.currentTarget.style.color = '#666A83')}
                        />
                    </a>
                </div>
                <div>
                    <p>EUR</p>
                    <FaChevronDown size={10} color="#666A83" />
                </div>
            </div>
        </div>
        <div className={styles.secondLine}>
            <div>
                <p>logo</p>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Tours</li>
                        <li>Destination</li>
                        <li>Blog</li>
                        <li>Page</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
            <div>
                <FaSearch />
                <LoginSignup></LoginSignup>
            </div>
        </div>
    </header>
  )
}

export default Header