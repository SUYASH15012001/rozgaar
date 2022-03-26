import { Container, Grid } from "@mui/material";
import React from "react";
import CollegeCard from "../components/CollegeCard";

const list = [
  {
    name: "ABES Engineering College",
    Phone: "+91-998877665",
    email: "abes@abes.ac.in",
    src: "abes.jpg",
  },
  {
    name: "AKG Engineering College",
    Phone: "+91-8988877665",
    email: "akg@akg.ac.in",
    src: "akg.png",
  },
  {
    name: "KIET Ghaziabad",
    Phone: "+91-998877875",
    email: "akg@akg.ac.in",
    src: "kiet.jpg",
  },
];
function CollegeLists() {
  return (
    <>
      <Container>
        <Grid container>
          {list.map((l) => (
            <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
              <CollegeCard {...l} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default CollegeLists;
