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
  eventDate:string,
  img:string
}> = ({title,photoCount,eventDate,img}) => {
  const event = new Date(eventDate)
  const date = event.toLocaleString('default', { month: 'short' })+" "+event.getDate()+", "+event.getFullYear()
  

  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#5D7FD8", fontWeight: "bold"}}
          >
            {title}
          </Typography>
          <Typography variant="body2" >{photoCount} Photos</Typography>
          <Typography variant="body2" >{date}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PhotoCard;
