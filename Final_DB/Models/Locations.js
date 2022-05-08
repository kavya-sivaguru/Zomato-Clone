const mongoose = require('mongoose');
// structure of data - bluprint
const Schema = mongoose.Schema;

// instance of schema
const locationSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    }
})
// model method connects schema to the required collection in the database and takes 3 parameters
// (entity(any name can be given), schemaname, collectionName)
module.exports = mongoose.model('location', locationSchema, 'Locations')

// app --> router(index.js) --> Controllers --> Model(schema) --> Controller(find method)= data received