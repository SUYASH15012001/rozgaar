import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export function PieChart({ placed, notPlaced,pcolor,scolor,bscolor,bpcolor}) {
  let data = {
    labels: ["Not Placed", "Placed"],
    datasets: [
      {
        data: [placed || 120, notPlaced || 200],
        backgroundColor: [pcolor||"rgba(250, 99, 132, 0.5)", scolor||"rgba(75, 192, 192, 0.7)"],
        borderColor: [bpcolor||"rgba(255, 99, 132, 1)", bscolor||"rgba(75, 192, 192, 1)"],
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
