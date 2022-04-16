import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

// import imagesData from './imagesData.json';

function Homepage() {
  return (
    <div>
      {/* {imagesData.map((image, i) => ( */}
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="../../../assets/images/auto/black_car.jpg"
            alt="Black Car"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Black Car
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stuff about the Black Car
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Purchase
          </Button>
        </CardActions>
      </Card>
      {/* ))} */}
    </div>
  );
}

export default Homepage;


{/* <a href="http://localhost:3000" key={i}>
          <div className="imageGrid">
            <img {...imagesData[i]} alt={imagesData[i].alt} width="25%" />
            <p>{image.category}</p>
          </div>
        </a> */}