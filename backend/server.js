import express from 'express';
import cors from 'cors';
import connection from './connection/connection.js';

const app = express();
app.use(cors());

//connecting to DB
connection()
    .then(
        console.log('Succesfully Connected to DB')
    )
    .catch((error) => {
        console.log(`error has occured :${error}`);
    });


// Root route
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

app.get('/test', async (req, res) => {
    try {
        const result = await connection.query('SELECT id FROM k');
        res.json(result.rows);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database query failed' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});