import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Img from "./img/bg.png";
import axios from "axios";
import PhotoCard from "../../components/PhotoCard";
import Albums from "../../components/Albums";
const List = () => {
  
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
      <Container sx={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        {/* <Albums />    */}
        {/* doesn't set center for albums */}
      </Container>
    {/* <Button onClick={logout}>Signout</Button> */}
    </Navbar>
  );
};

export default List;
