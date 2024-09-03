import React from 'react'
import styles from './LoginSignup.module.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig'

import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom'

const LoginSignup = () => {
  const [user, loading] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully.');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  }

  return (
    <>
      {user ? 
      <div onClick={handleLogout} className={styles.login}>
        <FiUser size={15} strokeWidth={3}/>
        <p>Sair</p>
      </div>
      : 
      <Link to='/login' className={styles.login}>
          <FiUser size={15} strokeWidth={3}/>
          <p>Login / Sign in</p>
        </Link>
      }
    </>
  )
}

export default LoginSignup