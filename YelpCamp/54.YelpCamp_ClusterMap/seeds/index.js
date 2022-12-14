const mongoose = require('mongoose');

const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected...');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 350; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            author: '636fa97e0976f07f45ecb36e',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            geometry: { type: "Point", coordinates: [cities[random1000].longitude, cities[random1000].latitude] },
            images: {
                url: 'https://res.cloudinary.com/dwzsto3db/image/upload/v1668375294/YelpCamp/tfd7polyoj0limpxzfel.avif',
                filename: 'YelpCamp/tfd7polyoj0limpxzfel'
            },
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem totam harum beatae itaque adipisci assumenda est corrupti quod eos qui voluptatibus soluta, ipsa debitis suscipit quasi. Nostrum exercitationem sint asperiores.',
            price,
        });
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});
