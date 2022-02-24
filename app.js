import express from 'express';

const app = express();

import userRoutes from './routes/userRoutes.js';

app.set('port', process.env.PORT || 3001);

//Middleware
app.use( function ( req, res, next ) {
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    res.header( "Access-Control-Allow-Methods", "POST, PUT, PATCH, DELETE, GET" );
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})