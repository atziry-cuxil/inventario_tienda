import express from 'express'
import cors from 'cors'
import { productRouter } from './src/router/productsRouter.js';
import { logger } from './src/middleware/loggerMiddleware.js';
import { errors } from './src/middleware/errorMiddleware.js';
import { pool } from './src/config/database.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5174',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json());
app.use(logger)
app.use('/api/products', productRouter)
app.use(errors)

try {
    await pool.query('select 1')
    app.listen(process.env.PORT, () => {
        console.log('Se esta ejecutando')
    })

} catch (error) {
    console.log('error de try catch')
    await pool.end();
}


