const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB-Connected'))
    .catch(err => console.error(err));