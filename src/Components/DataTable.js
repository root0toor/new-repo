import { DataGrid } from "@mui/x-data-grid";
const columns = [
  {
    headerName: "Search Strings",
    field: "searchString",
    width: "200",
    sortable: false,
    headerClassName: "super-app-theme--header"
  },
  {
    headerName: "Keywords",
    field: "id",
    width: "200",
    sortable: false,
    headerClassName: "super-app-theme--header"
  },
  {
    headerName: "Synonyms",
    field: "synonyms",
    width: "200",
    sortable: false,
    headerClassName: "super-app-theme--header"
  }
];

const rows = [
  {
    id: "create",
    isFailedSearchKeyword: true,
    searchString: "regular strig",
    synonyms: "flow1"
  },
  {
    id: "create1",
    isFailedSearchKeyword: true,
    searchString: "regular strig2",
    synonyms: "NA"
  },
  {
    id: "create2",
    isFailedSearchKeyword: true,
    searchString: "regular strig3",
    synonyms: "NA"
  },
  {
    id: "create3",
    isFailedSearchKeyword: true,
    searchString: "regular strig4",
    synonyms: "flow2"
  },
  {
    id: "create4",
    isFailedSearchKeyword: true,
    searchString: "regular strig2",
    synonyms: null
  }
];

const handleRowClick = (event) => {
  console.log(event);
};

const DataTable = (props) => {
  const createRowsAndColumns = () => {};
  createRowsAndColumns();
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      // checkboxSelection
      onRowClick={handleRowClick}
    />
  );
};
export default DataTable;
