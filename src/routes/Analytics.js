import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
const state = {
  labels: ["Placed", "Unplaced"],
  datasets: [
    {
      label: "PlacementData",
      backgroundColor: ["#B21F00", "#C9DE00"],

      hoverBackgroundColor: ["#501800", "#4B5000"],
      data: [100, 200],
      radius: 200,
    },
  ],
};

export default function Analytics() {
  return (
    <>
      <h1>PieChart</h1>
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: "Placement Data",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </>
  );
}
