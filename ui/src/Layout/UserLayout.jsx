import React from 'react'
import MainLeft from '../components/MainLeft'
import MainRight from '../components/MainRight'
import { Box } from '@mui/material'

const UserLayout = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "row", padding: "20px", width: "97%"}}>
        <MainLeft/>
        <MainRight/>
    </Box>
  )
}

export default UserLayout