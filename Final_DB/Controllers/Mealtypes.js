// const mealtype = require('../Models/locations.json')

// exports.getMealType = (req, res) => {
//     res.status(200).json(mealtype)
// }

const Mealtypes = require('../Models/Mealtypes');

exports.getMealType = (req, res) => {
    Mealtypes.find()
    .then(response=>{
        res.status(200).json({
            message: 'Mealtypes Fetched Successfully',
            mealtypes: response
        })
    })
    .catch(err=>{
        res.status(500).json({
            "error": err
        })
    })
};
