const mongoose = require('mongoose')
const Schema= mongoose.Schema

const oneYear= 365*24*60*60*60000
const oneYearLater= function(){
    return new Date(Date.now() + oneYear)
}

const flightSchema = new Schema({
    airline: {type: String, enum:['American', 'Southwest', 'United']},
    airport: {type: String, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightNo:{type: Number, required: true, min: 10, max:9999},
    departs: {type:Date, default: oneYearLater}
}) 
 

module.exports= mongoose.model('Flight', flightSchema)

