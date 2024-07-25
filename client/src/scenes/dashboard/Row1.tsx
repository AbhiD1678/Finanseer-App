import BoxHeader from '@/components/BoxHeader'
import DashBoardBox from '@/components/Dashboard'
import { useGetKpisQuery } from '@/state/api'
import {  useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const Row1 = () => {
    const {palette}=useTheme()
    const { data } = useGetKpisQuery();
    
    const revenueExpenses=useMemo(()=>{
      return(
        data && 
        data[0].monthlyData.map(({month,revenue,expenses})=>{
          return{
            name:month.substring(0,3).toUpperCase(),
            revenue:revenue,
            expenses:expenses,
          }
        })
      )
    },[data])



    const revenue=useMemo(()=>{
      return(
        data && 
        data[0].monthlyData.map(({month,revenue})=>{
          return{
            name:month.substring(0,3).toUpperCase(),
            revenue:revenue,
          }
        })
      )
    },[data])

    const revenueProfit=useMemo(()=>{
      return(
        data && 
        data[0].monthlyData.map(({month,revenue,expenses})=>{
          return{
            name:month.substring(0,3).toUpperCase(),
            revenue:revenue,
            profit:(revenue-expenses).toFixed(2),
          }
        })
      )
    },[data])
  
    return (
    <>
  <DashBoardBox gridArea='a' >
    <BoxHeader
      title='Revenue and Expenses'
      subtitle="top line represents revenue,bottom line represents expenses "
      sideText='+4%'
    />
  <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
          <defs>
            <linearGradient id='colorRevenue' x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
              <stop 
              offset="95%" 
              stopColor={palette.primary[300]} 
              stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorExpenses' x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
              <stop 
              offset="95%" 
              stopColor={palette.primary[300]} 
              stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} 
          style={{fontSize:"10px"}}/>
          <YAxis
          tickLine={false} 
          style={{fontSize:"10px"}}
          axisLine={{strokeWidth:"0"}}
          domain={[8000,23000]}
           />
          <Tooltip />
          <Area 
          type="monotone" 
          dataKey="revenue" 
          dot={true}
          stroke={palette.primary.main}  
          fillOpacity={1}
          fill="url(#colorRevenue)" />

          <Area 
          type="monotone" 
          dataKey="expenses" 
          dot={true}
          stroke={palette.primary.main}  
          fillOpacity={1}
          fill="url(#colorExpenses)" />
        
        
        </AreaChart>
      </ResponsiveContainer>
  </DashBoardBox>
  
  
  <DashBoardBox gridArea='b' >
  <BoxHeader
      title='Profit and Revenue'
      subtitle="Top line represents revenue,bottom line represents profit "
      sideText='+17%'
    />
  <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={revenueProfit}
          margin={{
            top: 20,
            right: 0,
            left: -10,
            bottom: 55,
          }}
        >
          <CartesianGrid vertical={false}  stroke={palette.grey[800]}/>
          <XAxis dataKey="name" tickLine={false} 
          style={{fontSize:"10px"}}/>
          <YAxis
          yAxisId='left'
          tickLine={false} 
          style={{fontSize:"10px"}}
          axisLine={false}
           />
          <YAxis
          yAxisId='right'
          orientation='right'
          tickLine={false} 
          style={{fontSize:"10px"}}
          axisLine={false}
           />
          <Tooltip />
          <Legend height={20} wrapperStyle={{
            margin:'0 0 10px 0'
          }}/>
          <Line 
            yAxisId='left'
            type='monotone'
            dataKey='profit'
            stroke={palette.tertiary[500]}
          />

          <Line 
            yAxisId='right'
            type='monotone'
            dataKey='revenue'
            stroke={palette.primary.main}
           />
        
        
        </LineChart>
      </ResponsiveContainer>
      </DashBoardBox>
  
  
  // Bar chart
  <DashBoardBox gridArea='c' >
  <BoxHeader
      title='Monthly Revenue'
      subtitle="Graph representing monthly revenue"
      sideText='+9%'
    />

  <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={revenue}
          margin={{
            top: 17,
            right: 15,
            left: -5,
            bottom: 58,
          }}
        >
          <defs>
          <linearGradient id='colorRevenue' x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" 
              stopColor={palette.primary[300]} 
              stopOpacity={0.8} />
              <stop 
              offset="95%" 
              stopColor={palette.primary[300]} 
              stopOpacity={0} />
            </linearGradient>
            </defs>
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis dataKey="name"
            axisLine={false}
            tickLine={false}
            style={{fontSize:"10px"}}
          />
          <YAxis 
          axisLine={false}
          tickLine={false}
          style={{fontSize:"10px"}}
          />
          <Tooltip />
          <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          
        </BarChart>
      </ResponsiveContainer>




  </DashBoardBox>
  </>
  )
}

export default Row1

// First one is the AreaChart which shows the revenue and expenses of the company over the months. The second one is the LineChart which shows the profit and revenue of the company over the months. The third one is the BarChart which shows the monthly revenue of the company.
// Second one is the biaxial chart which shows the profit and revenue of the company over the months. The third one is the BarChart which shows the monthly revenue of the company.
//Third One is the Bar chart which shows monthly profits of the company. The first one is the AreaChart which shows the revenue and expenses of the company over the months. The second one is the LineChart which shows the profit and revenue of the company over the months.