import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import kpiRoutes from './routes/kpi.js'
import dotenv from 'dotenv';
import helmet from 'helmet';    
import morgan from 'morgan';

import KPI from './models/KPI.js';
import {kpis} from './data/data.js'

// Configurations

dotenv.config();
const app=express();
app.use(express.json);
app.use(helmet);
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

// Routes
app.use("/kpi",kpiRoutes)

console.log('all good')


// Mongoose Setup

const PORT=process.env.PORT || 9000;

mongoose
.connect(process.env.MONGO_URL)
.then(async()=>{
    app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
// Add data one time only or as required
    // await mongoose.connection.db.dropDatabase();// used to drop the previous database
    // KPI.insertMany(kpis);
})
.catch((error)=>console.log(`${error} did not connect`))