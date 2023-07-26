import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import React, { FC } from "react";
import TurnedInIcon from "@mui/icons-material/TurnedIn";

const CardDetail: FC<{
  title: string | undefined;
  photoCount: number | undefined;
  date: string | undefined;
}> = ({ title, photoCount, date }) => {
  let eventdate;
  if (date != undefined) {
    const event = new Date(date);
    eventdate =
      event.toLocaleString("default", { month: "short" }) +
      " " +
      event.getDate() +
      ", " +
      event.getFullYear();
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
          <Typography variant="body2">{eventdate}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardDetail;
