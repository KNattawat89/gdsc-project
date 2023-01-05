import { Box, Container, Grid, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import CardDetail from "../../components/CardDetail";
import Navbar from "../../components/Navbar";
import PhotoCard from "../../components/PhotoCard";

const photoDetail = () => {
  return (
    <Navbar>
      <Container sx={{ marginTop: "3rem", width: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {sm:"1fr 2fr"},
            columnGap: {sm:"1rem"},
            rowGap:{xs:"1rem"},
          }}
        >
          <Box>
            <CardDetail />
          </Box>
          <Box>
            <Grid container justifyContent="center">
              <Grid item md={4} >
                <img
                    style={{borderRadius:"1rem"}}
                  width="220"
                  src="https://images.unsplash.com/photo-1672680587729-79346d3a1857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                />
              </Grid>
              <Grid item md={4}>
                <img
                  width="220"
                  src="https://images.unsplash.com/photo-1672680587729-79346d3a1857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                />
              </Grid>
              <Grid item md={4}>
                <img
                  width="220"
                  src="https://images.unsplash.com/photo-1672680587729-79346d3a1857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                />
              </Grid>
            </Grid>

            <img
              width="180"
              src="https://images.unsplash.com/photo-1672680587729-79346d3a1857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            />
            <img
              width="180"
              src="https://images.unsplash.com/photo-1672680587729-79346d3a1857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            />
            <img
              width="180"
              src="https://images.unsplash.com/photo-1672680587729-79346d3a1857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            />
            <img
              width="180"
              src="https://images.unsplash.com/photo-1672680587729-79346d3a1857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            />
            <img
              width="320"
              src="https://images.unsplash.com/photo-1672843386042-ec530be0a5f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            /> 
          </Box>
        </Box>
      </Container>
    </Navbar>
  );
};

export default photoDetail;
