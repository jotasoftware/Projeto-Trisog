import { Request, Response } from 'express'
import Tour from '../entities/Tour'
import Review from '../entities/Review';
import dataSource from '../database/database';

export const createReview = async (req: Request, res: Response) => {
    try{
        const {
            tourId,
            services,
            prices,
            location,
            food,
            amenities,
            room,
            name,
            emailAddress,
            comment,
        } = req.body;
        
        const reviewRepository = dataSource.getRepository(Review)

        const _review = new Review();
        _review.tourId = tourId;
        _review.services = services;
        _review.prices = prices;
        _review.location = location;
        _review.food = food;
        _review.amenities = amenities;
        _review.room = room;
        _review.average = parseFloat(((services + prices + location + food + amenities + room)/6).toFixed(1))
        _review.name = name;
        _review.emailAddress = emailAddress;
        _review.comment = comment;
        

        await reviewRepository.save(_review);
        return res.status(201).json({message: 'Added'})
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}

export const getAllReviews = async (req: Request, res: Response) => {
    try{
        const reviewRepository = dataSource.getRepository(Review)
        const reviews = await reviewRepository.find()
        return res.status(201).json(reviews)
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}