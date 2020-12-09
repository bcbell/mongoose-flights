const Flight= require('../models/flight')
const flights = require('./flights')


module.exports= {
    create,
    deleteTicket
}


 
function create(req, res) {
    Flight.findById(req.params.id, function(err, flights) {
      flights.tickets.push(req.body)
      flights.save(function(err) {
        res.redirect(`/flights/${flights._id}`)
      })
    })
  }


// function deleteTicket(req, res, next){
//     Flight.findByIdAndDelete(req.params.flightId, function(err, flights){
//     const idx= flights.tickets.findIndex(ticket=>ticket._id ==req.params.ticketId)
//     flight.tickets.splice(idx, 1)
//     flight.save(function(err){
//               res.redirect(`/flights/${flights._id}`)

// })
//     }   
//     )}
        
function deleteTicket(req, res, next){
    Flight.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.redirect(`/flights/${flights._id}`)
    })
}