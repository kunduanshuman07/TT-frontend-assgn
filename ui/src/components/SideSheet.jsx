import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import React from 'react'

const SideSheet = ({ sideSheet, setSideSheet }) => {
  const handleCloseSheet = () => {
    setSideSheet(false);
  }
  return (
    <Dialog onClose={handleCloseSheet} open={sideSheet} maxWidth='md' fullWidth>
      <DialogTitle sx={{ display: "flex", background: "#EEEEEE" }}>
        <Box sx={{ display: "flex" }}>
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
        <Typography sx={{margin: "auto", textAlign: "center"}}>Aditya's Claim</Typography>
        <IconButton onClick={handleCloseSheet}>
          <HighlightOffIcon/>
        </IconButton>
      </DialogTitle>
      <DialogContent>

      </DialogContent>
    </Dialog>
  )
}

export default SideSheet