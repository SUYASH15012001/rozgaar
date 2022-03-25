import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export function PieChart({ placed, notPlaced }) {
  let data = {
    labels: ["Placed", "Not Placed"],
    datasets: [
      {
        data: [placed || 120, notPlaced || 200],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(75, 192, 192, 0.7)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ position: "relative" }}>
      <Pie data={data} />
    </div>
  );
}
