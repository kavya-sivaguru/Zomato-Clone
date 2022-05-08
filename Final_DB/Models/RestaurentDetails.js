const mongoose = require('mongoose');
// structure of data - bluprint
const Schema = mongoose.Schema;

// instance of schema
const restaurentDetailSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    city_name:{
        type: String,
        required: true,
    },
    locality:{
        type: String,
        required: true,
    },
    cost:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    city:{
        type: Number,
        required: true,
    },
})
// model method connects schema to the required collection in the database and takes 3 parameters
// (entity(any name can be given), schemaname, collectionName)
module.exports = mongoose.model('restaurentdetail', restaurentDetailSchema, 'RestaurentDetails')