import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material'
import React from 'react'
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const CardDetail = () => {
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
          Lizard
        </Typography>
        <Typography variant="body2">123 Photos</Typography>
        <Typography variant="body2">Date</Typography>
        <Box sx={{display:"flex", marginTop:"1rem"}}>
            <TurnedInIcon sx={{color:"#637196"}}/>
            <Typography>18 Saved</Typography>
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CardDetail