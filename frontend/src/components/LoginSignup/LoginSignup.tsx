import React from 'react'
import styles from './LoginSignup.module.css'

import { FaUser } from 'react-icons/fa'

const LoginSignup = () => {
  return (
    <a href='#' className={styles.login}>
      <FaUser size={15} color="#000" />
      <p>Login / Signin</p>
    </a>
  )
}

export default LoginSignup