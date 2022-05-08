// const locations = require('../Models/locations.json')

// exports.getLocation = (req, res) => {
//     res.status(200).json(locations)
// }


// Locations - collectionname
const Locations = require('../Models/Locations');

exports.getLocation = (req, res) => {
    Locations.find()
    .then(response=>{
        res.status(200).json({
            message: 'Locations Fetched Successfully',
            locations: response
        })
    })
    .catch(err=>{
        res.status(500).json({
            "error": err
        })
    })
};
