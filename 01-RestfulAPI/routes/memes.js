const express = require('express');
const router = express.Router();
const Meme = require('../models/Meme');

// GET all memes or memes by userId
router.get('/', async (req, res) => {
    try {
        const { userId } = req.query;
        const query = userId ? { userId } : {};
        const memes = await Meme.find(query);
        res.json(memes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new meme
router.post('/', async (req, res) => {
    const meme = new Meme({
        userId: req.body.userId,
        imageUrl: req.body.imageUrl,
        caption: req.body.caption,
        lat: req.body.lat,
        lng: req.body.lng,
    });

    try {
        const newMeme = await meme.save();
        res.status(201).json(newMeme);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;