// import Model class and DataTypes object from Sequelize to create our models from 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Exercise model from the Sequelize constructor
class Workout extends Model {}

// initialize the model's data and configuration
Workout.init(
    // first argument: defines table columns and configuration
    {
        // define columns with Sequelize DataTypes to define the data type
        // define an id column 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // exercise_list: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // personal_list: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    // second argument: configures certain options for the table.
    {
        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: true,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'workout'
    }
);

// export the newly created model so we can use it in other parts of the app
module.exports = Workout;