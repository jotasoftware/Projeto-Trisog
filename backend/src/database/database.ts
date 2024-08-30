import { DataSource } from 'typeorm';
import Tour from '../entities/Tour';
import City from '../entities/City';
import Type from '../entities/Type';
import Review from '../entities/Review';
import Country from '../entities/Country';

const dataSource = new DataSource({
    type: 'sqlite',
    database: './src/database/database.sqlite',
    entities: [Tour, City, Type, Review, Country],
    synchronize: true,
    logging: false
})



export default dataSource