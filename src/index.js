const express = require('express');
const app = express();
const path = require('path');
const indexRoute = require('./routes/index');


// configuraciones
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// routes
app.use(indexRoute);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listenig the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});

