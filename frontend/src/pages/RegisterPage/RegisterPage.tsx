import React from 'react'
import styles from './RegisterPage.module.css'
import { FaGoogle, FaFacebook, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    //TODO pegar logo no S3
    //TODO seta de voltar
  return (
    <div className={styles.page}>
        <Link to='/' className={styles.backPage}><FaArrowLeft size={24}></FaArrowLeft></Link>
        <div className={styles.container}>
            <header>
                <img src="./img1.png" alt="" />
                <span>Create your account</span>
            </header>
            <form>
                <div className={styles.inputContainer}>
                    <label htmlFor="email">E-mail: </label>
                    <input 
                        type="text"
                        name='email'
                        id='email'
                        placeholder='Type an e-mail' 
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="email">Password</label>
                    <input 
                        type="password"
                        name='password'
                        id='password'
                        placeholder='Type your password' 
                    />
                </div>
                <button type="submit">Sign up</button>
            </form>
            <div className={styles.googleFacebook}>
                <button><FaGoogle></FaGoogle> Google</button>
                <button><FaFacebook></FaFacebook> Facebook</button>
            </div>
            <div className={styles.create}>
                <p>Do you have an account? </p>
                <Link to="/login">Login here</Link>
            </div>  
        </div>
    </div>
  )
}

export default RegisterPage