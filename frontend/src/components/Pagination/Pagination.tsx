import React from 'react'
import { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import styles from './Pagination.module.css'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { BiSortAZ } from "react-icons/bi";
import axios from 'axios';

interface CardsProps {
    id?: number;
    image?: string;
    cardType: "types" | "tours";
    city?: {
      id: number;
      name: string;
      country:{
        id: number;
        name: string;
      };
    };
    tour?: {
      id: number;
      name: string;
    };
    name?: string;
    review?: number;
    quant?: number;
    price?: number;
    duration?:number;
    minAge?: number, 
    location?: [];
    maxPeople?: number, 
    dateStart?: string, 
    time?: number,
    overview?: string, 
    averageReviews?: number,
    quantReviews?: number
}

interface Filters {
    search: string;
    filter: number;
    categories: string [];
    destinations: string[];
    stars: number;
}

const Pagination: React.FC<{filters: Filters}> = ({filters}) => {
    const [itens, setItens] = useState<CardsProps[]>([])
    const [itensPage, setItensPage] = useState<number>(9);
    const [currentPage, setCurrentPage] = useState<number>(1); 
    const [quantTours, setQuantTours] = useState<number>(0); 
    const [selectedOption, setSelectedOption] = useState<string>('name');
    const [data, setData] = useState<CardsProps[]>([])
    const pages = Math.ceil(quantTours / itensPage);
    // const startIndex = currentPage * itensPage;
    // const endIndex = startIndex + itensPage;
    // const currentItens = itens.slice(startIndex, endIndex);

    // const alfabeticCards = ()=>{
    //     if(selectedOption==='title') {
    //         return [...itens].sort((a:CardsProps, b:CardsProps) => {
    //             if(a.tour < b.tour) return -1;
    //             if(a.tour > b.tour) return 1;
    //             return 0;
    //         })
    //     }else{
    //         return [...itens].sort((a:CardsProps, b:CardsProps) => {
    //             if(a.city < b.city) return -1;
    //             if(a.city > b.city) return 1;
    //             return 0;
    //         })
    //     }
    // }
    const fecthDataTours = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/tourspage?page=${currentPage}&filters=${encodeURIComponent(JSON.stringify(filters))}&sortby=${selectedOption}`)
          setData(response.data.toursType)
          setQuantTours(response.data.countTours)
        //   setLoading(false)
        } catch (error) {
          console.error('Error')
        }
      }

    useEffect(()=>{
        // fetchData()
        //TODO Arrumar Loading
        fecthDataTours()
    }, [selectedOption, currentPage, filters, selectedOption])
  return (
    <div>
        <div className={styles.infoLine}>
            <p>{quantTours} Tour{quantTours >1 ? 's' : ''}</p>
            <div>
                <p>Sort by</p>
                <BiSortAZ size={20}/>
                <select name="" id="" value={selectedOption} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=> {setSelectedOption(e.target.value)}}>
                    <option value="name">Title</option>
                    <option value="price">Price</option>
                </select>
            </div>
        </div>
        {data.length !== 0 ? 
        <>
          <div className={styles.cardsContainer}>
              {data.map((item, index)=> (
                  <div className={styles.cardContainer} key={item.id}>
                      <Cards {...item}></Cards>
                  </div>
              ))}
          </div>
          <div className={styles.numbersMenu}>
              <button onClick={()=> setCurrentPage((currentPage>1) ? currentPage - 1 : 1)} style={pages == 1 ? {display: 'none'} : {}}><IoIosArrowBack /></button>
              {Array.from(Array(pages), (item, index) => (
                  <button value={index} key={index} className={currentPage === index + 1 ? styles.active : ''} onClick={(e: React.MouseEvent<HTMLButtonElement>)=> setCurrentPage((Number((e.target as HTMLButtonElement).value))+1)}>{index + 1}</button>
              ))}
              <button  onClick={()=> setCurrentPage((currentPage<(pages)) ? currentPage + 1: currentPage)} style={pages == 1 ? {display: 'none'} : {}}><IoIosArrowForward /></button>
          </div>
        </>
        : <div className={styles.cardEmpty}>No Tours to show
          </div>} 
    </div>
  )
}

export default Pagination