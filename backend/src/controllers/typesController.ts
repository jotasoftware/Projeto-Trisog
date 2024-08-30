import { Request, Response } from 'express'
import Type from '../entities/Type';
import Tour from '../entities/Tour';
import dataSource from '../database/database';

export const createType = async (req: Request, res: Response): Promise<Response> => {
    try{
        const {
            name,
        } = req.body;
        
        const typeRepository = dataSource.getRepository(Type)

        const _type = new Type();
        _type.name = name;
        await typeRepository.save(_type);
        return res.status(201).json({message: 'Added'})
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}


export const getAllTypes = async (req: Request, res: Response) => {
    try{
        const typeRepository = dataSource.getRepository(Type)
        const types = await typeRepository.find()
        return res.status(201).json(types)
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
                quant: cheapest === Infinity ? null : tourType.length,
                price: cheapest === Infinity ? null : cheapest,
                cardType: 'types'
            })
        }

        return res.status(201).json(typesTour)
    } catch(error){
        console.error(error)
        return res.status(500).json({error: 'Failed'})
    }
}
