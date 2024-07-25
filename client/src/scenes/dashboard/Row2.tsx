import BoxHeader from '@/components/BoxHeader'
import DashBoardBox from '@/components/Dashboard'
import { useGetKpisQuery, useGetProductsQuery } from '@/state/api'
import { useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type Props = {}

const Row2 = (props: Props) => {
  const {palette}=useTheme()

  const { data:operationalData }=useGetKpisQuery();

  const { data: productData } = useGetProductsQuery();
  

  const operationalExpenses=useMemo(()=>{
    return(
      operationalData && 
      operationalData[0].monthlyData.map(({month,operationalExpenses,nonOperationalExpenses})=>{
        return{
          name:month.substring(0,3).toUpperCase(),
          "Operational Expenses":operationalExpenses,
          "Non Operational Expenses":nonOperationalExpenses
        }
      })
    )
  },[operationalData])


  return(
  <>
    <DashBoardBox gridArea='d' >
    <BoxHeader
      title='Operational vs Non-Operational Expenses'
      sideText='+43%'
    />
  <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={operationalExpenses}
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
            dataKey='Non Operational Expenses'
            stroke={palette.tertiary[500]}
          />

          <Line 
            yAxisId='right'
            type='monotone'
            dataKey='Operational Expenses'
            stroke={palette.primary.main}
           />
        
        
        </LineChart>
      </ResponsiveContainer>
      </DashBoardBox>





    <DashBoardBox gridArea='e' ></DashBoardBox>
    <DashBoardBox gridArea='f' ></DashBoardBox>
  </>
  )
}

export default Row2