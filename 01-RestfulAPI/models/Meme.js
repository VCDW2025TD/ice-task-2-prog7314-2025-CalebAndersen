const mongoose = require('mongoose');

const MemeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    lng: {
        type: Number,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Meme', MemeSchema);