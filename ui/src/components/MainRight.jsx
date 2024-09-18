import { Box } from '@mui/material'
import React, { useState } from 'react'
import Claims from './Claims'
import ClaimsHeaderAlt from './ClaimsHeaderAlt'
import ClaimsSearch from './ClaimsSearch'
import ClaimGrid from './ClaimGrid'
import SideSheet from './SideSheet'

const MainRight = () => {
  const [sideSheet, setSideSheet] = useState(false);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "80%", height: "93vh", margin: "auto", marginLeft: "20px", background: "white", borderRadius: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <Claims/>
      <ClaimsHeaderAlt/>
      <ClaimsSearch setSideSheet={setSideSheet}/>
      <ClaimGrid/>
      {sideSheet && <SideSheet setSideSheet={setSideSheet} sideSheet={sideSheet}/>}
    </Box>
  )
}

export default MainRight