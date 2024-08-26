// import { DataTypes, Model, Sequelize } from 'sequelize';
// import db from '../database/database'
// import Tour from './Tour';

// const Review = db.define('Reviews', {
//     tourId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: Tour,
//             key: 'id'
//         }
//     },
//     services: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     prices: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     locations: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     food: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     amenties: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     room: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     comment: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// }, {
//     modelName: 'Review',
//     tableName: 'reviews'
// });

// Tour.hasMany(Review, {foreignKey: 'tourId'})
// Review.belongsTo(Tour, {foreignKey: 'tourId'})

// export default Review;