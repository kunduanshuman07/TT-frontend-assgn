import React from 'react'
import { Box, Button, Typography } from "@mui/material"

const ClaimsHeader = () => {
  return (
    <Box sx={{display: "flex", padding: "20px"}}>
      <img src='/assets/claims_alt.svg' alt='claims' style={{color: "#167E62", margin: "auto 10px"}} width={25} height={25}/>
      <Typography sx={{margin: "auto 2px", fontSize: "20px", fontWeight: "bold"}}>Claims</Typography>
      <Button sx={{marginLeft: "auto", textTransform: "none", padding: "0px 10px", backgroundColor: "#EEEEEE", borderRadius: "10px", color: "black"}} size='small'>Open</Button>
      <Button size='small' sx={{textTransform: "none", padding: "0px 10px", backgroundColor: "#EEEEEE", marginLeft: "10px", borderRadius: "10px", color: "black"}} disabled>Approved</Button>
      <Button size='small' sx={{textTransform: "none", padding: "0px 10px", backgroundColor: "#EEEEEE", marginLeft: "10px", borderRadius: "10px", color: "black"}} disabled>Rejected</Button>
    </Box>
  )
}

export default ClaimsHeader