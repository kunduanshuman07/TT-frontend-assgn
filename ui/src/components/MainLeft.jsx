import React from 'react'
import { Box, Typography } from '@mui/material'

const MainLeft = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "20%", padding: "5px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", borderBottom: "1px solid #B8AFA4", paddingBottom: "20px" }}>
                <img src='/assets/logo.svg' alt='Logo' style={{ margin: "auto 10px auto 20px" }} width={28} height={18} />
                <Typography sx={{ color: "#B8AFA4", margin: "auto auto auto 0px", fontWeight: "bold", fontSize: "18px" }}>tortoise</Typography>
            </Box>
            <Box sx={{ marginTop: "10px", borderRadius: "10px", border: "2px solid #167E62", height: "70px", background: "#16AF8E", display: "flex", flexDirection: "row", padding: "10px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", background: "#16AF8E", margin: "auto 10px" }}>
                    <img src='/assets/claims.svg' alt='Claims' height={19} width={17} style={{ background: "#16AF8E" }} />
                    <Typography sx={{ color: "white", background: "#16AF8E", marginTop: "5px" }}>Claims</Typography>
                </Box>
                <Typography sx={{ color: "white", background: "#16AF8E", margin: "10px 10px 0px auto", fontSize: "24px" }}>17</Typography>
            </Box>
            <Box sx={{ marginTop: "10px", borderRadius: "10px", height: "70px", background: "rgba(25,25,25,0.03)", display: "flex", flexDirection: "row", padding: "10px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", background: "rgba(25,25,25,0)", margin: "auto 10px" }}>
                    <img src='/assets/employees.svg' alt='Claims' height={19} width={17} style={{ background: "rgba(25,25,25,0)" }} />
                    <Typography sx={{ color: "#114036", background: "rgba(25,25,25,0)", marginTop: "5px" }}>Employees</Typography>
                </Box>
                <Typography sx={{ color: "#114036", background: "rgba(25,25,25,0)", margin: "10px 10px 0px auto", fontSize: "24px" }}>3,456</Typography>
            </Box>
            <Box sx={{ marginTop: "10px", borderRadius: "10px", height: "70px", background: "rgba(25,25,25,0.03)", display: "flex", flexDirection: "row", padding: "10px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", background: "rgba(25,25,25,0)", margin: "auto 10px" }}>
                    <img src='/assets/devices.svg' alt='Claims' height={19} width={17} style={{ background: "rgba(25,25,25,0)" }} />
                    <Typography sx={{ color: "#114036", background: "rgba(25,25,25,0)", marginTop: "5px" }}>Devices</Typography>
                </Box>
                <Typography sx={{ color: "#114036", background: "rgba(25,25,25,0)", margin: "10px 10px 0px auto", fontSize: "24px" }}>128</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", padding: "20px 20px", borderTop: "1px solid #B8AFA4", marginTop: "10px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", marginTop: "5px" }}>
                    <img src='/assets/schedules.svg' alt='Claims' height={19} width={17} style={{ marginRight: "20px" }} />
                    <Typography sx={{ fontSize: "14px", color: "#114036" }}>Rental Schedules</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
                    <img src='/assets/billing.svg' alt='Claims' height={19} width={17} style={{ marginRight: "20px" }} />
                    <Typography sx={{ fontSize: "14px", color: "#114036" }}>Billing</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
                    <img src='/assets/organization.svg' alt='Claims' height={19} width={17} style={{ marginRight: "20px" }} />
                    <Typography sx={{ fontSize: "14px", color: "#114036" }}>Organization</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
                    <img src='/assets/support.svg' alt='Claims' height={19} width={17} style={{ marginRight: "20px" }} />
                    <Typography sx={{ fontSize: "14px", color: "#114036" }}>Support</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 20px", marginTop: "auto", position: "fixed", bottom: "3%" }}>
                <img src='/assets/name.svg' alt='Claims' height={19} width={17} style={{ marginRight: "20px" }} />
                <Typography sx={{ fontSize: "14px", color: "#114036" }}>Vardhan Koshal</Typography>
            </Box>
        </Box>
    )
}

export default MainLeft