import mongoose from "mongoose";
import {loadType} from "mongoose-currency";

const Schema=mongoose.Schema;

loadType(mongoose);

const daySchema=new Schema(
    {
        date:String,
        revenue:{
            type:moongoose.Types.Currency,
            Currency:"INR",
            get:(v)=>v/100
        },
        expenses:{
            type:moongoose.Types.Currency,
            Currency:"INR",
            get:(v)=>v/100
        },

    },
    {toJson:{getters:true}
}

)

const monthSchema=new Schema(
    {
        month:String,
        revenue:{
            type:moongoose.Types.Currency,
            Currency:"INR",
            get:(v)=>v/100
        },
        expenses:{
            type:moongoose.Types.Currency,
            Currency:"INR",
            get:(v)=>v/100
        },
        operationalExpenses:{
            type:moongoose.Types.Currency,
            Currency:"INR",
            get:(v)=>v/100
        },
        nonOperationalExpenses:{
            type:moongoose.Types.Currency,
            Currency:"INR",
            get:(v)=>v/100
        },

    },
    {toJson:{getters:true}}
)
const KPISchema=new Schema({
    totalProfit:{
        type:moongoose.Types.Currency,
        Currency:"INR",
        get:(v)=>v/100
    },
    totalRevenue:{
        type:moongoose.Types.Currency,
        Currency:"INR",
        get:(v)=>v/100

    },
    totalExpenses:{
    type:moongoose.Types.Currency,
    Currency:"INR",
    get:(v)=>v/100
    },
    expensesByCategory:{
        type:Map,
        of:{
            type:moongoose.Types.Currency,
            Currency:"INR",
            get:(v)=>v/100

        }
    },
    monthlyData:[monthSchema],
    dailyData:[daySchema],
},
{timestamps:true,toJson:{getters:true}}
)


const KPI = mongoose.model("KPI",KPISchema);