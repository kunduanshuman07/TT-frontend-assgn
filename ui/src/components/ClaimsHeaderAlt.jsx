import { Box, Typography } from '@mui/material'
import React from 'react'

const ClaimsHeaderAlt = () => {
    return (
        <Box sx={{display: "flex", background: "#FAFAFA", padding: "0px 10px" }}>
            <img src='/assets/phone.svg' alt='phone' style={{marginLeft: "20px"}}/>
            <Box sx={{ display: "flex", flexDirection: "column", margin: "auto", marginLeft: "40px" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>17 employees want to claim their device allowances</Typography>
                <Typography sx={{ fontSize: "14px" }}>Review  their requests at the earliest to ensure a great benefit claim experience</Typography>
            </Box>
        </Box>
    )
}

export default ClaimsHeaderAlt