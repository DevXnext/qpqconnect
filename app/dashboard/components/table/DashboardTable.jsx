import React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function createData(product, id, customer, date, amount, method, status) {
    return { product, id, customer, date, amount, method, status };
}

const rows = [
    createData('Acer Nitro 5', 1143155, 'John Smith', '1 March', 785, 'Cash on Delivery', 'Approved'),
    createData('Playstation 5', 2235235, 'Michael Doe', '1 March', 900, 'Online Payment', 'Pending'),
    createData('Redragon S101', 2342353, 'John Smith', '1 March', 35, 'Cash on Delivery', 'Pending'),
    createData('Razer Blade 15', 2357741, 'Jane Smith', '1 March', 920, 'Online', 'Approved'),
    createData('ASUS ROG Strix', 2342355, 'Harold Carol', '1 March', 2000, 'Online', 'Pending'),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

// type Order = 'asc' | 'desc';

function getComparator(
    order,
    orderBy,
) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: 'ID',
    },
    {
        id: 'date',
        numeric: false,
        disablePadding: false,
        label: 'Date',
    },
    {
        id: 'customer',
        numeric: false,
        disablePadding: false,
        label: 'Customer Name',
    },
    {
        id: 'product',
        numeric: false,
        disablePadding: false,
        label: 'Product',
    },
    {
        id: 'amount',
        numeric: true,
        disablePadding: false,
        label: 'Amount',
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler =
        (property) => (event) => {
            onRequestSort(event, property);
        };


    return (
        <TableHead>
            <TableRow>

                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.id ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{
                            backgroundColor: '#f0f0f0',
                        }}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

function EnhancedTableToolbar(props) {
    const { numSelected } = props;
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Grid container alignItems="center" sx={{ marginBottom: 2 }}>
                    <Grid item sx={{ flex: '1', fontWeight: 'bold' }}>
                        All Inquiry
                    </Grid>
                    <Grid item sx={{ marginLeft: 'auto' }}>
                        <TextField
                            id="search"
                            type="search"
                            label="Search by order"
                            value={searchTerm}
                            onChange={handleChange}
                            sx={{ width: 200, marginRight: '20px' }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="searchDate"
                            type="search"
                            label="Search for Date"
                            value={searchTerm}
                            onChange={handleChange}
                            sx={{ width: 200 }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <CalendarMonthIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            )}

        </Toolbar>
    );
}

export default function DashboardTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2, paddingTop: "16px" }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row?.id?.toString());
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.name)}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                            align="right"
                                        >
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="right">{row.date}</TableCell>
                                        <TableCell align="right">{row.customer}</TableCell>
                                        <TableCell align="right">{row.product}</TableCell>
                                        <TableCell align="right">{row.amount}</TableCell>
                                        <TableCell align="right">{row.status}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/*<TablePagination*/}
                {/*    rowsPerPageOptions={[5, 10, 25]}*/}
                {/*    component="div"*/}
                {/*    count={rows.length}*/}
                {/*    rowsPerPage={rowsPerPage}*/}
                {/*    page={page}*/}
                {/*    onPageChange={handleChangePage}*/}
                {/*    onRowsPerPageChange={handleChangeRowsPerPage}*/}
                {/*/>*/}
            </Paper>
        </Box>
    );
}