import React from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart, ArcElement } from "chart.js";
import { PieChart } from "../components/PieChart";
// import { Row, Col } from "react-grid-system";
// import Grid from "react-bootstrap/Container";
// import Box from "@mui/material/Box";
// Chart.register(ArcElement);
// const state = {
//   labels: ["Placed", "Unplaced"],
//   datasets: [
//     {
//       label: "PlacementData",
//       backgroundColor: ["#B21F00", "#C9DE00"],

//       hoverBackgroundColor: ["#501800", "#4B5000"],
//       data: [80, 200],
//       radius: 200,
//     },
//   ],
// };

export default function CollegeDetails() {
  return (
    <>
      <PieChart />
      {/* <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={11} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Row>
            <Col sm={4}>
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
            </Col>
            <Col sm={4}>
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
            </Col>
            <Col sm={4}>
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
            </Col>
          </Row>

          <Row>
            <Col sm={4}>
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
            </Col>
            <Col sm={4}>
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
            </Col>
            <Col sm={4}>
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
            </Col>
          </Row>
        </Grid>
      </Box> */}
    </>
  );
}
