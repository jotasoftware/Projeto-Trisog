import React, { useEffect, useState } from 'react'
import styles from './ImageMosaic.module.css'
import axios from 'axios'

type Countries = {
    id: number,
    image: string,
    name: string,
    travelers: string
}

const ImageMosaic = () => {
    const [countries, setCountries] = useState<Countries[]>([])

    useEffect(()=>{
        fetchCountries()
    })

    const fetchCountries = async () => {
        try {
            const response = await axios.get('http://localhost:3000/countries')
            setCountries(response.data)
        } catch (error) {
            console.error('Error')
        }
    }
    // const countries = [
    //     {
    //         id: 1,
    //         image: 'https://picsum.photos/300/600',
    //         country: 'Australia',
    //         travelers: '187,900'
    //     },
    //     {
    //         id: 2,
    //         image: 'https://picsum.photos/300/600',
    //         country: 'Australia',
    //         travelers: '187,900'
    //     },
    //     {
    //         id: 3,
    //         image: 'https://picsum.photos/300/600',
    //         country: 'Australia',
    //         travelers: '187,900'
    //     },
    //     {
    //         id: 4,
    //         image: 'https://picsum.photos/300/600',
    //         country: 'Australia',
    //         travelers: '187,900'
    //     },
    //     {
    //         id: 5,
    //         image: 'https://picsum.photos/300/600',
    //         country: 'Australia',
    //         travelers: '187,900'
    //     },
    //     {
    //         id: 6,
    //         image: 'https://picsum.photos/300/600',
    //         country: 'Australia',
    //         travelers: '187,900'
    //     }
    // ]

    return (
        <section className={styles.grid}>
            {countries.map(country => (
                <div key={country.id} className={styles[`img${country.id}`]}>
                    <img src={country.image} alt="" />
                    <div className={styles.imageShadow}></div>
                    <div className={styles.textDescription}>
                        <p>{country.travelers} Travelers</p>
                        <h2>{country.name}</h2>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default ImageMosaic