import { Box } from '@mui/material'
import React from 'react'
import Claims from './Claims'

const MainRight = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "80%", height: "88vh", padding: "15px", margin: "auto", marginLeft: "20px", background: "white", borderRadius: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <Claims/>
    </Box>
  )
}

export default MainRight