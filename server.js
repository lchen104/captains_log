const express = require('express');
const app = express();
const PORT = 5005;

// Setting up the view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.render('New');
})

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})