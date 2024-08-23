import React from 'react'
import styles from './LoginSignup.module.css'

import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LoginSignup = () => {
  return (
    <Link to='/login' className={styles.login}>
      <FaUser size={15} />
      <p>Login / Sign up</p>
    </Link>
  )
}

export default LoginSignup