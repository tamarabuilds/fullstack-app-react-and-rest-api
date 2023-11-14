'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Course extends Model {}
    Course.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A title is required'
                },
                notEmpty: {
                    msg: 'Please provide a title'
                },
            },

        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A description is required'
                },
                notEmpty: {
                    msg: 'Please provide a description'
                },
            },

        },
        estimatedTime: {
            type: DataTypes.STRING,
            
        },
        materialsNeeded: {
            type: DataTypes.STRING,
            
        },

    }, { sequelize });

    Course.associate = (models) => {
        // Tells Sequelize that a course can be associated with only 1 user
        Course.belongsTo(models.User, {
            foreignKey: {
                fieldName: 'userId',
            },
        });
    };


    return Course;
};