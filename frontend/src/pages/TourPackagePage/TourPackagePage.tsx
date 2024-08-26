import {useState, useEffect} from 'react'
import styles from './TourPackagePage.module.css'
import { CiSearch } from "react-icons/ci";
import SearchForm from '../../components/SearchForm/SearchForm'
import Pagination from '../../components/Pagination/Pagination';
import { Link } from 'react-router-dom'

type Destinations = {
    [key: string]: string[];
}

const TourPackagePage = () => {
    const [search, setSearch] = useState<string>('')
    const [filter, setFilter] = useState<number>(150)
    const [allCategories, setAllCategories] = useState<string[]>([])
    const [categories, setCategories] = useState<(string)[]>([])
    const [allDestinations, setAllDestinations] = useState<Destinations>({})
    const [destinations, setDestinations] = useState<string[]>([])
    const [stars, setStars] = useState<string[]>([])

    useEffect(() => {
        //TODO puxar categorias da API
        setAllCategories(['Aventuries', 'Aventurie2s', 'Ave3nturies', 'Adventureeee', 'Aventur4ies', 'Aven5turies'])
        setAllDestinations({brasil: ['sao paulo', 'rio de janeiro'], franca: ['paris', 'lyon']})
    }, [])

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
        if(e.target.checked){
            setStars([...stars, e.target.value])
        }else{
            setStars(stars.filter((star) => star !== e.target.value))
        }
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
                        <CiSearch className={styles.searchIcon} size={24}/>
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
                        <button>Submit</button>
                    </div>
                </div>

                <div className={styles.categoriesDiv}>
                    <h3>Categories</h3>
                    <div>
                        {allCategories.map((category, index) => (
                            <label key={index}>
                                <input 
                                    type="checkbox"
                                    value={category}
                                    checked={categories.includes(category)}
                                    onChange={handleCategory}
                                />
                                {category}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.destinationsDiv}>
                    <h3>Destinations</h3>
                    <div>
                        {Object.entries(allDestinations).map(([country, cities]) => (
                            <div key={country}>
                                <h4>{country}</h4>
                                {cities.map((city: string, index: number) => (
                                    <label key={index}>
                                        <input 
                                            type="checkbox"
                                            value={city}
                                            checked={destinations.includes(city)}
                                            onChange={handleDestinations}
                                        />
                                        {city}
                                     </label>
                                ))}
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
                                    value="5"
                                    checked={stars.includes("5")}
                                    onChange={handleStars}
                                />
                                5 Stars
                            </label>
                        </div>
                        <div>
                            <label>
                                <input 
                                    type="checkbox"
                                    value="4"
                                    checked={stars.includes("4")}
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
                                    checked={stars.includes("3")}
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
                                    checked={stars.includes("2")}
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
                                    checked={stars.includes("1")}
                                    onChange={handleStars}
                                />
                                1 Stars
                            </label>
                        </div>
                    </div>
                </div>
            </aside>
            <section>
                <Pagination></Pagination>
            </section>
        </main>
    </>
  )
}

export default TourPackagePage