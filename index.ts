import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.router'
dotenv.config();
import { sequelize } from './models'

const app: Express = express();
const port = process.env.PORT;


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// app.use('/users', userRoutes)

app.listen(port, async() => {
  await sequelize.authenticate();
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});