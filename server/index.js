import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import kpiRoutes from './routes/kpi.js'
import dotenv from 'dotenv';
import helmet from 'helmet';    
import morgan from 'morgan';
import transactionRoutes from "./routes/transaction.js";
import Transaction from "./models/Transaction.js";
import KPI from './models/KPI.js';
import {kpis,products,transactions} from './data/data.js'

import productRoutes from './routes/product.js'

import Product from "./models/Product.js";

// Configurations

dotenv.config();
const app=express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

// Routes
app.use("/kpi",kpiRoutes)

app.use("/product",productRoutes)

console.log('all good')

app.use("/transaction", transactionRoutes);

app.use("/",(req,res)=>{
    res.send("Welcome to the backend,Created by Abhishek for his Finanseer project")
})

// Mongoose Setup

const PORT=process.env.PORT || 9000;

mongoose
.connect(process.env.MONGO_URL,{
})
.then(async()=>{
    app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
//Add data one time only or as required
    //await mongoose.connection.db.dropDatabase();// used to drop the previous database
    //KPI.insertMany(kpis);
    //Product.insertMany(products);
    //Transaction.insertMany(transactions);
})
.catch((error)=>console.log(`${error} did not connect`))