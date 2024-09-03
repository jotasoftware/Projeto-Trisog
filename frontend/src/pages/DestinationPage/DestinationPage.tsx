import React from 'react'
import styles from './DestinaonPage.module.css'
import SearchForm from '../../components/SearchForm/SearchForm'
import { Link } from 'react-router-dom'
import ImageMosaic from '../../components/ImageMosaic/ImageMosaic'

const DestinationPage = () => {
  return (
    <>
        <section className={styles.titleSection}>
            <h1>Destination</h1>
            <div>
                <Link to='/' className={styles.linkHome}>Home</Link>
                <p>/</p>
                <p className={styles.pColor}>Destination</p>
            </div>
            <SearchForm />
        </section>
        <ImageMosaic type={'destinations'}></ImageMosaic>
    </>
  )
}

export default DestinationPage