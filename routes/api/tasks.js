const express = require('express');
const router =  express.Router();

//Task model
const Task = require('../../models/Task');

// @route GET api/tasks
// @route  GET All Task
// @access public
router.get('/',(req, res) => {
    Task.find()
    .sort({ date: -1 })
    .then(tasks => res.json(tasks))
});

// @route POST api/tasks
// @desc Create a Task
// @access public
router.post('/',(req, res) => {
    const newTask = new Task({
        name: req.body.name,
        subject: req.body.subject,
        task: req.body.task
    });

    newTask.save().then(task => res.json(task));
});

// @route POST api/tasks/:id
// @desc Delete a task
// @access public
router.delete('/:id',(req, res) => {
    Task.findById(req.params.id)
    .then(task => task.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;