import React, { useEffect, useState } from 'react'
import styles from './PostReview.module.css'
import StarsReview from '../StarsReview/StarsReview';
import axios from 'axios';

interface PostProps {
  onPost: () => void;
  tourId: number;
}

const PostReview: React.FC<PostProps> = ({onPost, tourId}) => {
  const [services, setServices] = useState<number>(0)
  const [locations, setLocations] = useState<number>(0)
  const [amenities, setAmenities] = useState<number>(0)
  const [prices, setPrices] = useState<number>(0)
  const [food, setFood] = useState<number>(0)
  const [room, setRoom] = useState<number>(0)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const [errorName, setErrorName] = useState<string>('')
  const [errorEmail, setErrorEmail] = useState<string>('')
  const [errorStars, setErrorStars] = useState<string>('')
  const [cleanAll, setCleanAll] = useState<boolean>(false)


  const handleSubmit = (e: React.FormEvent)=> {
    e.preventDefault()
    if(validateForm() && validateStars()){
      fetchReview()
    }
  }

  const handleCleanAll = () =>{
    setCleanAll((prev) => !prev)
  }

  const fetchReview = async () => {
    const data = {
      tourId,
      services,
      locations,
      amenities,
      prices,
      food,
      room,
      name,
      emailAddress: email,
      comment
    }
    setName('')
    setEmail('')
    setComment('')
    handleCleanAll()
    try {
      const response = await axios.post('http://localhost:3000/reviews', data)
      onPost()
    } catch (error) {
      console.error('Error')
    }
  }

  const validateStars = () => {
    if(services == 0 || locations == 0 || amenities == 0 || prices == 0 || food == 0 || room == 0){
      setErrorStars('Fill in all the stars')
      return false
    }else{
      setErrorStars('')
      return true
    }
  }
  const validateForm = () =>{
    const errors: string[] =[]
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if(name.trim() == '') {
      errors.push('Name is required')
      setErrorName('Name is required')
    }
    if(!regexEmail.test(email)){
      errors.push('Invalid Email')
      setErrorEmail('Invalid Email')
    } 
    if(!validateStars()) return false
    return errors.length === 0
  }
  const handleServices = (newRating: number) => {
    if(errorStars!='') validateStars()
    setServices(newRating);
  }
  const handleLocations = (newRating: number) => {
    if(errorStars!='') validateStars()
    setLocations(newRating);
  }
  const handleAmenities = (newRating: number) => {
    if(errorStars!='') validateStars()
    setAmenities(newRating);
  }
  const handlePrices = (newRating: number) => {
    if(errorStars!='') validateStars()
    setPrices(newRating);
  }
  const handleFood = (newRating: number) => {
    if(errorStars!='') validateStars()
    setFood(newRating);
  }
  const handleRoom = (newRating: number) => {
    if(errorStars!='') validateStars()
    setRoom(newRating);
  }
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorName('')
    setName(event.target.value);
  }
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorEmail('')
    setEmail(event.target.value);
  }
  const handleComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  }


  return (
    <div className={styles.addReviewContainer}>
      <div className={styles.starsReview}>
        <StarsReview name={'Services'} onRatingChange={handleServices} cleanAll={cleanAll}></StarsReview>
        <StarsReview name={'Locations'} onRatingChange={handleLocations} cleanAll={cleanAll}></StarsReview>
        <StarsReview name={'Amenities'} onRatingChange={handleAmenities} cleanAll={cleanAll}></StarsReview>
        <StarsReview name={'Prices'} onRatingChange={handlePrices} cleanAll={cleanAll}></StarsReview>
        <StarsReview name={'Food'} onRatingChange={handleFood} cleanAll={cleanAll}></StarsReview>
        <StarsReview name={'Room comfort and quality'} onRatingChange={handleRoom} cleanAll={cleanAll}></StarsReview>
        {errorStars && <p style={{ color: 'red', fontSize: '10px'}}>{errorStars}</p>}
      </div>
      <form className={styles.formReview}>
        <div>
          <div>
            <input 
              type="text" 
              id='name'
              name='name'
              value={name}
              onChange={handleName}
              placeholder='Your name'
            />
            {errorName && <p style={{ color: 'red', fontSize: '10px'}}>{errorName}</p>}
          </div>
          <div>
            <input 
              type="email" 
              id='email'
              name='email'
              value={email}
              onChange={handleEmail}
              placeholder='Your email'
            />
            {errorEmail && <p style={{ color: 'red', fontSize: '10px'}}>{errorEmail}</p>}
          </div>
        </div>
        <textarea 
          id='comment'
          name='comment'
          value={comment}
          onChange={handleComment}
          placeholder='Your comment'
          style={{height: '100px'}}
        ></textarea>
      <button type='submit' onClick={handleSubmit}>Submit Review</button>
      </form>
    </div>
  )
}

export default PostReview