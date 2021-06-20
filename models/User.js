const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('User', {
    firstname:{
        type: DataTypes.STRING(60),
        allowNull:false
    },
    lastname:{
        type: DataTypes.STRING(60),
        allowNull: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    }
}, 
{
    tableName: 'user',
    underscored: true
})

