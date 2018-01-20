const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://root:root@ds211088.mlab.com:11088/youtubesearch');

db.on('error', () => {
    console.log("connection error")
});

db.once('open', () => {
    console.log('connected to mLab')
});

const favoriteSchema = mongoose.Schema({
    url: String,
    title: String,
    description: String,
    userDescription: String,
    category: String,
    channelTitle: String,
    chanelId: String,
    thumbnailDefaultUrl: String,
    channelUrl: String,
    videoId: String,
    durationUnit: String,
    publishedAt: String,
    addedToFavoriteDate: String
});

exports.Favorite = mongoose.model('Favorite', favoriteSchema);

