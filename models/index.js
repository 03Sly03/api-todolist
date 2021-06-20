const {Sequelize} = require('sequelize'); 

const sequelize = new Sequelize(
    'mariadb://todolist_user:789@localhost/todolist'
    )

    const Task = require('./Task')(sequelize);
    const Tag = require('./Tag')(sequelize);
    const User = require('./User')(sequelize);

    // un utilisateur puisse avoir plusieurs tâches...
    // Mais qu'une tâche appartient à un seul utilisateur
    User.hasMany(Task);
    Task.belongsTo(User);

    // la tâche peut avoir plusieurs tags...
    // et un tag être dans plusieurs tâches
    Task.belongsToMany(Tag, {through:"task_tag"});
    Tag.belongsToMany(Task, {through: "task_tag"});


module.exports = sequelize;