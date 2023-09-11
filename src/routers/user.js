const express = require('express');
const User = require('../models/user.js');
const auth = require('../middlaware/auth.js');
const router = express.Router();

//creating / register / signin user data
router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        const data = await user.save();
        const AuthUser = await User.findbyCredential(req.body.email, req.body.password);
        const token = await AuthUser.generateAuthToken();

        res.status(201).send({ user, token });
    } catch (e) {
        res.status(404).send(e.toString())
    }

})

//login user 
router.post('/users/login', async (req, res) => {
    try {
        // console.log(User.findbyCredential);
        const user = await User.findbyCredential(req.body.email, req.body.password);
        const token = await user.generateAuthToken()

        user.tokens = user.tokens.concat({ token })
        await user.save();

        res.send({ user  , token});
    } catch (e) {
        res.status(400).send('' + e)
    }
})

//logout user 
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token)

        await req.user.save();

        res.send('Successfully Logout')
    } catch (e) {
        res.status(500).send(e.toString())
    }
})

//logout all token
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.status(200).send('Logout All');
    }
    catch (e) {
        res.status(500).send(e.toString());
    }
})

//getting user data
router.get('/users/me', auth, async (req, res) => {
    // try {
    //     const userData = await User.find({});
    //     res.send(userData);
    // } catch (e) {
    //     res.status(500).send(e.name)
    // }

    res.send(req.user);

})

//getting user's id data
router.get('/users/:id', auth , async (req, res) => {
    const _id = req.params.id;

    try {
        const findData = await User.findById(_id);

        res.send(findData);
    } catch (e) {
        res.status(404).send(e.name)
    }

})

//updating perticuler id's data.
router.patch('/users/:id', auth , async (req, res) => {
    const updates = Object.keys(req.body);
    const allowsUpdate = ["name", "email", "password", "age"];
    const isValidaOperation = updates.every((update) => { allowsUpdate.includes(update) })

    if (isValidaOperation) {
        return res.status(404).send({ error: 'Invalidate Updates!' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update]);
        await req.user.save();

        res.send(req.user);
    } catch (e) {
        res.status(400).send('error' + e);
    }
})

//deleting user data by it's id 
router.delete('/users/me', auth ,async (req, res) => {

    // It's showing me error 

    // TypeError: req.user.remove is not a function

    try {
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send(e.toString())
    }

    //
})

module.exports = router;