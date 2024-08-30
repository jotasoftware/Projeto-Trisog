import React, { useEffect, useState } from 'react'
import styles from './PriceCard.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

interface PriceCard {
    price: number
    days: number
  }


const PriceCard: React.FC <PriceCard> = ({price, days}) => {
    const [totalPrice, setTotalPrice] = useState<number>(price)
    const [allDays, setAllDays] = useState<number[]>([])
    const [adults, setAdults] = useState<number>(1)
    const [kids, setKids] = useState<number>(0)
    const [children, setChildren] = useState<number>(0)

    const minusAdults = () => {
        if(adults<2){
            return
        }
        const newAdults = adults - 1;
        setAdults(newAdults);
    }
    const plusAdults = () => {
        setAdults(adults + 1)
    }

    const minusKids = () => {
        if(kids<1){
            return
        }
        const newKids = kids - 1;
        setKids(newKids);
    }
    const plusKids = () => {
        setKids(kids + 1)
    }

    const minusChildren = () => {
        if(children<1){
            return
        }
        const newChildren = children - 1;
        setChildren(newChildren);
    }
    const plusChildren = () => {
        setChildren(children + 1)
    }

    const createDays = () => {
        const daysArray: number[] =[] 
        for(let i:number = days; i>0; i--){
            daysArray.push(i)
        }
        setAllDays(daysArray)
    }

    useEffect(()=> {
        createDays()
        setTotalPrice((adults+children+kids) * price);
    }, [adults, children, kids])

  return (
    <aside className={styles.container}>
        <div className={styles.priceLine}>
            <span>${price}</span><p>/ per person</p>
        </div>
        <div className={styles.dateLine}>
            <h3>Date</h3>
            <div>
                <input 
                        type="date" 
                        id='date'
                        name='date'
                    />
            </div>
        </div>
        <div className={styles.timeLine}>
            <h3>Time</h3>
            <div>
                <select 
                id='type'
                name='type'
                >
                    {allDays.map(day => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <IoIosArrowDown className={styles.arrow}/>
            </div>
        </div>
        <div className={styles.ticketLine}>
            <h3>Ticket</h3>
            <div>
                <div>
                    <p>Adult (18+ years)</p>
                    <div>
                        <button onClick={minusAdults}><CgMathMinus /></button>
                        <span>{adults}</span>
                        <button onClick={plusAdults}><CgMathPlus /></button>
                    </div>
                </div>
                <div>
                    <p>Kids (12+ years)</p>
                    <div>
                        <button onClick={minusKids}><CgMathMinus /></button>
                        <span>{kids}</span>
                        <button onClick={plusKids}><CgMathPlus /></button>
                    </div>
                </div>
                <div>
                    <p>Children (3+ years)</p>
                    <div>
                        <button onClick={minusChildren}><CgMathMinus /></button>
                        <span>{children}</span>
                        <button onClick={plusChildren}><CgMathPlus /></button>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.totalLine}>
            <p>Total</p>
            <span>${totalPrice.toLocaleString('de-DE')}</span>
        </div>
        <button>Book now</button>
    </aside>
  )
}

export default PriceCard