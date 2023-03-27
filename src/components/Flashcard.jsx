import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import azul from '../sounds/azul.mp3';

function Flashcard(props) {
  
  function play() {
    new Audio(azul).play()
  }

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Card sx={{ margin: 5, flexGrow: 1, bgcolor: "#95818d", maxWidth: "sm", maxHeight: "100%" }}>
          <CardContent>
              <Typography align="center" variant="h5" component="div">
              {props.name}
              </Typography>
              <img src={props.picture}></img>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
              </Typography>
              <Typography variant="body2">
              well meaning and kindly.
              <br></br>
              <br></br>
              <Button size="small" onClick={play}>Play Sound</Button>
              </Typography>
          </CardContent>
          <CardActions>
              <Button variant="contained" size="small">Answer</Button>
          </CardActions>
        </Card>
      </Box>
  )
}

export default Flashcard
