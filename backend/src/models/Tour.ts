// // import { DataTypes, Model, Sequelize } from 'sequelize';
// // import sequelize from '../database/database'

// // import Type from './Type';
// // import City from './City';

// // const Tour = sequelize.define('Tours', {
// //     name: {
// //         type: DataTypes.STRING,
// //         allowNull: false
// //     },
// //     image: {
// //         type: DataTypes.STRING,
// //         allowNull: false
// //     },
// //     cityId: {
// //         type: DataTypes.INTEGER,
// //         allowNull: false,
// //         references: {
// //             model: City,
// //             key: 'id'
// //         }
// //     },
// //     typeId: {
// //         type: DataTypes.INTEGER,
// //         allowNull: false,
// //         references: {
// //             model: Type,
// //             key: 'id'
// //         }
// //     },
// //     duration: {
// //         type: DataTypes.INTEGER,
// //         allowNull: false
// //     },
// //     maxPeople: {
// //         type: DataTypes.INTEGER,
// //         allowNull: false
// //     },
// //     minAge: {
// //         type: DataTypes.INTEGER,
// //         allowNull: false
// //     },
// //     price: {
// //         type: DataTypes.FLOAT,
// //         allowNull: false
// //     },
// //     dateStart: {
// //         type: DataTypes.DATE,
// //         allowNull: false
// //     },
// //     averageReview: {
// //       type: DataTypes.FLOAT,
// //       allowNull: false,
// //     },
// // }, {
// //     modelName: 'Tour',
// //     tableName: 'tours'
// // });

// // Tour.belongsTo(City, {foreignKey: 'cityId'})
// // Tour.belongsTo(Type, {foreignKey: 'typeId'})

// // export default Tour;

// import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
// import sequelize from '../database/database'

// import Type from './Type';
// import City from './City';

// interface TourAttributes {
//     id?: number
//     name: string
//     image: string
//     cityId: number
//     typeId: number
//     duration: number
//     minAge: number
//     maxPeople: number
//     price: number
//     dateStart: Date
//     averageReview?: number
// }

// type TourAttributesOptional = Optional<TourAttributes, 'id' | 'averageReview'>

// class Tour extends Model <TourAttributes, TourAttributesOptional> implements TourAttributes {
//     id?: number
//     name!: string
//     image!: string
//     cityId!: number
//     typeId!: number
//     duration!: number
//     minAge!: number
//     maxPeople!: number
//     price!: number
//     dateStart!: Date
//     averageReview?: number

//     public readonly createdAt!: Date;
//     public readonly updatedAt!: Date;
// }
// Tour.init({
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     image: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     cityId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: City,
//             key: 'id'
//         }
//     },
//     typeId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: Type,
//             key: 'id'
//         }
//     },
//     duration: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     maxPeople: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     minAge: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     price: {
//         type: DataTypes.FLOAT,
//         allowNull: false
//     },
//     dateStart: {
//         type: DataTypes.DATE,
//         allowNull: false
//     },
//     averageReview: {
//       type: DataTypes.FLOAT,
//       allowNull: true,
//     },
// }, {
//     modelName: 'Tour',
//     tableName: 'tours',
//     sequelize: sequelize
// });

// Tour.belongsTo(City, {foreignKey: 'cityId'})
// Tour.belongsTo(Type, {foreignKey: 'typeId'})

// export default Tour;