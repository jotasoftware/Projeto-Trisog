import {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import LoginSignup from '../LoginSignup/LoginSignup'
import { FaTwitter, FaLinkedin, FaGoogle, FaPinterest, FaSearch, FaChevronDown } from 'react-icons/fa'

const Header: React.FC = () => {
    const [searchActive, setSearchActive] = useState(false)
    const [showInput, setShowInput] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const location = useLocation();
    const currentPath = location.pathname;

    const handleSearch = () => {
        if(searchActive == false){
            setSearchActive(true)
            setShowInput(true)
            return;
        }else if(searchActive == true){
            if (searchInput.length > 0){
                //TODO enviar pesquisa
                console.log(searchInput)
                setSearchInput('')
            }
            setShowInput(false)
            setSearchActive(false)
        }
    }

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
                            <li>
                                <Link to="/" className={currentPath === '/' ? styles.active : ''}>Home</Link>
                            </li>
                            <li>
                                <Link to="/" className={currentPath === '/about' ? styles.active : ''}>About</Link>
                            </li>
                            <li>
                                <Link to="/tourpackage" className={currentPath === '/tourpackage' ? styles.active : ''}>Tours</Link>
                            </li>
                            <li>
                                <Link to="/" className={currentPath === '/destination' ? styles.active : ''}>Destination</Link>
                            </li>
                            <li>
                                <Link to="/" className={currentPath === '/blog' ? styles.active : ''}>Blog</Link>
                            </li>
                            <li>
                                <Link to="/" className={currentPath === '/pages' ? styles.active : ''}>Pages</Link>
                            </li>
                            <li>
                                <Link to="/" className={currentPath === '/contact' ? styles.active : ''}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    {showInput && <input 
                        type="text" 
                        placeholder="Search Tours" 
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        name='search'
                        className={styles.searchInput}
                    />}
                    <FaSearch className={styles.searchIcon} onClick={handleSearch}/>
                    <LoginSignup></LoginSignup>
                </div>
            </div>
        </header>
    )
}

export default Header