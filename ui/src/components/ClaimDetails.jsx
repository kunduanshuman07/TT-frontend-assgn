import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ApprovalStepper from './ApprovalStepper'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
const ClaimDetails = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", padding: "20px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Request Details</Typography>
            <Box sx={{ display: "flex", padding: "10px 10px", borderRadius: "10px", border: "1px solid #EEEEEE", marginTop: "10px" }}>
                <img src='/assets/user_one.svg' alt='User' />
                <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                    <Typography sx={{ fontSize: "14px" }}>Aditya Garikapati</Typography>
                    <Typography sx={{ fontSize: "12px" }}>Frontend Developer</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "auto" }}>
                    <Typography sx={{ fontSize: "14px", textAlign: "right" }}>Requested 5m ago</Typography>
                    <Typography sx={{ fontSize: "12px", textAlign: "right" }}>12th April 2024</Typography>
                </Box>
            </Box>
            <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>Payment Terms</Typography>
            <Box sx={{ display: "flex", padding: "10px 10px", borderRadius: "10px", border: "1px solid #EEEEEE", marginTop: "10px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                    <img src='/assets/money.svg' alt='Money' width={20} height={15} />
                    <Typography sx={{ fontSize: "12px", marginTop: "5px" }}>Deductible amount</Typography>
                    <Typography sx={{ fontSize: "14px" }}>INR 13,416 / month</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "100px" }}>
                    <img src='/assets/calendar.svg' alt='Calendar' width={20} height={15} />
                    <Typography sx={{ fontSize: "12px", marginTop: "5px" }}>Tenure</Typography>
                    <Typography sx={{ fontSize: "14px" }}>6 months</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "10px 10px", borderRadius: "10px", border: "1px solid #EEEEEE", marginTop: "10px", background: "#EEEEEE" }}>
                <img src='/assets/warning.svg' alt='Warning' width={20} height={15} style={{ margin: "auto 0px" }} />
                <Box sx={{ display: "flex", marginLeft: "10px" }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>₹ 13,416 to be deducted from Aditya’s monthly salary under the non-taxable device allowance section over a period of 6 months</Typography>
                </Box>
            </Box>
            <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>Claimed Items</Typography>
            <Box sx={{ display: "flex", padding: "10px 10px", borderRadius: "10px", border: "1px solid #EEEEEE", marginTop: "10px" }}>
                <img src='/assets/iphone.svg' alt='Iphone' />
                <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                    <Typography sx={{ fontSize: "14px" }}>Iphone 15</Typography>
                    <Typography sx={{ fontSize: "12px" }}>128 GB Black</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", margin: "auto 0px auto auto" }}>
                    <Typography sx={{ fontSize: "14px", textAlign: "right" }}>INR 79,999</Typography>
                </Box>
            </Box>
            <Box sx={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #EEEEEE", display: "flex" }}>
                <img src='/assets/usercircle.svg' alt='User' />
                <Typography sx={{ fontWeight: "bold", marginLeft: "10px" }}>Approve Claim</Typography>
            </Box>
            <Typography sx={{ fontSize: "12px", marginLeft: "20px", marginTop: "10px" }}>You’re organisation has set up a multi-level claim approval process</Typography>
            <ApprovalStepper />
            <Box sx={{ display: "flex", marginTop: "10px", width: "100%" }}>
                <Button sx={{ padding: "10px 20px", width: "45%", borderRadius: "10px", margin: "10px", backgroundColor: "white", color: 'black', textTransform: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} startIcon={<CancelIcon sx={{color: "red"}}/>}>Reject</Button>
                <Button sx={{ padding: "10px 20px", width: "45%", borderRadius: "10px", margin: "10px", backgroundColor: "#167E62", color: 'white', textTransform: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} startIcon={<CheckCircleIcon sx={{color: "white"}}/>}>Approve</Button>
            </Box>
        </Box>
    )
}

export default ClaimDetails