import "./styles.css";
import React from "react";
import ReactTable from "react-table";
// import 'react-table/react-table.css';
// import { ReactTableDefaults } from "react-table";

export default function App1() {
  const columns = [
    {
      headerName: "Searched Keyword",
      field: "keyword"
    },
    {
      headerName: "Did Search Fail",
      field: "isFailedSearchKeyword"
    },
    {
      headerName: "Type Of User",
      field: "userType"
    },
    {
      headerName: "Does Similar Flow Exists",
      field: "existingFlowName"
    }
  ];
  const data = [
    {
      keyword: "create",
      isFailedSearchKeyword: true,
      userType: "regular user",
      existingFlowName: null
    },
    {
      keyword: "create",
      isFailedSearchKeyword: true,
      userType: "regular user",
      existingFlowName: null
    },
    {
      keyword: "create",
      isFailedSearchKeyword: true,
      userType: "regular user",
      existingFlowName: null
    },
    {
      keyword: "create",
      isFailedSearchKeyword: true,
      userType: "regular user",
      existingFlowName: null
    },
    {
      keyword: "create",
      isFailedSearchKeyword: true,
      userType: "regular user",
      existingFlowName: null
    }
  ];
  return (
    <div>
      <ReactTable
        // className="threatReportTable"
        data={data}
        columns={columns}
        getTrProps={(state, rowInfo, column) => {
          return {
            onClick: (e) => {
              console.log("inside");
            },
            // #393740 - Lighter, selected row
            // #302f36 - Darker, not selected row
            style: {
              background:
                this.state.selected.indexOf(rowInfo.index) !== -1
                  ? "#393740"
                  : "#302f36"
            }
          };
        }}
        noDataText="No available threats"
      />
    </div>
  );
}
