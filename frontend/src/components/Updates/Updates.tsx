import React from 'react';
import { GoDotFill } from "react-icons/go";
import styles from './Updates.module.css'

const Updates = () => {
    const updates = [
        {
          urlImage: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
          date: 'August 22, 2024',
          admin: 'Admin',
          news: 'The impact of Covid 19 on travel and tourism'
        },
        {
          urlImage: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
          date: 'August 21, 2024',
          admin: 'Admin',
          news: 'New regulations in the aviation industry'
        },
        {
          urlImage: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d',
          date: 'August 20, 2024',
          admin: 'Admin',
          news: 'How AI is transforming customer service'
        },
        {
          urlImage: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d',
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