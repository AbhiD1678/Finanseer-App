import DashBoardBox from '@/components/Dashboard'
import { useGetKpisQuery } from '@/state/api'
import React from 'react'

type Props = {}

const Row1 = (props: Props) => {
    const { data } = useGetKpisQuery();
  return (
    <>
  <DashBoardBox gridArea='a' ></DashBoardBox>
  <DashBoardBox gridArea='b' ></DashBoardBox>
  <DashBoardBox gridArea='c' ></DashBoardBox>
  </>
  )
}

export default Row1