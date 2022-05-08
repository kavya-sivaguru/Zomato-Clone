// const details = require('../Models/RestaurentDetails')

// exports.getDetails = (req, res) => {
//     res.status(200).json(details)
// }

// exports.getDetailsByCity = (req, res) => {
//     const cityInput = req.params.city_name
//     const filteredDetails = details.filter(item => item.city_name == cityInput)
//     res.status(200).json(filteredDetails)
// }

const RestaurentDetails = require('../Models/RestaurentDetails');
// will return an array of objects
exports.getRestaurentByLocID = (req, res) => {
    const cityInput = req.params.city
    RestaurentDetails.find({city: cityInput})
    .then(response=>{
        res.status(200).json({
            message: 'Restaurent Details Fetched Successfully',
            restaurantsdetails: response
        })
    })
    .catch(err=>{
        res.status(500).json({
            "error": err
        })
    })
};
// only one object will be returned
exports.getRestaurentByResId = (req, res) => {
    const {resId} = req.params
    RestaurentDetails.findById(resId)
    .then(response=>{
        res.status(200).json({
            message: 'Restaurent Details Fetched Successfully',
            restaurantdetails: response
        })
    })
    .catch(err=>{
        res.status(500).json({
            "error": err
        })
    })
};

