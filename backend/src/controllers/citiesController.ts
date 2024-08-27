import { Request, Response } from 'express'
import City from '../entities/City';
import dataSource from '../database/database';

export const createCity = async (req: Request, res: Response) => {
    try{
        const {
            name,
            country
        } = req.body;
        
        const cityRepository = dataSource.getRepository(City)

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
        const citys = await cityRepository.find()
        return res.status(201).json(citys)
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}