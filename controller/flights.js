const Flight = require('../models/flight')
const Destination =require('../models/destination')

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
    if(req.body.departs){
         req.body.departs > Date.now()+ 365*24*60*60000 
}
        const flight = new Flight (req.body)
        flight.save(function(err){
            if (err)
            console.log(err)
            return res.render ('flights/new', {err:err})
        },
        console.log(flight),
        res.redirect(`/flights/${flight._id}`),             
        )}


function show(req, res){
    Flight.findById(req.params.id)
    .populate('destinations').exec(function(err, flight){
        Destination.find({_id:{$nin:flight.destinations}}),
        function(err, destinations){
           res.render('flights/show', {title: `Flight Details`, flights: flight},
           )}
    })
}
    
    
       
   
    



