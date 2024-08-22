import {useState} from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { CiFlag1, CiCalendar } from "react-icons/ci"
import { MdOutlinePeopleOutline } from "react-icons/md"

import styles from './SearchForm.module.css'

const SearchForm = () => {

    const [formData, setFormData] = useState({
        destination: '',
        type: '',
        date: '',
        guests: ''
    })

    //TODO Tirar esses tipos e buscar na API
    const types = [
        { value: '', label: 'Activity' },
        { value: 'type1', label: 'Type 1' },
        { value: 'type2', label: 'Type 2' },
        { value: 'type3', label: 'Type 3' }
    ]

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) =>{
        const name = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const cleanData = () => {
        setFormData({
            destination: '',
            type: '',
            date: '',
            guests: ''
        })
    }

    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        cleanData()
    }

    
  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="destination">Destination</label>
                <div>
                    <FaPaperPlane></FaPaperPlane>
                    <input 
                    type="text" 
                    id='destination'
                    name='destination'
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder='Where to go?'
                />
                </div>
            </div>
            <div>
                <label htmlFor="type">Type</label>
                <div>
                    <CiFlag1></CiFlag1>
                    <select 
                    id='type'
                    name='type'
                    value={formData.type}
                    onChange={handleChange}
                    >
                        {types.map((type) => (
                            <option key={type.value} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="date">When</label>
                <div>
                    <CiCalendar></CiCalendar>
                    <input 
                        type="date" 
                        id='date'
                        name='date'
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="guests">Guests</label>
                <div>
                    <MdOutlinePeopleOutline></MdOutlinePeopleOutline>
                    <input 
                        type="text" 
                        id='guests'
                        name='guests'
                        value={formData.guests}
                        onChange={handleChange}
                        aria-label='oi'
                    />
                </div>
            </div>

            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchForm