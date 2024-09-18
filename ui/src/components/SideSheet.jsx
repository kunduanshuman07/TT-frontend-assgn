import { Box, Button, Dialog, DialogTitle, IconButton, Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import React from 'react'
import ClaimDetails from './ClaimDetails';

const SideSheet = ({ sideSheet, setSideSheet }) => {
  const handleCloseSheet = () => {
    setSideSheet(false);
  }
  return (
    <Dialog onClose={handleCloseSheet} open={sideSheet} maxWidth='md' fullWidth>
      <DialogTitle sx={{ display: "flex", background: "#EEEEEE", borderBottom: "1px solid #FFFFFF" }}>
        <Box sx={{ display: "flex" }}>
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
        <Typography sx={{ margin: "auto", textAlign: "center" }}>Aditya's Claim</Typography>
        <IconButton onClick={handleCloseSheet}>
          <HighlightOffIcon />
        </IconButton>
      </DialogTitle>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", background: "#EEEEEE", padding: "10px" }}>
          <Button sx={{ padding: "3px 10px", borderRadius: "10px", margin: "10px", backgroundColor: "white", color: 'black', textTransform: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>Claim details</Button>
          <Button sx={{ padding: "3px 10px", borderRadius: "10px", margin: "10px", backgroundColor: "white", color: 'black', textTransform: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>Payment breakdown</Button>
          <Button sx={{ padding: "3px 10px", borderRadius: "10px", margin: "10px", backgroundColor: "white", color: 'black', textTransform: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>Documents</Button>
        </Box>
        <Box sx={{ background: "white" }}>
          <ClaimDetails />
        </Box>
      </Box>
    </Dialog>
  )
}

export default SideSheet