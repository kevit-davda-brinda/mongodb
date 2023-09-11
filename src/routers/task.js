const express = require('express');
const router = new express.Router();
const Task = require('../models/task.js');
const auth = require('../middlaware/auth.js');

//creating task data
router.post('/task', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

//getting task data
router.get('/task', auth, async (req, res) => {

    try {

        // const findData = await Task.find({owner:req.user._id});

        //or

        await req.user.populate('tasks');

        res.send(req.user.tasks);
    } catch (e) {
        res.status(404).send(e.name)
    }

})

//getting task's id data
router.get('/task/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        // const findData = await Task.findById(_id);
        const findData = await Task.findOne({ _id, owner: req.user._id });

        if(!findData){
            res.status(404).send('Task not found!');
        }

        res.send(findData);
    } catch (e) {
        res.status(404).send(e.toString())
    }
})

//updating particluer task id's data.
router.patch('/task/:id', auth, async (req, res) => {
    const _id = req.params.id;
    const updates = Object.keys(req.body);
    const allowUpdates = ["description", "completed"];
    const isValidOperation = updates.every((update) => allowUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(404).send({ error: 'Invalidate Updates!' })
    }

    try {

        // const task = await Task.findById(id);

        const task = await Task.findOne({ _id, owner: req.user._id });

        if(!task){
            res.status(404).send('Task not found!');
        }

        // console.log(findData);

        // const updateTaskDataById = await Task.findByIdAndUpdate(id,res.body,
        //     {new : true , rubValidators: true});

        updates.forEach((update) => task[update] = req.body[update]);
        await task.save();

        // console.log(task);

        res.send(task);
    } catch (e) {
        res.status(400).send('error' + e);
    }
})

//deleting task by id
router.delete('/task/:id' , auth , async (req, res) => {

    const _id = req.params.id;

    try {
        const deleteDataById = await Task.findByIdAndDelete({ _id , owner : req.user._id});

        if (!deleteDataById) {
            return res.status(404).send({ error: 'Invalidate Data!' })
        }

        res.send(deleteDataById)

    } catch (e) {
        res.status(400).send(e.toString())
    }
})

module.exports = router;