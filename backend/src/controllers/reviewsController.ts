import { Request, Response, NextFunction } from 'express'
import Tour from '../entities/Tour'
import Review from '../entities/Review';
import dataSource from '../database/database';

export const createReview = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {
            tourId,
            services,
            prices,
            locations,
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
        _review.locations = locations;
        _review.food = food;
        _review.amenities = amenities;
        _review.room = room;
        _review.average = parseFloat(((services + prices + locations + food + amenities + room)/6).toFixed(1))
        _review.name = name;
        _review.emailAddress = emailAddress;
        _review.comment = comment;
        

        await reviewRepository.save(_review);
        next()
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}

export const setReviewTour = async (req: Request, res: Response) => {
    try{
        const tourRepository = dataSource.getRepository(Tour)
        const reviewRepository = dataSource.getRepository(Review)
        const tour = await tourRepository.findOne({
            where: {id: Number(req.body.tourId)}
        })

        if(!tour){
            return res.status(500).json({error: 'Failed'})
        }
        let sum:number = 0;
        const reviewsTour = await reviewRepository.find({
            where: {tourId: tour.id}
        })
        if(reviewsTour.length != 0){
            for(let j:number=0; j<reviewsTour.length; j++){
                sum += reviewsTour[j].average
            }
            tour.averageReviews = parseFloat((sum /reviewsTour.length).toFixed(1))
            tour.quantReviews = (reviewsTour.length)
            await tourRepository.save(tour)
        }
            
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

export const getAveragesReviews = async (req: Request, res: Response) => {
    try{
        const reviewRepository = dataSource.getRepository(Review)
        const averagesReviews = {
            services: 0,
            locations: 0,
            amenities: 0,
            prices: 0,
            food: 0,
            room: 0,
        }
        const reviews = await reviewRepository.find({
            where: {tourId: Number(req.query.id)}
        })
        for(let i: number=0; i<reviews.length; i++){
            averagesReviews.services += reviews[i].services 
            averagesReviews.locations += reviews[i].locations
            averagesReviews.amenities += reviews[i].amenities 
            averagesReviews.prices += reviews[i].prices 
            averagesReviews.food += reviews[i].food 
            averagesReviews.room += reviews[i].room 
        }

        return res.status(201).json({
            services: (averagesReviews.services/reviews.length).toFixed(1),
            locations: (averagesReviews.locations/reviews.length).toFixed(1),
            amenities: (averagesReviews.amenities/reviews.length).toFixed(1),
            prices: (averagesReviews.prices/reviews.length).toFixed(1),
            food: (averagesReviews.food/reviews.length).toFixed(1),
            room: (averagesReviews.room/reviews.length).toFixed(1)
        })
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}

export const getTourReviews = async (req: Request, res: Response) => {
    try{
        const reviewRepository = dataSource.getRepository(Review)
        const reviews = await reviewRepository.find({
            where: {tourId: Number(req.query.id)},
            order: {
                createdAt: 'DESC'
            }
        })
        return res.status(201).json(reviews)
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}