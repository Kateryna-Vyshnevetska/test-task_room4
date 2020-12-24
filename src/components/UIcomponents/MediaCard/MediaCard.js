import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import styles from './MediaCard.module.css'

export const MediaCard = ({name, artist, image}) => {

  return (
    <Card className={styles.container}>
      <CardActionArea className={styles.imgBlock}>
        <CardMedia
          className={styles.media}
          image={image[0]["#text"]}
          title={name}
        />
        <CardContent>
        <Link to={{pathname: `songs/${artist.name}`}}>
          <Typography gutterBottom variant="h5" component="h2">
            <p className={styles.link}>{name}</p>
          </Typography>
          </Link>
          <Typography variant="body2" color="black" component="p">
            {artist.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.btnBlock}>
          <a href={artist.url} target='blank'>
        <Button size="small" color="primary" className={styles.btn}>
          See the artist
        </Button>
          </a>
      </CardActions> 
    </Card>
  );
}
