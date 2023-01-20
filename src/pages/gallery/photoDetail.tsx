import { Box, Container, Grid, ImageList, ImageListItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../../components/CardDetail";
import FullImg from "../../components/FullImg";
import Navbar from "../../components/Navbar";
import PhotoCard from "../../components/PhotoCard";
import {
  AlbumForPhoto,
  DataForPhoto,
  Photo,
  SelectedPhoto,
} from "../../types/albums";

const PhotoDetail = () => {
  const params = useParams();
  const [data, setData] = useState<DataForPhoto>();
  const [albums, setAlbums] = useState<AlbumForPhoto>();
  const [photo, setPhoto] = useState<Photo[]>([]);

  const getData = async () => {
    const res = await axios.get(
      "http://server2.bsthun.com:4480/mock/gallery-detail.json"
    );
    setData(res.data.data);
    setAlbums(res.data.data.album);
    setPhoto(res.data.data.photos);
  };

  useEffect(() => {
    getData();
  }, []);

  const [selectedPhoto, setSelectedPhoto] = useState<SelectedPhoto>({
    thumbnail_url: null,
    full_url: null,
    date: null,
  });

  const onSelectPhoto = (photo: SelectedPhoto) => {
    setSelectedPhoto(photo);
  };
  const onClosePhoto = () => {
    setSelectedPhoto({ thumbnail_url: null, full_url: null, date: null });
  };

  let result = !Object.values(selectedPhoto).every((o) => o === null);

  let photoItem;
  // result check if selectPhoto is null or not -> if true = is not null
  if (result) {
    photoItem = (
      <FullImg onClosePhoto={onClosePhoto} selectPhoto={selectedPhoto} />
    );
  }

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
            {albums ? (
              <CardDetail
                title={albums?.name}
                date={albums?.date}
                photoCount={albums?.photo_count}
                savedPhoto={albums?.saved_count}
              />
            ) : null}
          </Box>
          <Box>
            <ImageList variant="masonry" cols={3} gap={8}>
              {photo?.map((photo) => {
                return (
                  <ImageListItem key={Math.random()}>
                    <img
                      src={`${photo.thumbnail_url}?w=500&fit=crop&auto=format`}
                      srcSet={`${photo.thumbnail_url}?w=500&fit=crop&auto=format&dpr=2 2x`}
                      alt={photo.date}
                      loading="lazy"
                      onClick={() => onSelectPhoto(photo)}
                      style={{ cursor: "pointer" }}
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
            {/* </Grid> */}
            {photoItem}
          </Box>
        </Box>
      </Container>
    </Navbar>
  );
};

export default PhotoDetail;
