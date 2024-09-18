import React from 'react'
import { Box, Button, Typography } from "@mui/material"

const ClaimsHeader = () => {
  return (
    <Box sx={{display: "flex", padding: "10px"}}>
      <img src='/assets/claims_alt.svg' alt='claims' style={{color: "#167E62", margin: "auto 10px"}} width={25} height={25}/>
      <Typography sx={{margin: "auto 2px", fontSize: "20px", fontWeight: "bold"}}>Claims</Typography>
      <Button>Open</Button>
      <Button>Approved</Button>
      <Button>Rejected</Button>
    </Box>
  )
}

export default ClaimsHeader