import { Request, Response } from 'express'
import City from '../entities/City';
import dataSource from '../database/database';
import Country from '../entities/Country';

export const createCity = async (req: Request, res: Response) => {
    try{
        const {
            name,
            countryId
        } = req.body;
        
        const cityRepository = dataSource.getRepository(City)
        const countryRepository = dataSource.getRepository(Country)
        const country = await countryRepository.findOneBy({id: countryId})

        if(!country){
            return res.status(400).json({error: 'Country not found'})
        }

        const _city = new City();
        _city.name = name;
        _city.country = country;
        await cityRepository.save(_city);
        return res.status(201).json({message: 'Added'})
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}

export const getAllCities = async (req: Request, res: Response) => {
    try{
        const cityRepository = dataSource.getRepository(City)
        const cities = await cityRepository.find({
            relations: ['country']
        })
        return res.status(201).json(cities)
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}