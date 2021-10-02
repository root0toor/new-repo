import Chart from "react-google-charts";

const AreaChart = () => {
  return (
    <Chart
      width={"500px"}
      height={"500px"}
      chartType="AreaChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Year", "Sales"],
        ["2013", 1000],
        ["2014", 1170],
        ["2015", 660],
        ["2016", 1030]
      ]}
      options={{
        title: "Company Performance",
        hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
        vAxis: { minValue: 0 },
        legend: { position: "bottom" },
        // For the legend to fit, we make the chart area smaller
        chartArea: { width: "80%", height: "70%" }
        // lineWidth: 25
      }}
      // For tests
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default AreaChart;
