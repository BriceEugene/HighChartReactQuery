import React, { useState } from "react";
import { useQuery } from "react-query";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
function Example() {
  const { data } = useQuery(["repoData"], () =>
    fetch("https://www.ag-grid.com/example-assets/row-data.json").then((res) =>
      res.json()
    )
  );
  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact rowData={data} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}
export default function Table() {
  return (
    <div>
      <Example />
    </div>
  );
}
