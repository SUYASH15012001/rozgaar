import { Container, Grid, Typography, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PieChart } from "../components/PieChart";
// import { state } from "../global";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function CollegeDetails({ isSignedIn, state }) {
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
        <Grid item xs={12} sm={4}>
          {isSignedIn ? (
            <IconButton
              onClick={() => navigate("/add")}
              color="primary"
              size="small">
              <PersonAddIcon />
              &nbsp;Add Student
            </IconButton>
          ) : null}
        </Grid>
      </Grid>
      <Container>
        <Grid style={{ marginTop: 10 }} container spacing={10}>
          {state.branches.map((br) => (
            <Grid
              item
              onClick={() => navigate(`/detail/branch/${br.label}`)}
              xs={12}
              sm={4}>
              <PieChart placed={br.placed} notPlaced={br.notPlaced} pcolor={br.pcolor} scolor={br.scolor}
              bscolor={br.bscolor} bpcolor={br.bpcolor} />
              <Typography marginTop={2}> {br.label} Placements</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
