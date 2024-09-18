import { Box } from '@mui/material'
import React from 'react'
import ClaimsHeader from './ClaimsHeader'

const Claims = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
        <ClaimsHeader/>
    </Box>
  )
}

export default Claims