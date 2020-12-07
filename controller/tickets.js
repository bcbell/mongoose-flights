const Flight= require('../models/flight')


module.exports= {
    create,
    delete: deleteTicket
}
 
function create(req, res) {
    Flight.findById(req.params.id, function(err, flights) {
      flights.tickets.push(req.body)
      flights.save(function(err) {
        res.redirect(`/flights/${flights._id}`)
      })
    })
  }

function deleteTicket(req, res){
    Flight.deleteOne(req.params.id)
        res.redirect(`/flights/${flights._id}`)

}