
import {Grid, Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

function Carrosel() {
  var items = [
    {
      name: "Random Name #1",
      imageUrl: 'https://example.com/product1.jpg',
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      imageUrl: 'https://example.com/product1.jpg',
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      imageUrl: 'https://example.com/product1.jpg',
      description: "Hello UNIVERSE!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <Grid paddingX={2} maxWidth={'flex'} maxHeight={800} height={400}>
      <Paper>
        <h2>{props.item.name}</h2>
        <img src={props.item.imageUrl} alt="teste">
        </img>
        <p>{props.item.description}</p>
      </Paper>
    </Grid>
  );
}

export default Carrosel;
