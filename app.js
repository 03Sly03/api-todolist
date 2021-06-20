const sequelize = require("./models");

const express = require ("express");

const app = express();

const tagsRouter = require('./routers/tagsRouter');
app.use('/tags', tagsRouter);
const tasksRouter = require('./routers/tasksRouter');
app.use('/tasks', tasksRouter);
const usersRouter = require('./routers/usersRouter');
app.use('/users', usersRouter);

// pour accepter du JSON en envoi d'information
app.use(express.json());

const PORT = 4400;

console.log('Checking database connection...');

sequelize.authenticate()
.then(() => {
    console.log("database connection ok !");

    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`);
    });

    // sequelize.sync({force: true});
    
})
.catch((err) => {
    console.log("Unable to connect to the database !")
})