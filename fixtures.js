const sequelize = require("./models");
const faker = require ("faker");

console.log('Checking database connection...');

function generateTasks() {
    for(let i=1; i<=30; i++) {
        sequelize.models.Task.create({
            content: faker.lorem.words(5),
            completed: faker.datatype.boolean()
        })
    }
}

function generateTags() {
    for(let i=1; i<=40; i++) {
        sequelize.models.Tag.create({
            name: faker.lorem.words(2)
        })
    }
}

function generateUsers() {
    for(let i=1; i<=10; i++) {
        sequelize.models.User.create({
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email: faker.internet.email()
        })
    }
}

sequelize.authenticate()
.then(() => {
    console.log("database connection ok !");

    sequelize.sync({force: true})
    .then(() => {
        generateUsers()
        sequelize.models.User.create({
            firstname: "Albert",
            lastname: "Kalavitchy",
            email: "abka@example.com"
        })
        sequelize.models.User.create({
            firstname: "John",
            email: "Jo@false.com"
        })
        sequelize.models.User.create({
            firstname: "Glenn",
            lastname: "Cowboy",
            email: "glecow@true.com"
        })
    })
    .then(() => {
        generateTags()
        sequelize.models.Tag.create({
            name: "Mécanique"
        })
        sequelize.models.Tag.create({
            name: "Maison"
        })
    })
    .then(() => {
        generateTasks()
        sequelize.models.Task.create({
            content: "Faire la vidange de la renault Scenic 2"
        })
        sequelize.models.Task.create({
            content: "Réparation turbo passat"
        })
        sequelize.models.Task.create({
            content: "Débosselage carrosserie newbeatle"
        })
        sequelize.models.Task.create({
            content: "Faire le ménage maison",
            completed: true
        })
        sequelize.models.Task.create({
            content: "Tondre la pelouse",
            completed: true
        })
    })

    
})
.catch((err) => {
    console.log("Unable to connect to the database !")
})