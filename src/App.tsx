import * as React from "react";
import Table from "./components/table";
import Chart from "./components/chart";
import { Grid, Container } from "@mui/material";
const App = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Chart />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Table />
        </Grid>
      </Grid>
    </Container>
  );
};
export default App;
