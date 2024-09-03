import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PriceCard from '../../components/PriceCard/PriceCard'
import Map from '../../components/Map/Map'
import styles from './TourDetails.module.css'
import { BsCameraVideo } from "react-icons/bs";
import { CiImageOn, CiLocationOn } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegHeart } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";
import ReviewRange from '../../components/ReviewRange/ReviewRange';

import axios from 'axios';
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import PostReview from '../../components/PostReview/PostReview'
import CarouselCards from '../../components/CarouselCards/CarouselCards'
import Loader from '../../components/Loader/Loader'

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
    type?: {
      id: number;
      name: string;
    };
    review?: number;
    quant?: number;
    price?: number;
    latitude?: number;
    longitude?: number;
    duration?:number;
    minAge?: number, 
    maxPeople?: number, 
    dateStart?: string, 
    overview?: string, 
    averageReviews?: number,
    quantReviews?: number
}
type Reviews = {
    id?: number;
    services?: number,
    locations?: number,
    amenities?: number,
    prices?: number,
    food?: number,
    room?: number,
    average?: number
    name?: string
    emailAddress?: string
    comment?: string
    createdAt?: string
}

const TourDetailsPage = () => {
  const location = useLocation()
  const {id} = location.state || {id:null}
  const [data, setData] = useState<CardsProps | null>(null)
  const [reviews, setReviews] = useState<Reviews | null>(null)
  const [cardReviews, setCardReviews] = useState<Reviews[]>([])
  const [post, setPost] = useState<boolean>(false)

  const fecthDataTours = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/toursid?id=${id}`)
      setData(response.data)
    } catch (error) {
      console.error('Error')
    }
  }
  const fecthAverageReviews = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/reviewsaverages?id=${id}`)
      setReviews(response.data)
    } catch (error) {
      console.error('Error')
    }
  }

  const fetchReview = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/reviewstour?id=${id}`)
        setCardReviews(response.data)
    } catch (error) {
        console.error('Error')
    }
  }

  const handlePost = () =>{
    setPost((prev) => !prev)
  }

  const classificationContent = () => {
    const averageReviews = data?.averageReviews || 0
    if(averageReviews > 4){
      return <p>Excellent</p>
    }else if(averageReviews > 3){
      return <p>Very Good</p>
    }else if(averageReviews > 2){
        return <p>Good</p>
    }else if(averageReviews > 1){
        return <p>Fair</p>
    }else if(averageReviews > 0){
        return <p>Poor</p>
    }else{
      return <p>No Reviews</p>
    }
  }


  useEffect(()=>{
    fecthDataTours()
    fecthAverageReviews()
    fetchReview()
    
  }, [post])

  return (
    <div>

    <div className={styles.container}>
      <PriceCard price={data?.price || 0} days={data?.duration || 0} />
      {data ? (
          <div className={styles.mainDiv}>
          <section className={styles.imageSection}>
            <img className={styles.image} src={data?.image} alt="" />
            <div className={styles.imageButtons}>
              <button><span>Video</span> <BsCameraVideo></BsCameraVideo></button>
              <button><span>Gallery</span> <CiImageOn /></button>
            </div>
          </section>
  
          <section className={styles.titleSection}>
            <div className={styles.cityLine}>
              <div>
                <CiLocationOn size={25} strokeWidth={1.1}></CiLocationOn>
                <p>{data?.city?.name}, {data?.city?.country?.name}</p>
                <a href="#mapTour">View on map</a>
              </div>
              <div className={styles.iconsDiv}>
                <IoShareSocialOutline size={18} className={styles.icons}/>
                <FaRegHeart size={18} className={styles.icons}/>
              </div>
            </div>
            <h1>{data.name}</h1>
          </section>
  
          <section className={styles.detailsSection}>
            <div className={styles.detailPrice}>
              <h6>From</h6>
              <p className={styles.detailColor}>${data.price}</p>
            </div>
            <div className={styles.detailDuration}>
              <h6>Duration</h6>
              <p className={styles.detailBlack}>{data.duration} days</p>
            </div>
            <div className={styles.detailMaxPeople}>
              <h6>Max People</h6>
              <p className={styles.detailBlack}>{data.maxPeople}</p>
            </div>
            <div className={styles.detailMinAge}>
              <h6>Min Age</h6>
              <p className={styles.detailBlack}>{data.minAge}+</p>
            </div>
            <div className={styles.detailTourType}>
              <h6>Tour Type</h6>
              <p className={styles.detailReviews}>{data?.type?.name}</p>
            </div>
            <div className={styles.detailAverageReview}>
              <h6>Review</h6>
              <div>
                <FaStar size={14} strokeWidth={1} className={styles.starDetail}/>
                <p>{data.averageReviews}</p>
                <p>({data.quantReviews} reviews)</p>
              </div>
            </div>
          </section>
  
          <section className={styles.overviewSection}>
            <h2 className={styles.title}>Overview</h2>
            <p>{data.overview}</p>
          </section>
  
          <section className={styles.mapSection} id='mapTour'>
            <h2 className={styles.title}>Map</h2>
            <Map latitude={data?.latitude || 0} longitude={data?.longitude || 0}></Map>
          </section>
  
          <section className={styles.averageReviewSection}>
            <h2 className={styles.title}>Average Reviews</h2>
             <div className={styles.averageReviewContainer}>
              <div className={styles.firstColumn}>
                <span>{data.averageReviews}</span>
                <div>
                  <FaStar size={14} strokeWidth={1} className={styles.starAverage}/>
                  {classificationContent()}
                </div>
              </div>
              <div className={styles.secondColumn}>
                <ReviewRange name='Services' review={reviews?.services}></ReviewRange>
                <ReviewRange name='Locations' review={reviews?.locations}></ReviewRange>
                <ReviewRange name='Amenities' review={reviews?.amenities}></ReviewRange>
                <ReviewRange name='Prices' review={reviews?.prices}></ReviewRange>
                <ReviewRange name='Food' review={reviews?.food}></ReviewRange>
                <ReviewRange name='Room comfort and quality' review={reviews?.room}></ReviewRange>
              </div>
             </div>
          </section>

          <section className={styles.allReviewsSection}>
            <h3 className={styles.titleReview}>Showing {cardReviews.length} review{cardReviews.length>1 ? 's' : ''}</h3>
             <div className={styles.allReviewsContainer}>
              {cardReviews.map((review: Reviews, index: number) => (
                  <ReviewCard key={index} review={review}/>
              ))}
              </div>
          </section>

          <section className={styles.addReviewSection}>
            <h3 className={styles.titleReview}>Add a review</h3>
              <PostReview onPost={handlePost} tourId={id}/>
          </section>

        </div>
        

      ) : (
        <Loader />
      )}
    </div>
    <section className={styles.carouselToursSection}>
      <h2>You may also like...</h2>
      <CarouselCards cardType="tours" />
    </section>
    </div>
  )
}

export default TourDetailsPage