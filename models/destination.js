const mongoose = require('mongoose')
mongoose.Promise =global.Promise
const Schema = mongoose.Schema

const destinationSchema = new Schema({
    destination:{type: String, unique: true}
},{
    timestamps: true
})

module.exports= mongoose.model('Destination', destinationSchema)