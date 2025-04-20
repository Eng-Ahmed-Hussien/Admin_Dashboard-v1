import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from '../../components/Header/Header';
import { rows, columns } from './data';


export default function Invoices() {

  return (
    <Box>
      <Header title="CONTACTS" subTitle="List of Contacts for Future Reference" />

      <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
        <DataGrid
          checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
}