import { Request, Response } from 'express'
import Tour from '../entities/Tour'
import City from '../entities/City';
import Type from '../entities/Type';
import Review from '../entities/Review';
import dataSource from '../database/database';

export const createTour = async (req: Request, res: Response) => {
    try{
        const {
            tour,
            image, 
            duration, 
            minAge, 
            maxPeople, 
            price, 
            dateStart, 
            time,
            overview, 
            cityId, 
            typeId
        } = req.body;
        
        const tourRepository = dataSource.getRepository(Tour)
        const typeRepository = dataSource.getRepository(Type)
        const type = await typeRepository.findOneBy({id: typeId})
        const cityRepository = dataSource.getRepository(City)
        const city = await cityRepository.findOneBy({id: cityId})

        if(!city || !type){
            return res.status(400).json({error: 'City or type not found'})
        }

        const _tour = new Tour();
        _tour.tour = tour;
        _tour.image = image;
        _tour.duration = duration;
        _tour.minAge = minAge;
        _tour.maxPeople = maxPeople;
        _tour.price = price;
        _tour.dateStart = dateStart;
        _tour.time = time;
        _tour.overview = overview;
        _tour.city = city;
        _tour.type = type;
        await tourRepository.save(_tour);
        return res.status(201).json({message: 'Added'})
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}

export const getAllTours = async (req: Request, res: Response) => {
    try{
        const tourRepository = dataSource.getRepository(Tour)
        const reviewRepository = dataSource.getRepository(Review)
        const tours = await tourRepository.find({
            relations: ['city', 'type']
        })

        const toursReviews = []
        for(let i:number=0; i<tours.length; i++){
            let sum:number = 0;
            const reviewsTour = await reviewRepository.find({
                where: {tourId: tours[i].id}
            })
            if(reviewsTour.length != 0){
                for(let j:number=0; j<reviewsTour.length; j++){
                    sum += reviewsTour[j].average
                }
                toursReviews.push({
                    ...tours[i],
                    reviewAverage: parseFloat((sum/reviewsTour.length).toFixed(1)),
                    reviewQuant: reviewsTour.length
                })
            }else{
                toursReviews.push({
                    ...tours[i],
                    reviewAverage: 0,
                    reviewQuant: 0
                })
            }
            
        }
        return res.status(201).json(toursReviews)
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}


export const getAllTypesWithTours = async (req: Request, res: Response) => {
    try{
        const typeRepository = dataSource.getRepository(Type)
        const tourRepository = dataSource.getRepository(Tour)
        const types = await typeRepository.find()
        const typesTour = []
        for(let i:number=0; i<types.length; i++){
            let cheapest:number = Infinity
            const tourType = await tourRepository.find({
                where: {type: {id:types[i].id}}
            })
            if(tourType){
                for(let j:number=0; j<tourType.length; j++){
                    if(cheapest>tourType[j].price){
                        cheapest = tourType[j].price;
                    }
                }
            }
            
            typesTour.push({
                name: types[i].name,
                tourQuant: cheapest === Infinity ? null : tourType.length,
                cheapest: cheapest === Infinity ? null : cheapest
            })
        }

        return res.status(201).json(typesTour)
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}