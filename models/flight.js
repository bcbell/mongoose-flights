const mongoose = require('mongoose')
const Schema= mongoose.Schema

const oneYear= 365*24*60*60000
const oneYearLater= function(){
    return new Date (Date.now() + oneYear)
}

const flightSchema = new Schema({
    airline: {type: String, enum:['American', 'Southwest', 'United', 'Delta', 'jetBlue', 'Frontier', 'Spirit'], default:''},
    airport: {type: String, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN','ATL', 'JFK'], default: 'DEN'},
    flightNo:{type: Number, required: [true,'Please enter your flight number'], min:10, max:9999, default: ''},
    departs: {type:Date, max: oneYearLater, default: new Date(Date.now()+365*24*60*60*1000)}
}) 
 

module.exports= mongoose.model('Flight', flightSchema)

