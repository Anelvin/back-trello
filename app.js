import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hola Mundo')
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log('Server on port ' + PORT);
})