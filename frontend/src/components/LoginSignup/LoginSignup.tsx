import React from 'react'
import styles from './LoginSignup.module.css'

import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom'

const LoginSignup = () => {
  return (
    <Link to='/login' className={styles.login}>
      <FiUser size={15} strokeWidth={3}/>
      <p>Login / Sign up</p>
    </Link>
  )
}

export default LoginSignup