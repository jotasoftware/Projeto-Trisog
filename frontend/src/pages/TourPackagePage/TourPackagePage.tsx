import {useState, useEffect} from 'react'
import styles from './TourPackagePage.module.css'
import { CiSearch } from "react-icons/ci";
import SearchForm from '../../components/SearchForm/SearchForm'
import Pagination from '../../components/Pagination/Pagination';
import { Link } from 'react-router-dom'
import axios from 'axios';

type City = {
    id: number;
    name: string
}
type Destinations = {
    id: number
    name: string;
    cities: City[]
}
type Category = {
    id: number;
    name: string;
}

type Filters = {
    search: string;
    filter: number;
    categories: string [];
    destinations: string[];
    stars: number;
}

const TourPackagePage = () => {
    const [search, setSearch] = useState<string>('')
    const [filter, setFilter] = useState<number>(150)
    const [allCategories, setAllCategories] = useState<Category[]>([])
    const [categories, setCategories] = useState<string[]>([])
    const [allDestinations, setAllDestinations] = useState<Destinations[]>([])
    const [destinations, setDestinations] = useState<string[]>([])
    const [stars, setStars] = useState<number>(0)

    const [allFilters, setAllFilters] = useState<Filters>({
        search: '',
        filter: 1000,
        categories: [],
        destinations: [],
        stars: 0,
    })

    useEffect(() => {
        //TODO arrumar loadings
        fetchCategories()
        fetchDestinations()
    }, [])
    useEffect(() => {
        handleAllFilters()
    }, [categories, destinations, stars])
    // useEffect(() => {
    //     console.log(allFilters)
    // }, [allFilters])
    

    const handleAllFilters = () =>{
        setAllFilters({
            search,
            filter,
            categories,
            destinations,
            stars
        })
    }
    const fetchCategories = async () =>{
        try {
            const response = await axios.get('http://localhost:3000/types')
            setAllCategories(response.data)
            // setLoading(false)
          } catch (error) {
            console.error('Error')
          }
    }
    const fetchDestinations = async () =>{
        try {
            const response = await axios.get('http://localhost:3000/countriescity')
            setAllDestinations(response.data)
            // setLoading(false)
          } catch (error) {
            console.error('Error')
          }
    }

    const handleSearch = ()=> {
        handleAllFilters()
    }
    const handleFilter = ()=> {
        handleAllFilters()
    }
    const handleCategory = (e: React.ChangeEvent<HTMLInputElement>)=> {
        if(e.target.checked){
            setCategories([...categories, e.target.value])
        }else{
            setCategories(categories.filter((category) => category !== e.target.value))
        }
    }
    const handleDestinations = (e: React.ChangeEvent<HTMLInputElement>)=> {
        if(e.target.checked){
            setDestinations([...destinations, e.target.value])
        }else{
            setDestinations(destinations.filter((destination) => destination !== e.target.value))
        }
    }
    const handleStars = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setStars(Number(e.target.value))
    }

  return (
    <>
        <section className={styles.titleSection}>
            <h1>Travel & Adventure</h1>
            <div>
                <Link to='/' className={styles.linkHome}>Home</Link>
                <p>/</p>
                <p className={styles.pColor}>Tour Package</p>
            </div>
            <SearchForm />
        </section>
        <main className={styles.mainContainer}>
            <aside>
                <div className={styles.searchDiv}>
                    <h3>Search</h3>
                    <div>
                        <input 
                            type="text" 
                            value={search}
                            onChange={(e:React.ChangeEvent<HTMLInputElement> ) => setSearch(e.target.value)}
                            placeholder='Type anything...'
                        />
                        <CiSearch className={styles.searchIcon} size={24} onClick={handleSearch}/>
                    </div>
                </div>

                <div className={styles.filterDiv}>
                    <h3>Filter By</h3>
                    <div>
                        <input 
                            type="range" 
                            min='0'
                            max='1000'
                            value={filter}
                            onChange={(e:React.ChangeEvent<HTMLInputElement> ) => setFilter(Number(e.target.value))}
                        />
                        <div className={styles.values}>
                            <p>$0.00</p>
                            <p>${filter}.00</p>
                        </div>
                        <button onClick={handleFilter}>Submit</button>
                    </div>
                </div>

                <div className={styles.categoriesDiv}>
                    <h3>Categories</h3>
                    <div>
                        {allCategories.map((category, index) => (
                            <label key={index}>
                                <input 
                                    type="checkbox"
                                    value={category.name}
                                    checked={categories.includes(category.name)}
                                    onChange={handleCategory}
                                />
                                {category.name}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.destinationsDiv}>
                    <h3>Destinations</h3>
                    <div>
                        {allDestinations.map((country) => (
                            <div key={country.id}>
                                <h4>{country.name}</h4>
                                {(country.cities) ? (
                                    country.cities.map((city) => (
                                        <label key={city.id}>
                                            <input 
                                                type="checkbox"
                                                value={city.name}
                                                checked={destinations.includes(city.name)}
                                                onChange={handleDestinations}
                                            />
                                            {city.name}
                                        </label>
                                    ))
                                 ) : (
                                 <p>Sem cidades cadastradas</p>
                                )
                                }
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.reviewsDiv}>
                    <h3>Reviews</h3>
                    <div>
                        <div>
                            <label>
                                <input 
                                    type="checkbox"
                                    name='stars'
                                    value="5"
                                    checked={stars === 5}
                                    onChange={handleStars}
                                />
                                5 Stars
                            </label>
                        </div>
                        <div>
                            <label>
                                <input 
                                    type="checkbox"
                                    name='stars'
                                    value="4"
                                    checked={stars === 4}
                                    onChange={handleStars}
                                />
                                4 Stars
                            </label>
                        </div>
                        <div>
                            <label>
                                <input 
                                    type="checkbox"
                                    value="3"
                                    name='stars'
                                    checked={stars === 3}
                                    onChange={handleStars}
                                />
                                3 Stars
                            </label>
                        </div>
                        <div>
                            <label>
                                <input 
                                    type="checkbox"
                                    value="2"
                                    name='stars'
                                    checked={stars === 2}
                                    onChange={handleStars}
                                />
                                2 Stars
                            </label>
                        </div>
                        <div>
                            <label>
                                <input 
                                    type="checkbox"
                                    value="1"
                                    name='stars'
                                    checked={stars === 1}
                                    onChange={handleStars}
                                />
                                1 Stars
                            </label>
                        </div>
                    </div>
                </div>
            </aside>
            <section>
                <Pagination filters={allFilters}></Pagination>
            </section>
        </main>
    </>
  )
}

export default TourPackagePage