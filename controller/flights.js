const Destination = require('../models/destination')
const Flight = require('../models/flight')

module.exports= {
    index, 
    new: newSearch,
    show,
    create,
    deleteFlight
    
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
    .populate('destination').exec(function(err, flight){
        Destination.find({'_id':{$nin: flight.destinations}}, function(err,destinations){
            console.log(err)
                res.render('flights/show', {title: 'Flight Details',flight, destinations})
            })
    })
}

function deleteFlight(req, res, next){
    Flight.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.redirect('/flights')
    })
        .catch(()=>console.log('error'))
    }


