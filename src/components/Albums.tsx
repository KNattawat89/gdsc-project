import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Container, Grid } from "@mui/material";
import axios from "../utils/axios";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Album } from "../types/albums";
import PhotoCard from "./PhotoCard";
import loading from '../animation/loading.json'
import error from '../animation/error.json'
const Albums = () => {
  const [data, setData] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`/gallery/albums`, {withCredentials: true})
      .then((res) => {
        
        if (res.data.success) {
          setData(res.data.data);          
        }
      })
      .catch((err) => setError(true))
      .finally(() => setIsLoading(false))
      
  }, []);
  
  return (
    <>
     {(() => {
      if (Error) {
        return(
          <Box paddingTop={"3rem"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Player 
            autoplay
            speed={1}
            loop
            src={error}
            style={{height: "300px", width: "300px"}}
            >
            </Player>
            </Box>
        )
      }
      else if (isLoading) {
        return(
          <Box paddingTop={"3rem"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Player 
            autoplay
            speed={1}
            loop
            src={loading}
            style={{height: "300px", width: "300px"}}
            >
            </Player>
            </Box>
        )
      }
      else {
        return (
          <Container sx={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <Grid
          container
          spacing={2}
          textAlign="center"
          display={{ xs: "grid", sm: "flex" }}
          justifyContent="center"
        >
          {data.map((el:Album) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={Math.random()}>
                <Link
                  to={`/gallery/albums/photos?query=${el?.albums_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <PhotoCard
                    title={el?.name}
                    photoCount={el.count}
                    eventDate={el?.date}
                    img={el?.cover_photo}
                  />
                </Link>
              </Grid>
            );
          })}
        </Grid>
        </Container>
        )
      }
      
    })()}
    </>
  );
};

export default Albums;
