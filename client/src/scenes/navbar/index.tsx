import {useState} from 'react'
import { Link } from 'react-router-dom'
import { Box,Typography,useTheme } from '@mui/material'
import PixIcon from '@mui/icons-material/Pix';
import FlexBetween from '@/components/FlexBetween';


type Props = {};

const Navbar = (props: Props) => {
    const { palette }=useTheme();
    const [selected,setSelected]=useState('dashboard'); /*To know which page is selected,the default value is set to dashboard*/ 
    return <FlexBetween 
    mb='0.25rem' 
    p='0.5rem 0rem'
    color={palette.grey[300]}>
        {/* {Left Side} */}
        <FlexBetween gap="0.75rem">
            <PixIcon/>
        </FlexBetween>
    
    </FlexBetween>
  
};

export default Navbar