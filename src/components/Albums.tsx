import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Album } from "../types/albums";
import PhotoCard from "./PhotoCard";

const Albums = () => {
  const [data, setData] = useState<Album[]>([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/gallery/albums`, {withCredentials: true})
      .then((res) => {
        // let album_id = [res.data]
        // for (let i = 0; i < res.data; i++) {
        //   album_id[i] = res?.data[i]?.albums_id
          
        // }
        console.log(res);
        
        if (res.data.success) {
          setData(res.data.data);          
        }
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <Grid
      container
      spacing={2}
      textAlign="center"
      display={{ xs: "grid", sm: "flex" }}
      justifyContent="center"
    >
      {data.map((el) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={Math.random()}>
            <Link
              to={`/gallery/albums/photos?query=${el?.albums_id}`}
              style={{ textDecoration: "none" }}
            >
              <PhotoCard
                title={el?.name}
                photoCount={10}
                eventDate={el?.date}
                img={el?.cover_photo}
              />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Albums;
