import {Router, Request, Response} from 'express';
import { createTour, getAllTours } from './controllers/toursController'
import { createCity, getAllCities } from './controllers/citiesController'
import { createType, getAllTypes, getAllTypesWithTours } from './controllers/typesController'
import { createReview, getAllReviews } from './controllers/reviewsController';

const router: Router = Router()


router.post('/tours', createTour)
router.get('/tours', getAllTours)

router.post('/cities', createCity)
router.get('/cities', getAllCities)

router.post('/types', createType)
router.get('/types', getAllTypes)
router.get('/typestour', getAllTypesWithTours)

router.post('/reviews', createReview)
router.get('/reviews', getAllReviews)
router.get('/cities', (req: Request, res: Response) => {
    res.json(
        {
            message: 'bom dia'
        }
    )
})
router.get('/popularstours', (req: Request, res: Response) => {
    res.json(
        {
            message: 'bom dia'
        }
    )
})
router.get('/types', (req: Request, res: Response) => {
    res.json(
        {
            message: 'bom dia'
        }
    )
})
router.get('/tours', (req: Request, res: Response) => {
    res.json(
        {
            message: 'bom dia'
        }
    )
})

router.post('/setreview', (req: Request, res: Response) => {
    res.json(
        {
            message: 'bom dia'
        }
    )
})

export {router}