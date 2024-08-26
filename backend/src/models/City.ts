// import { DataTypes, Model, Sequelize } from 'sequelize';
// import db from '../database/database'

// const City = db.define('Citys', {
//     image: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     country: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
// }, {
//     modelName: 'City',
//     tableName: 'cities'
// });

// export default City;

// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// // import Tour from './Tour';

// @Entity('cities')
// class City {
//     @PrimaryGeneratedColumn()
//     id!: number;

//     @Column()
//     name!: string;

//     // @OneToMany(() => Tour, (tour) => tour.city)
//     // tours!: Tour[];
// }

// export default City;