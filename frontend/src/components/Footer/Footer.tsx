import styles from './Footer.module.css';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <div className={styles.colOne}>
            <p>Logo</p>
            <div>
                <p>Need any help?</p>
                <p style={{ color: 'white'}}>Call Us: <span>(888)1234 5678</span></p>
            </div>
            <div>
                <p>Love Street, Muscat, Oman</p>
                <p>exaample@trisog.com</p>
            </div>
            <div>
                <a href="https://facebook.com" target="_blank">
                    <FaFacebook 
                        size={24} 
                        style={{
                            color: '#CFCFCF',
                            transition: 'color 0.3s'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = '#FD5056')}
                        onMouseOut={(e) => (e.currentTarget.style.color = '#CFCFCF')}
                    />
                </a>
                <a href="https://twitter.com" target="_blank">
                    <FaTwitter 
                        size={24} 
                        style={{
                            color: '#CFCFCF',
                            transition: 'color 0.3s'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = '#FD5056')}
                        onMouseOut={(e) => (e.currentTarget.style.color = '#CFCFCF')}
                    />
                </a>
                <a href="https://linkedin.com" target="_blank">
                    <FaLinkedin 
                        size={24} 
                        style={{
                            color: '#CFCFCF',
                            transition: 'color 0.3s'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = '#FD5056')}
                        onMouseOut={(e) => (e.currentTarget.style.color = '#CFCFCF')}
                    />
                </a>
            </div>
        </div>
        <div className={styles.colTwo}>
            <div>
                <p>Company</p>
                <ul>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Travel Guides</a>
                    <a href="#">Data Policy</a>
                </ul>
            </div>
            <div>
                <p>Company</p>
                <div>
                    <ul>
                        <a href="#">Las Vegas</a>
                        <a href="#">New York City</a>
                        <a href="#">San Francisco</a>
                        <a href="#">Hawaii</a>
                    </ul>
                    <ul>
                        <a href="#">Tokyo</a>
                        <a href="#">Sydney</a>
                        <a href="#">Melbourne</a>
                        <a href="#">Dubai</a>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.colThree}>
            <div>
                <p>Sign up Newsletter</p>
                <form>
                    <input type="text" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <p>&copy; 2023 Trisog All Right Reserved</p>
        </div>
    </footer>
  )
}

export default Footer