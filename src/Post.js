import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Burger from './static/images/burger.png';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginBottom: 10,
  },
  media: {
    height: 140,
  },
});

const Post = (props) => {
  const classes = useStyles();
  
  return (
    <Container maxWidth="sm">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.profile}
            title="profile picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <strong>{props.nomer}. Name:</strong> {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Age: </strong>{props.age} years old            
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">            
              <strong>Salary:</strong> IDR {props.salary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => props.update(props.detail)}>
            Edit
          </Button>
          <Button size="small" color="primary" onClick={() => props.remove(props.id)} >
            Remove
          </Button>
        </CardActions>
      </Card>
      </Container>
  );
}

export default Post;