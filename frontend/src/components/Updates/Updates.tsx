import React from 'react';
import { GoDotFill } from "react-icons/go";
import styles from './Updates.module.css'

const Updates = () => {
    const updates = [
        {
          urlImage: 'https://trisogbucket.s3.amazonaws.com/home/1updates.jpg',
          date: 'August 22, 2024',
          admin: 'Admin',
          news: 'The impact of Covid 19 on travel and tourism'
        },
        {
          urlImage: 'https://trisogbucket.s3.amazonaws.com/home/2updates.jpg',
          date: 'August 21, 2024',
          admin: 'Admin',
          news: 'New regulations in the aviation industry'
        },
        {
          urlImage: 'https://trisogbucket.s3.amazonaws.com/home/3updates.jpg',
          date: 'August 20, 2024',
          admin: 'Admin',
          news: 'How AI is transforming customer service'
        },
        {
          urlImage: 'https://trisogbucket.s3.amazonaws.com/home/4updates.jpg',
          date: 'August 19, 2024',
          admin: 'Admin',
          news: 'How AI is transforming customer service'
        },
    ]
  return (
    <div className={styles.updatesContainer}>
        {updates.map((update, index) =>(
            <div key={index}>
                <img src={update.urlImage} alt="update image" className="update-image" />
                <div className={styles.updateInfo}>
                    <div>
                        <p className={styles.updateDate}>{update.date}</p>
                        <p className={styles.updateAdmin}><GoDotFill size={10}/>{update.admin}</p>
                    </div>
                    <p>{update.news}</p>
                </div>
            </div>
        ))}

    </div>
  )
}

export default Updates