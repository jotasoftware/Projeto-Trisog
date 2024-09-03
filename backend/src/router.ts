import {Router, Request, Response} from 'express';
import { createTour, getBestTours, getTourId, getTourPagination } from './controllers/toursController'
import { createCity, getAllCities } from './controllers/citiesController'
import { createCountry, getAllCountries, getBestCountries, getCountryCities } from './controllers/countriesController'
import { createType, getAllTypes, getAllTypesWithTours } from './controllers/typesController'
import { createReview, getAllReviews, getAveragesReviews, getTourReviews, setReviewTour } from './controllers/reviewsController';

const router: Router = Router()


router.post('/tours', createTour)
router.get('/tours', getBestTours)
router.get('/tourspage', getTourPagination)
router.get('/toursid', getTourId)

router.post('/cities', createCity)
router.get('/cities', getAllCities)

router.post('/countries', createCountry)
router.get('/countries', getAllCountries)
router.get('/countriesBest', getBestCountries)
router.get('/countriesCity', getCountryCities)

router.post('/types', createType)
router.get('/types', getAllTypes)
router.get('/typestour', getAllTypesWithTours)

router.post('/reviews', createReview, setReviewTour)
router.get('/reviews', getAllReviews)
router.get('/reviewstour', getTourReviews)
router.get('/reviewsaverages', getAveragesReviews)


export {router}