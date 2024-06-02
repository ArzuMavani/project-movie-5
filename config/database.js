const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://arzumavani1:12345@cluster0.dpdscem.mongodb.net/movies");

const db = mongoose.connection;

db.on('connected', (err) => {
    if(!err) {
        console.log(' connecting to database');
    }
})