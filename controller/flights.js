const Flight = require('../models/flight')

module.exports= {
    index, 
    new: newSearch,
    show,
    create
    
}

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {title: 'Flight Log',flights:flights})
    })
}

function newSearch(req, res){
    res.render('flights/new', {title:"Flight Search", err:''})

}
function create (req, res, next){
    Flight.create(req.body)
    if(req.body.departs) req.body.departs > Date.now()+ 365*24*60*60000             
    res.redirect('/flights')
    
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flight){
      res.render('flights/show', {title: 'Ticket Information', flights: flight})  
    })
    
}


