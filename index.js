import express from 'express'
import { usersPool, ordersPool } from './db/server.js'
import usersRouter from './routes/usersrouter.js'
import ordersRouter from './routes/ordersrouter.js'

const app = express();
const port = 3000;

app.use(express.json());
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`Server is running on port: ${port}`));