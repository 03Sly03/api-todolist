const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Task',{
    content: {
        type: DataTypes.TEXT, // VARCHAR(255)
        allowNull: false // NOT NULL 
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false // pour régler la valeur par défaut
    }
},
{
    tableName: 'task',
    underscored: true
})