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
      .get(`http://server2.bsthun.com:4480/mock/gallery-albums.json`)
      .then((res) => {
        if (res.data.success) {
          setData(res.data.data.albums);          
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
              to={`/gallery/albums/${el.name}`}
              style={{ textDecoration: "none" }}
            >
              <PhotoCard
                title={el.name}
                photoCount={el.photo_count}
                eventDate={el.date}
                img={el.cover_photo}
              />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Albums;
