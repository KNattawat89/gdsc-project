import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Container, Grid, ImageList, ImageListItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { isClassExpression } from "typescript";
import CardDetail from "../../components/CardDetail";
import FullImg from "../../components/FullImg";
import Navbar from "../../components/Navbar";
import PhotoCard from "../../components/PhotoCard";
import loading from '../../animation/loading.json'
import errorPage from '../../animation/error.json'
import {
  Album,
  AlbumForPhoto,
  Data,
  DataForPhoto,
  Photo,
  SelectedPhoto,
} from "../../types/albums";

// const NUM_PER_PAGE = 15;
// const TOTAL_PAGES = 10;
const PhotoDetail = () => {
  // const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [photos, setphotos] = useState<Photo[]>([]);
  const [album, setalbum] = useState<Album>();
  const triggerRef = useRef<HTMLInputElement>(null);
  const [page, setpage] = useState(1);
  const [isAll, setIsAll] = useState(false);
  const [countPhoto, setcountPhoto] = useState(0);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(false);
  // const [isError, { on }] = u
  // const [isLoading, { off }] = useState(true)
  // const [TOTAL_PAGES, setTOTAL_PAGES] = useState(1);
  const photoPerPage = 50
  const getData = async () => {
    if (isAll) return;
    return await  axios
    .get(`http://localhost:8000/api/gallery/albums/photos?query=` + searchParams.get("query"), {withCredentials: true}).then(async(item) => {
      // console.log(item.data.photos.length);
      if (page * photoPerPage <= item.data.photos.length + photoPerPage) {
        const fetchPhoto = await item.data.photos.slice(photoPerPage * (page - 1),page * photoPerPage)
        setalbum(item.data.album.album)
        setcountPhoto(item.data.album.count)
        setphotos([...photos, ...fetchPhoto])
      }
      else{
        setIsAll(true)
        window.removeEventListener('scroll', onScroll)
      }
    }).catch((err) => setError(true))
    .finally(() => setisLoading(false))
    ;
  };

  const isFetching = useRef(false);

  useEffect(() => {
    console.log('name reredered!')
    getData().then(() => isFetching.current = false)
}, [page])

function onScroll(event: Event) {
    console.log("scroll", window.scrollY, document.body.scrollHeight - window.innerHeight);

    if (window.scrollY > document.body.scrollHeight - window.innerHeight - 80) {
        if (!isFetching.current) {
            console.log("Fetched");
            setpage(page => page + 1)
            isFetching.current = true;
        }
    }
}

useEffect(() => {
    const target = window;
    if (!target) return () => { };
    target.addEventListener('scroll', onScroll);
    return () => target.removeEventListener('scroll', onScroll);
}, []);

  const [selectedPhoto, setSelectedPhoto] = useState<SelectedPhoto>({
    image_base_url: null,
    count: null
  });

  const onSelectPhoto = (photo: SelectedPhoto) => {
    setSelectedPhoto(photo);
  };
  const onClosePhoto = () => {
    setSelectedPhoto({  image_base_url: null, count: null });
  };

  let result = !Object.values(selectedPhoto).every((o) => o === null);

  let photoItem;
  // result check if selectPhoto is null or not -> if true = is not null
  if (result) {
    photoItem = (
      <FullImg onClosePhoto={onClosePhoto} selectPhoto={selectedPhoto} photos={photos}/>
    );
  }

  // if (condition) {
    
  // }
  
  return (
    <>
   {(() => {
    if (error) {
      return(
        <Box width={"100vw"} height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Player 
          autoplay
          speed={1}
          loop
          src={errorPage}
          style={{height: "300px", width: "300px"}}
          >
          </Player>
          </Box>
      )
    }
    else if(isLoading) {
      return(
        <Box width={"100vw"} height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
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
    else{
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
              {album ? (
                <CardDetail
                  title={album.name}
                  date={album.date}
                  photoCount={countPhoto}
                />
              ) : null}
            </Box>
            <Box>
              <ImageList variant="masonry" cols={3} gap={8}>
                {photos.map((photo:Photo) => {
                 
                  
                  
                  console.log(countPhoto);
                  
                  const fullPhoto: SelectedPhoto = {
                    image_base_url: album?.image_base_url,
                    count: photo.photo_id - 1
                  }
              //  console.log(photo);
               
                  return (
                   
                    <ImageListItem key={Math.random()}>
                      <img
                        src={`${album?.thumbnail_base_url + "/" + photo.file_name}?w=500&fit=crop&auto=format`}
                        srcSet={`${album?.thumbnail_base_url + "/" + photo.file_name}?w=500&fit=crop&auto=format&dpr=2 2x`}
                        alt={album?.name}
                        loading="lazy"
                        onClick={() => onSelectPhoto(fullPhoto)}
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
      )
    }
   })()}
   
    {/* <div ref={triggerRef} className={clsx('trigger', {visible: loading})}>
      
    </div> */}
    </>
  );
};

export default PhotoDetail;
