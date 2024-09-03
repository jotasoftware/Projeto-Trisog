import React from 'react'
import styles from './ErrorPage.module.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className={styles.errorPageContainer}>
        <div className={styles.imageContainer}>
            <img src="https://trisogbucket.s3.amazonaws.com/error/Error.png" alt="" />
        </div>
        <div className={styles.errorContainer}>
            <h1>404</h1>
            <p>Sorry, the page you're looking for doesn't exist</p>
            <div>
                <Link to={'/'}>HOME</Link>
                <Link to={'/contact'}>CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage