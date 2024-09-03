import {useEffect, useState} from 'react';
import { FaRegPaperPlane  } from 'react-icons/fa';
import { CiFlag1, CiCalendar } from "react-icons/ci"
import { MdOutlinePeopleOutline } from "react-icons/md"

import styles from './SearchForm.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


type Types = {
    id: number;
    name: string;
}
type FormDataType = {
    date?: string;
    destination?: string;
    guests?: string;
    type?: string;
}
interface SearchProps {
    filters?: {
        date?: string;
        destination?: string;
        guests?: string;
        type?: string;
    }
}
const SearchForm: React.FC<SearchProps> = ({filters}) => {
    const navigate = useNavigate()
    const [allTypes, setAllTypes] = useState<Types[]>([])
    const [formData, setFormData] = useState<FormDataType>({
        destination: '',
        type: '',
        date: '',
        guests: ''
    })

    const fetchCategories = async () =>{
        try {
            const response = await axios.get('http://localhost:3000/types')
            setAllTypes(response.data)
          } catch (error) {
            console.error('Error')
          }
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) =>{
        const name = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/tourpackage', { state: { filters: formData } })
    }

    useEffect(()=>{
        fetchCategories()
        if(filters?.destination) {
            setFormData({
                destination: filters?.destination,
                type: filters?.type,
                date: filters?.date,
                guests: filters?.guests
            })
        }
    }, [])

    
  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="destination">Destination</label>
                <div>
                    <FaRegPaperPlane />
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
                        <option value='select'>
                            Activity
                        </option>
                        {allTypes.map((type) => (
                            <option key={type.id} value={type.name}>
                                {type.name}
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
                        placeholder='0'
                    />
                </div>
            </div>

            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchForm