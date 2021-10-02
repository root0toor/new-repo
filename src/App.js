import * as React from "react";
import axios from "axios";
import side_whatfix from "./images/side_whatfix.png";
import top_whatfix from "./images/top_whatfix.svg";
import AreaChart from "./Components/AreaChart.js";
import DataTable from "./Components/DataTable.js";

const baseURL =
  "https://hackathonpublicdata.s3.ap-south-1.amazonaws.com/hackathon-hardcoded-data.json";

export default function App() {
  const fetchLoadData = () => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setJsonData(response.data);
    });
  };
  const [jsonData, setJsonData] = React.useState([]);
  fetchLoadData();
  return (
    <div>
      <img src={top_whatfix} alt="" style={{ width: "98.7vw" }}></img>
      <div style={{ display: "flex" }}>
        <img
          src={side_whatfix}
          alt=""
          style={{ height: "99vh", marginTop: "-5px" }}
        ></img>
        <div className="container">
          <div
            style={{
              height: 500,
              width: "50%",
              backgroundColor: "#fff",
              borderRadius: "5px"
            }}
          >
            <DataTable data={jsonData} />
          </div>
          <div className="column-container">
            <AreaChart />
          </div>
        </div>
      </div>
    </div>
  );
}
