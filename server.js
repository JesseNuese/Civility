var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Routes = require('./routes'),
    PORT = process.env.PORT || 3000;

// mongoose.connect('mongodb://localhost/', (err) => {
//     if (err) {
//         console.log('Error: ', err);
//     } else {
//         console.log('Successfully connected to database!');
//     }
// });

var app = express();

// Middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}), bodyParser.json());

// Routes
Routes(app);

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});
