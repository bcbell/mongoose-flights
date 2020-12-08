const Destination = require('../models/destination')
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
    Flight.findById(req.params.id)
    .populate('destinations').exec(function(err, flight){
        Destination.find({_id:{$nin: flight.destinations}}, function(err,
            destination){
                res.render('flights/show', {title: 'Flight Details',flight, destination})
            })
    })
}

// function show(req, res){
//     Flight.findById(req.params.id, function(err, flight){
//       res.render('flights/show', {title: `Flight Details`, flights: flight})  
//     })
    
// }



