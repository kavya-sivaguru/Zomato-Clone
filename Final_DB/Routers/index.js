const express = require('express');
const route = express.Router();

const locationController = require("../Controllers/Location");
const restaurentController = require("../Controllers/RestaurentDetails")
const mealTypeController = require("../Controllers/Mealtypes")
const userController = require("../Controllers/Users")
// middleware
route.get('/locations', locationController.getLocation);
route.get('/mealtypes', mealTypeController.getMealType);
route.get('/restaurents/:city', restaurentController.getRestaurentByLocID);
// FN req --> BN --> from req url(only one or data can be passed) or req body(lots of data can de attached to the req) --> 
route.post('/userlogin', userController.userLogin)
route.post('/usersignup', userController.userSignUp)
// route.post('/fiter', restaurentController.restaurentsFilter)

route.get('/restaurent/:resId', restaurentController.getRestaurentByResId);


module.exports = route;