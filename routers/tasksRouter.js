const express = require('express');
const router = express.Router();
const sequelize = require("../models");

router.post('/', (req, res) => {
    sequelize.models.Task.create(req.body)
    .then(taskCreated => {
        res.send(taskCreated);
    })
})

router.get('/', (req, res) => {
    sequelize.models.Task.findAll()
    .then(myTasks => {
        res.send(myTasks);
    })
})
router.get('/:id', (req,res) => {
    const id = req.params.id;

    sequelize.models.Task.findByPk(id)
    .then(myTask => {
        res.send(myTask);
    })
})

router.patch('/:id', (req,res) => {
    const idToUpdate = req.params.id;
    sequelize.models.Task.update(req.body, 
        {where: {id : idToUpdate}})
    .then(taskUpdated => {
        res.send(taskUpdated);
    })
})

router.delete('/:id', (req,res) => {
    sequelize.models.Task.destroy({
        where:{id:req.params.id}
    }).then(() => {
        res.send({info: 'task Deleted'})
    })
})

module.exports = router;