import { DataSource } from 'typeorm';
import Tour from '../entities/Tour';
import City from '../entities/City';
import Type from '../entities/Type';
import Review from '../entities/Review';

const dataSource = new DataSource({
    type: 'sqlite',
    database: './src/database/databasesqlite.sqlite',
    entities: [Tour, City, Type, Review],
    synchronize: true,
    logging: false
})



export default dataSource