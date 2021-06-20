const express = require('express');
const router = express.Router();
const sequelize = require("../models");

router.get('/', (req, res) => {
    sequelize.models.User.findAll()
    .then(myUsers => {
        res.send(myUsers);
    })
})
router.get('/:id', (req,res) => {
    const id = req.params.id;

    sequelize.models.User.findByPk(id)
    .then(myUser => {
        res.send(myUser);
    })
})

module.exports = router;