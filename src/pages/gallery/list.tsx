import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Img from "./img/bg.png";
import axios from "axios";
import PhotoCard from "../../components/PhotoCard";
const List = () => {
  // remain mockup data
  return (
    <Navbar>
      <Box
        sx={{
          backgroundImage: `url(${Img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: { xs: "5rem 0rem", md: "8rem 0rem" },
        }}
      >
        <Container>
          <Stack color={"white"}>
            <Typography fontSize={"3rem"}>Gallery</Typography>
            <Typography>Google Student Developer Club</Typography>
            <Typography>
              King Mongkut’s University of Technology Thonburi
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Container sx={{padding:"3rem 0rem"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <PhotoCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PhotoCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PhotoCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PhotoCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PhotoCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PhotoCard />
          </Grid>
        </Grid>
      </Container>
    </Navbar>
  );
};

export default List;
