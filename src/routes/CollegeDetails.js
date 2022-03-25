import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PieChart } from "../components/PieChart";
import { state } from "../global";

export default function CollegeDetails() {
  const navigate = useNavigate();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4} />
        <Grid
          item
          onClick={() => navigate(`/detail/branch/all`)}
          xs={12}
          sm={4}>
          <PieChart placed={state.tPlaced} notPlaced={state.tNonPlaced} />
          <Typography marginTop={2}>Overall College Placements</Typography>
        </Grid>
        <Grid item xs={12} sm={4} />
      </Grid>
      <Container>
        <Grid style={{ marginTop: 10 }} container spacing={10}>
          {state.branches.map((br) => (
            <Grid
              item
              onClick={() => navigate(`/detail/branch/${br.label}`)}
              xs={12}
              sm={4}>
              <PieChart placed={br.placed} notPlaced={br.notPlaced} />
              <Typography marginTop={2}> {br.label} Placements</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
