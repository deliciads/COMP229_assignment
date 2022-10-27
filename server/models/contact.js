/* 
  File name: COMP229_assignment
  Student Name: Delicia
  Student id: 301294501
  Date: 31st October 2022
*/

let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contacts",
});

module.exports = mongoose.model('Contact', contactModel);