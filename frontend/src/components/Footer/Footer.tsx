import styles from './Footer.module.css';
import { useEffect, useState } from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
    const[email, setEmail] = useState('');
    const[success, setSuccess] = useState('');
    const[error, setError] = useState('');
    const[borderColor, setBorderColor] = useState('#FFFFFF')

    const regexEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setEmail(value)
        if (regexEmail(value) || value=='') {
            setBorderColor('#FFFFFF')
            setError('')
        } 
    }
    const handleBlur= (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (!regexEmail(value) && value!='') {
            setError('Invalid email')
            setBorderColor('#FD5056')
        } else {
            setBorderColor('#FFFFFF')
            setError('')
        }
    }

    const handleButton= (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (regexEmail(email) && email!='') {
            setSuccess('You have been registred')
            setBorderColor('#00FF00')
        } else {
            setError('Invalid email')
            setBorderColor('#FD5056')
        }
    }


    useEffect(()=> {
        setTimeout(() => {
            setBorderColor('#FFFFFF');
            setSuccess('')
            setEmail('')
          }, 3000)
    }, [success])
  return (
    <footer>
        <div className={styles.colOne}>
            <p>Logo</p>
            <div>
                <p className={styles.cursive}>Need any help?</p>
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
                <p>Top Destination</p>
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
                    <div 
                        style={{
                            border: `${borderColor} 1px solid`
                        }}>
                        <FaPaperPlane></FaPaperPlane>
                        <input 
                            type="text" 
                            id='destination'
                            name='destination'
                            value={email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='Enter email...'
                        />
                    </div>
                     {error && <p id="email-error" style={{ color: 'red', fontSize: '10px'}}>{error}</p>}
                     {success && <p id="email-error" style={{ color: 'green', fontSize: '10px'}}>{success}</p>}
                    <button onClick={handleButton}>Submit</button>
                </form>
            </div>
            <p>&copy; 2023 Trisog All Right Reserved</p>
        </div>
    </footer>
  )
}

export default Footer