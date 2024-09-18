import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "./Grid.css"
import { Typography } from '@mui/material';

const columns = [
    {
        field: 'employee',
        headerName: 'Employee',
        flex: 1,
        editable: true,
        align: "center",
        headerClassName: 'grid-header',
        cellClassName: 'grid-cells'

    },
    {
        field: 'device',
        headerName: 'Device',
        flex: 1,
        editable: true,
        align: "center",
        headerClassName: 'grid-header',
        cellClassName: 'grid-cells'

    },
    {
        field: 'requested_on',
        headerName: 'Requested On',
        type: 'number',
        flex: 1,
        editable: true,
        align: "center",
        headerAlign: "left",
        headerClassName: 'grid-header',
        cellClassName: 'grid-cells'

    },
    {
        field: 'amount_payable',
        headerName: 'Amount Payable',
        type: 'number',
        flex: 1,
        editable: true,
        align: "center",
        headerAlign: "left",
        headerClassName: 'grid-header',
        cellClassName: 'grid-cells'

    },
    {
        field: 'approval_btn',
        headerName: '',
        type: 'number',
        flex: 1,
        editable: true,
        align: "center",
        headerAlign: "left",
        headerClassName: 'grid-header',
        cellClassName: 'grid-cells'

    },
];

const rows = [];

const ClaimGrid = () => {
    return (
        <Box sx={{ padding: "0px 20px", display: "flex", flexDirection: "column"}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                className='gridclass'
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                getRowClassName={'grid-rows'}
            />
        </Box>
    )
}

export default ClaimGrid