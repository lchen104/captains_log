require('dotenv').config()

const express = require('express');
const app = express();
const PORT = 5005;

// import Pokemon
const Log = require('./models/logs.js')

// import mongoose
const mongoose = require('mongoose');

// Connect With Mongoose 
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
});

// Connect Express to Mongo
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

const methodOverride = require('method-override');

// Setting up the view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// This is called 'middleware'
// It runs in the middle of the request response cycle (in the middle)
// sometime after the request is received, but before the final route handler is called
// Be sure to put middleware at the top of your server.js file,
// so that other routes don't handle the request and send the response
// before the middleware can be executed.
// Most of the time, you won't write your own middleware,
// but a lot of plugins and extended functionality of express exist as middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// Near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    // res.send('Welcome to the Starlogs App!')
    res.render('Main')
})

// index page to list all captains logs
app.get('/logs', async function(req, res) {
    const foundLogs = await Log.find({})
        res.render('Index', {
            logs: foundLogs
    })

    // res.render('Index', {
    //     pokemon: pokemon
    // })
})

// create new log
app.get('/logs/new', (req, res) => {
    res.render('New');
})

// create a post request
app.post('/logs', async (req, res)=>{
    console.log(req.body)

    if(req.body.shipIsBroken === 'on'){ //if checked, req.body.readyToFight is set to 'on'
        req.body.shipIsBroken = true; //do some data correction
    } else { //if not checked, req.body.readyToFight is undefined
        req.body.shipIsBroken = false; //do some data correction
    }

    const createdLog = await Log.create(req.body)
    console.log(createdLog)
    res.redirect('/logs')

    // const createdLog = await Log.create(req.body)
    // res.send(createdLog)

});


// Show logs
app.get('/logs/:id', async (req, res) => {
    const onelog = await Log.findById(req.params.id)
    // console.log(onelogs.title)
    res.render('Show', {
        log: onelog
    })
})

// edit logs from mongoDB
app.get('/logs/:id/edit', async (req, res) => {
    const foundlog = await Log.findById(req.params.id)
    res.render('Edit', {
        log: foundlog
    })
})

// update log from mongoDB
app.put('/logs/:id', async (req, res) => {

    // verify if checkbox is clicked
    req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false;
   
    // find the log and update by id
    const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body)
    console.log(updatedLog)
    res.redirect(`/logs/${req.params.id}`)
})

// delete log from mongoDB
app.delete('/logs/:id', async (req, res) => {
    // res.send('deleting...')
    await Log.findByIdAndRemove(req.params.id)
    res.redirect('/logs')
})

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})