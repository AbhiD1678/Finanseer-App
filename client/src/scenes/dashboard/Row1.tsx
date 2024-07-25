import DashBoardBox from '@/components/Dashboard'
import { useGetKpisQuery } from '@/state/api'
import { useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type Props = {}

const Row1 = (props: Props) => {
    const {palette}=useTheme()
    const { data } = useGetKpisQuery();
    console.log("data:",data);
    
    const revenueExpenses=useMemo(()=>{
      return(
        data && 
        data[0].monthlyData.map(({month,revenue,expenses})=>{
          return{
            name:month.substring(0,3),
            revenue:revenue,
            expenses:expenses,
          }
        })
      )
    },[data])
  
    return (
    <>
  <DashBoardBox gridArea='a' >
  <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area 
          type="monotone" 
          dataKey="revenue" 
          stroke={palette.primary.main}  
          fillOpacity={1}
          fill="url(#colorRevenue)" />
        </AreaChart>
      </ResponsiveContainer>
  </DashBoardBox>
  <DashBoardBox gridArea='b' ></DashBoardBox>
  <DashBoardBox gridArea='c' ></DashBoardBox>
  </>
  )
}

export default Row1