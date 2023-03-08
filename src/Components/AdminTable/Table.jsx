import * as React from 'react';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';

function createData(id, customers, contact, address) {
  return { id, customers, contact, address };
}

const rows = [
  createData("01", 'Komiljonov Ixtiyor', "(94)598-77-42", "Amir Temur xiyobini 12kv 14 dom"),
  createData("01", 'Komiljonov Ixtiyor', "(94)598 77 42", "Amir Temur xiyobini 12kv 14 dom"),
  createData("01", 'Komiljonov Ixtiyor', "(94)598 77 42", "Amir Temur xiyobini 12kv 14 dom"),
  createData("01", 'Komiljonov Ixtiyor', "(94)598 77 42", "Amir Temur xiyobini 12kv 14 dom"),
  createData("01", 'Komiljonov Ixtiyor', "(94)598 77 42", "Amir Temur xiyobini 12kv 14 dom"),
  createData("01", 'Komiljonov Ixtiyor', "(94)598 77 42", "Amir Temur xiyobini 12kv 14 dom"),
  createData("01", 'Komiljonov Ixtiyor', "(94)598 77 42", "Amir Temur xiyobini 12kv 14 dom"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Customers</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.customers}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}