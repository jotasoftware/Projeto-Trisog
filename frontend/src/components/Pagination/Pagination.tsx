import React from 'react'
import { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import styles from './Pagination.module.css'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { BiSortAZ } from "react-icons/bi";

interface CardsProps {
    id: number;
    cardType: "types" | "tours";
    city: string;
    tour: string;
    review?: number;
    quant?: number;
    price?: number;
}

const Pagination = () => {
    const [itens, setItens] = useState<CardsProps[]>([
        {   
            id: 1,
            cardType: 'tours',
            city: 'London',
            tour: 'Buckingham Palace',
            review: 4.8,
            quant: 15,
            price: 520
        },
        {
            id: 2,
            cardType: 'tours',
            city: 'Paris',
            tour: 'Eiffel Tower Tour',
            review: 4.7,
            quant: 20,
            price: 450
        },
        {   
            id: 1,
            cardType: 'tours',
            city: 'London',
            tour: 'Buckingham Palace',
            review: 4.8,
            quant: 15,
            price: 520
        },
        {
            id: 2,
            cardType: 'tours',
            city: 'Paris',
            tour: 'Eiffel Tower Tour',
            review: 4.7,
            quant: 20,
            price: 450
        },
        {   
            id: 1,
            cardType: 'tours',
            city: 'London',
            tour: 'Buckingham Palace',
            review: 4.8,
            quant: 15,
            price: 520
        },
        {
            id: 2,
            cardType: 'tours',
            city: 'Paris',
            tour: 'Eiffel Tower Tour',
            review: 4.7,
            quant: 20,
            price: 450
        },
        {   
            id: 1,
            cardType: 'tours',
            city: 'London',
            tour: 'Buckingham Palace',
            review: 4.8,
            quant: 15,
            price: 520
        },
        {
            id: 2,
            cardType: 'tours',
            city: 'Paris',
            tour: 'Eiffel Tower Tour',
            review: 4.7,
            quant: 20,
            price: 450
        },
        {   
            id: 1,
            cardType: 'tours',
            city: 'London',
            tour: 'Buckingham Palace',
            review: 4.8,
            quant: 15,
            price: 520
        },
        {
            id: 2,
            cardType: 'tours',
            city: 'Paris',
            tour: 'Eiffel Tower Tour',
            review: 4.7,
            quant: 20,
            price: 450
        },
        {   
            id: 1,
            cardType: 'tours',
            city: 'London',
            tour: 'Buckingham Palace',
            review: 4.8,
            quant: 15,
            price: 520
        },
        {
            id: 2,
            cardType: 'tours',
            city: 'Paris',
            tour: 'Eiffel Tower Tour',
            review: 4.7,
            quant: 20,
            price: 450
        },
        {   
            id: 1,
            cardType: 'tours',
            city: 'London',
            tour: 'Buckingham Palace',
            review: 4.8,
            quant: 15,
            price: 520
        },
        {
            id: 2,
            cardType: 'tours',
            city: 'Paris',
            tour: 'Eiffel Tower Tour',
            review: 4.7,
            quant: 20,
            price: 450
        },
        {   
            id: 1,
            cardType: 'tours',
            city: 'London',
            tour: 'Buckingham Palace',
            review: 4.8,
            quant: 15,
            price: 520
        },
        {
            id: 2,
            cardType: 'tours',
            city: 'Paris',
            tour: 'Eiffel Tower Tour',
            review: 4.7,
            quant: 20,
            price: 450
        }
        
    ]) 
    const [itensPage, setItensPage] = useState<number>(9);
    const [currentPage, setCurrentPage] = useState<number>(0); 
    const [selectedOption, setSelectedOption] = useState<string>('title');

    const pages = Math.ceil(itens.length / itensPage);
    const startIndex = currentPage * itensPage;
    const endIndex = startIndex + itensPage;
    const currentItens = itens.slice(startIndex, endIndex);

    const alfabeticCards = ()=>{
        if(selectedOption==='title') {
            return [...itens].sort((a:CardsProps, b:CardsProps) => {
                if(a.tour < b.tour) return -1;
                if(a.tour > b.tour) return 1;
                return 0;
            })
        }else{
            return [...itens].sort((a:CardsProps, b:CardsProps) => {
                if(a.city < b.city) return -1;
                if(a.city > b.city) return 1;
                return 0;
            })
        }
    }
    //     const fetchData = async() =>{
    //         const result = await fetch('https://jsonplaceholder.typicode.com/todos')
    //             .then(response => response.json())
    //             .then(data => data)
    //         setItens(result)
    //     }

    useEffect(()=>{
        // fetchData()
        setItens(alfabeticCards())
    }, [selectedOption])
  return (
    <div>
        <div className={styles.infoLine}>
            <p>{itens.length} Tours</p>
            <div>
                <p>Sort by</p>
                <BiSortAZ size={20}/>
                <select name="" id="" value={selectedOption} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=> {setSelectedOption(e.target.value)}}>
                    <option value="title">Title</option>
                    <option value="city">City</option>
                </select>
            </div>
        </div>
        <div className={styles.cardsContainer}>
            {currentItens.map((item, index)=> (
                <div className={styles.cardContainer}>
                    <Cards key={index} {...item}></Cards>
                </div>
            ))}
        </div>
        <div className={styles.numbersMenu}>
            <button onClick={()=> setCurrentPage((currentPage>0) ? currentPage-1 : 0)}><IoIosArrowBack /></button>
            {Array.from(Array(pages), (item, index) => (
                <button value={index} className={currentPage === index ? styles.active : ''} onClick={(e: React.MouseEvent<HTMLButtonElement>)=> setCurrentPage(Number((e.target as HTMLButtonElement).value))}>{index + 1}</button>
            ))}
            <button  onClick={()=> setCurrentPage((currentPage<(pages-1)) ? currentPage+1 : currentPage)}><IoIosArrowForward /></button>
        </div>
    </div>
  )
}

export default Pagination