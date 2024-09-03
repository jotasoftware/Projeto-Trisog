import React, { useEffect, useState } from 'react'
import styles from './ImageMosaic.module.css'
import axios from 'axios'
import Loader from '../Loader/Loader';

type Countries = {
    id: number,
    image: string,
    name: string,
    travelers: string
}

interface type{
    type: string
}

const ImageMosaic: React.FC<type> = ({type}) => {
    const [groupCountries, setGroupCountries] = useState<Countries[][]>([])
    const [loading, setLoading] = useState<boolean>(true)
    
    useEffect(()=>{
        fetchCountries()
    }, [])


    const countriesIntoGroups = (array: Countries[]): Countries[][] => {
        const result: Countries[][] = [];
        for (let i = 0; i < array.length; i+=6) {
          result.push(array.slice(i, i + 6))
        }
        return result;
    }
    const fetchCountries = async () => {
        let url: string;
        try {
            if(type == 'home') url = 'http://localhost:3000/countriesbest'
            else url ='http://localhost:3000/countries'
            const response = await axios.get(url)
            setLoading(false)
            const groupedData = countriesIntoGroups(response.data)
            setGroupCountries(groupedData)
        } catch (error) {
            console.error('Error')
        }
    }

    return (
        <div className={type == 'destinations' ? styles.containerDestination : ''}>
            {loading ? <Loader /> :
            groupCountries.map((countries, index) => (
                
            <div key={index} className={`${styles.grid} ${index % 2 ==0 ? styles.right : styles.left}`}>
                {countries.map((country, i) => (
                    <div key={country.id} className={styles[`img${i+1}`]}>
                        <img src={country.image} alt="" className={styles.countryImage}/>
                        <div className={styles.imageShadow}></div>
                        <div className={styles.textDescription}>
                            <p>{country.travelers} Travelers</p>
                            <h2>{country.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
            ))
        }
        </div>
    )
}

export default ImageMosaic