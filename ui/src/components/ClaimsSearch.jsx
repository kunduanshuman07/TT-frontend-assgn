import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ChecklistIcon from '@mui/icons-material/Checklist';
import React from 'react'

const ClaimsSearch = ({setSideSheet}) => {
    return (
        <Box sx={{ marginTop: "10px", padding: "10px 20px", display: "flex" }}>
            <TextField
                type='text'
                placeholder='Search by name'
                slotProps={{
                    input: {
                        startAdornment:
                            <InputAdornment position="start">
                                <IconButton sx={{width:"16px", height: "16px"}}>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>,
                    },
                }}
                sx={{
                    ".css-19j5ahi-MuiInputBase-input-MuiOutlinedInput-input": {
                        height: "0em",
                        fontSize: "14px"
                    },
                    ".css-2a7nsh-MuiInputBase-root-MuiOutlinedInput-root": {
                        width: "220px",
                        borderRadius: "8px",
                        background: "#EEEEEE"
                    }
                }}
            />
            <Box sx={{marginLeft: "auto", display: "flex"}}>    
                <Button sx={{textTransform: "none", padding: "0px 10px", borderRadius: "10px", backgroundColor: "white", color: "black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}} startIcon={<FilterAltIcon/>}>Filters</Button>
                <Button sx={{textTransform: "none", padding: "0px 10px", borderRadius: "10px", backgroundColor: "white", color: "black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", marginLeft: "10px"}} startIcon={<ChecklistIcon/>} onClick={() => setSideSheet(true)}>Bulk actions</Button>
            </Box>
        </Box>
    )
}

export default ClaimsSearch