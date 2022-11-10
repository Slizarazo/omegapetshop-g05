const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

// inicializaciones / initializations
const app = express();
require('./database');

// configuraciones / settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    LayoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));


// variables Globales / global variables


// Rutas / Routes
app.use(require('./routes/index'));
app.use(require('./routes/products'));
app.use(require('./routes/users'));


// archivos estaticos / static Files
app.use(express.static(path.join(__dirname, 'public')));

// listen server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})