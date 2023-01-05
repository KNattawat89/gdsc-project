import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import React, { FC } from "react";

const PhotoCard:FC<{
  title:string,
  photoCount:number,
  eventDate:string
}> = ({title,photoCount,eventDate}) => {
  const event = new Date(eventDate)
  const date = event.toLocaleString('default', { month: 'short' })+" "+event.getDate()+", "+event.getFullYear()
  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1671726805768-575f88de945a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#5D7FD8", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography variant="body2">{photoCount} Photos</Typography>
          <Typography variant="body2">{date}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PhotoCard;
