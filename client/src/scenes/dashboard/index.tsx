import DashBoardBox from '@/components/Dashboard';
import { Box,useMediaQuery } from '@mui/material'


type Props = {}

const gridTemplateLargeScreens=`
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"

`;
const gridTemplateSmallScreens=`
 "a"
 "a"
 "a"
 "a"
 "b"
 "b"
 "b"
 "c"
 "c"
 "c"
 "d"
 "d"
 "d"
 "e"
 "e"
 "f"
 "f"
 "f"
 "g"
 "g"
 "g"
 "h"
 "h"
 "h"
 "h"
 "i"
 "i"
 "j"
 "j"
`

const  Dashboard = (props: Props) => {
    const isAboveMediumScreens=useMediaQuery("(min-width:1200px")
  return <Box width='100%'
  height='100%'
  display='grid'
  gap='1.5rem'
  sx={
    isAboveMediumScreens ? {
    gridTemplateColumns:"repeat(3,minmax(370px,1 fr))",
    gridTemplateRows:"repeat(10,minmax(60px,1fr))",
    gridTemplateAreas:gridTemplateLargeScreens,
  } :
  {
    gridTemplateAreas:gridTemplateSmallScreens,
    gridAutoColumns:"1fr",
    gridAutoRows:"80px",
}
}
  > 
  
  <DashBoardBox gridArea='a' ></DashBoardBox>
  <DashBoardBox gridArea='b' ></DashBoardBox>
  <DashBoardBox gridArea='c' ></DashBoardBox>
  <DashBoardBox gridArea='d' ></DashBoardBox>
  <DashBoardBox gridArea='e' ></DashBoardBox>
  <DashBoardBox gridArea='f' ></DashBoardBox>
  <DashBoardBox gridArea='g' ></DashBoardBox>
  <DashBoardBox gridArea='h' ></DashBoardBox>
  <DashBoardBox gridArea='i' ></DashBoardBox>
  <DashBoardBox gridArea='j' ></DashBoardBox>
   </Box>
  
}

export default Dashboard 