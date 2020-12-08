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

  function deleteTicket(req, res, next){
      Flight.findByIdAndDelete(req.params.id), function(err, flights){
          flights.tickets.id(req.params.id).remove();
          flight.save(function(err){
              res.redirect(`/flights/${flights._id}`)
          })
      }
  }

// function deleteTicket(req, res, next){
//     Flight.findByIdAndDelete(req.params.id)
//     console.log(req.params.id)
//     .then(()=>{
//         res.redirect(`/flights/${flights._id}`)
//     })    
// }
        
