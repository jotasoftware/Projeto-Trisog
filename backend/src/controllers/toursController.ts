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
            typeId, 
            latitude,
            longitude
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
        _tour.latitude = latitude;
        _tour.longitude = longitude;
        await tourRepository.save(_tour);
        return res.status(201).json({message: 'Added'})
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}

export const getBestTours = async (req: Request, res: Response) => {
    try{
        const tourRepository = dataSource.getRepository(Tour)
        const reviewRepository = dataSource.getRepository(Review)
        const tours = await tourRepository.find({
            relations: ['city', 'city.country', 'type'],
            order: {
                averageReviews:'DESC'
            },
            take: 8
        })

        const toursType = []
        for(let i:number=0; i<tours.length; i++){
            toursType.push({
                ...tours[i],
                cardType: 'tours'
            })
        }

        return res.status(201).json(toursType)
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}


export const getTourPagination = async (req: Request, res: Response) => {
    try{
        const tourRepository = dataSource.getRepository(Tour)
        
        const page:number = Number(req.query.page) || 1;
        const filters = req.query.filters ? JSON.parse(req.query.filters as string) : {};
        const limit = 9;
        const offset = ((page*limit)-limit)

        const queryBuilder = tourRepository.createQueryBuilder('tour')
            .leftJoinAndSelect('tour.city', 'city')
            .leftJoinAndSelect('city.country', 'country')
            .leftJoinAndSelect('tour.type', 'type')
            .orderBy(`tour.${(req.query.sortby)}`, 'ASC')
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
        if(filters.stars.length != 0){
            queryBuilder.andWhere('tour.averageReviews >= :stars', {stars: filters.stars})
        }
        if (filters.date != '') {
            queryBuilder.andWhere('DATE(tour.dateStart) >= :date', { date: filters.date })
        }

        const tours = await queryBuilder.getMany()
        const countTours = await queryBuilder.getCount()
        const toursType = []
        if(countTours === 0){
            return res.status(200).json({ toursType: [], countTours: 0 });
        }
        
        let lastPage = Math.ceil(countTours/limit)

        for(let i:number=0; i<tours.length; i++){
            toursType.push({
                ...tours[i],
                cardType: 'tours'
            })
        }

        return res.status(201).json({
            toursType, countTours
        })


    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}

export const getTourId = async (req: Request, res: Response) => {
    try{
        const tourRepository = dataSource.getRepository(Tour)
        const tour = await tourRepository.findOne({
            relations: ['city', 'city.country', 'type'],
            where: {id: Number(req.query.id)}
        })
        
        return res.status(201).json(tour)
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}


