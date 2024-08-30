import { Request, Response } from 'express'
import Tour from '../entities/Tour'
import City from '../entities/City';
import Type from '../entities/Type';
import Review from '../entities/Review';
import dataSource from '../database/database';

export const createTour = async (req: Request, res: Response) => {
    try{
        const {
            name,
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
        _tour.name = name;
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
            relations: ['city', 'city.country', 'type']
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
                    review: parseFloat((sum/reviewsTour.length).toFixed(1)),
                    quant: reviewsTour.length,
                    cardType: 'tours'
                })
            }else{
                toursReviews.push({
                    ...tours[i],
                    review: 0,
                    quant: 0,
                    cardType: 'tours'
                })
            }
            
        }
        return res.status(201).json(toursReviews)
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}


export const getTourPagination = async (req: Request, res: Response) => {
    try{
        const tourRepository = dataSource.getRepository(Tour)
        const reviewRepository = dataSource.getRepository(Review)

        const page:number = Number(req.query.page) || 1;
        const filters = req.query.filters ? JSON.parse(req.query.filters as string) : {};
        const limit = 9;
        const offset = ((page*limit)-limit)

        const queryBuilder = tourRepository.createQueryBuilder('tour')
            .leftJoinAndSelect('tour.city', 'city')
            .leftJoinAndSelect('city.country', 'country')
            .leftJoinAndSelect('tour.type', 'type')
            .skip(offset)
            .take(limit)
        
        if(filters.search != ''){
            queryBuilder.andWhere('tour.name LIKE :search', {search: `%${filters.search}%`})
        }
        if(filters.filter != 150){
            queryBuilder.andWhere('tour.price < :filter', {filter: filters.filter})
        }
        if(filters.categories.length > 0){
            queryBuilder.andWhere('type.name IN (:...categories)', {categories: filters.categories})
        }
        if(filters.destinations.length > 0){
            queryBuilder.andWhere('city.name IN (:...destinations)', {destinations: filters.destinations})
        }

        const tours = await queryBuilder.getMany()
        const countTours = await queryBuilder.getCount()

        if(countTours === 0){
            return res.status(200).json({ toursReviews: [], countTours: 0 });
        }
        
        let lastPage = Math.ceil(countTours/limit)

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
                    review: parseFloat((sum/reviewsTour.length).toFixed(1)),
                    quant: reviewsTour.length,
                    cardType: 'tours'
                })
            }else{
                toursReviews.push({
                    ...tours[i],
                    review: 0,
                    quant: 0,
                    cardType: 'tours'
                })
            }
        }

        return res.status(201).json({
            toursReviews, countTours
        })


    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}

