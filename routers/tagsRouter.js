const express = require('express');
const router = express.Router();
const sequelize = require("../models");


router.get('/', (req, res) => {
    sequelize.models.Tag.findAll()
    .then(myTags => {
        res.send(myTags);
    })
})

router.get('/:id', (req,res) => {
    const id = req.params.id;

    sequelize.models.Tag.findByPk(id)
    .then(myTag => {
        res.send(myTag);
    })
})

module.exports = router;