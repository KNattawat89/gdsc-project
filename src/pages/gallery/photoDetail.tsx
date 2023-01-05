import { Box, Container, Grid, ImageList, ImageListItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../../components/CardDetail";
import Navbar from "../../components/Navbar";
import PhotoCard from "../../components/PhotoCard";

export function axiosGet() {
  return axios
    .get("http://server2.bsthun.com:4480/mock/gallery-detail.json")
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => console.log(err));
}

const PhotoDetail = () => {
  const params = useParams();
  const [data, setData] = useState<{
    albums: {
      name: string;
      photo_count: number;
      saved_count: number;
      date: string;
      cover_photo: string;
    };
    photo: { thumbnail_url: string; full_url: string; date: string }[];
  }>();
  const getData = async () => {
    const res = await axios.get(
      "http://server2.bsthun.com:4480/mock/gallery-detail.json"
    );
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <Navbar>
      <Container sx={{ marginTop: "3rem", width: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 2fr" },
            columnGap: { sm: "1rem" },
            rowGap: { xs: "1rem" },
          }}
        >
          <Box>
            {data ? (
              <CardDetail
                title={data?.albums?.name}
                date={data?.albums?.date}
                photoCount={data?.albums?.photo_count}
                savedPhoto={data?.albums?.saved_count}
              />
            ) : null}
          </Box>
          <Box>
            <Grid container justifyContent="center">
              <Grid item md={4}>
                <img
                  style={{ borderRadius: "1rem" }}
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

export default PhotoDetail;
