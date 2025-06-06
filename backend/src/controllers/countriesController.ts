import { Request, Response } from 'express'
import Country from '../entities/Country';
import dataSource from '../database/database';
import City from '../entities/City';

export const createCountry = async (req: Request, res: Response) => {
    try{
        const {
            image,
            name,
            travelers,
        } = req.body;
        
        const countryRepository = dataSource.getRepository(Country)

        const _country = new Country();
        _country.image = image;
        _country.name = name;
        _country.travelers = travelers;
        await countryRepository.save(_country);
        return res.status(201).json({message: 'Added'})
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}

export const getAllCountries = async (req: Request, res: Response) => {
    try{
        const countryRepository = dataSource.getRepository(Country)
        const countries = await countryRepository.find()
        return res.status(201).json(countries)
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}
export const getBestCountries = async (req: Request, res: Response) => {
    try{
        const countryRepository = dataSource.getRepository(Country)
        const countries = await countryRepository.find({
            order: {
                travelers: 'DESC'
            }
        })
        const bestCountries = countries.slice(0, 6)
        return res.status(201).json(bestCountries)
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}

export const getCountryCities = async (req: Request, res: Response) => {
    try{
        const countryRepository = dataSource.getRepository(Country)
        const cityRepository = dataSource.getRepository(City)
        const country = await countryRepository.find()

        const countryCity = []
        for(let i:number=0; i<country.length; i++){
            const cityCountry = await cityRepository.find({
                relations: ['country'],
                where: {country: { id: country[i].id } }
            })
            
            if(cityCountry.length != 0){
                countryCity.push({
                    id: country[i].id,
                    name: country[i].name,
                    cities: [...cityCountry]
                })
            }else{
                countryCity.push({
                    id: country[i].id,
                    name: country[i].name,
                })
            }
            
        }
        return res.status(201).json(countryCity)
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}

export const deleteCountry = async (req: Request, res: Response) => {
    try{
        const { id } = req.params
        const countryRepository = dataSource.getRepository(Country)
        const country = await countryRepository.findOneBy({ id: parseInt(id) })

        if (!country) {
            return res.status(404).json({ error: 'Country not found' })
        }   
        await countryRepository.remove(country)

        return res.status(200).json({ message: 'Success' })
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}