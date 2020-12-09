const mongoose = require('mongoose')
mongoose.Promise =global.Promise
const Schema= mongoose.Schema

const oneYear= 365*24*60*60000
const oneYearLater= function(){
    return new Date (Date.now() + oneYear)
}



const ticketSchema= new Schema({
    seat:{type: String, match: /[A-F][1-9]\d?/},
    cabinClass:{type: String, enum:['Economy', 'Premium Economy','Business', 'First Class'], default: ''},
    flightType:{type: String, enum:['Round Trip', 'One Way', 'Multi-City'], default:'Round Trip'},
    price:{type: Number, min: 0, default:200},
},{
    timestamps: true
})

const flightSchema = new Schema({
    airline: {type: String, enum:['American', 'Southwest', 'United', 'Delta', 'jetBlue', 'Frontier', 'Spirit'], default:''},
    airport: {type: String, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN','ATL', 'JFK'], default: 'DEN'},
    arrivalAirport:{type: String, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN','ATL', 'JFK'], default: 'LAX'},
    flightNo:{type: Number, required: [true,'Please enter your departure flight number'], min:10, max:9999, default: ''},
    arrivalFlightNo:{type: Number, required: [true,'Please enter your arrival flight number'], min:10, max:9999, default: ''},
    departs: {type:Date,  max: [oneYearLater, "Please select another date less than one calendar year"],default: new Date(Date.now()+365*24*60*60*1000)},  
    returns:{type: Date},
    tickets: [ticketSchema], 
    destinations:[{type: Schema.Types.ObjectId, ref: 'Destination'}]
},{
    timestamps: true
})



module.exports= mongoose.model('Flight', flightSchema)


