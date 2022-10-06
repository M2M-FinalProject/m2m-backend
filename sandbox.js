const { Event } = require('./models')

Event.findAll()
    .then((data)=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })