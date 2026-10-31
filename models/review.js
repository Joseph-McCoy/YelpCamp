const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reveiwSchema = new Schema({
    body: String, 
    rating: Number
});

module.exports = mongoose.model('Review', reveiwSchema);
