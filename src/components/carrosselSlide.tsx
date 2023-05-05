/*import React, { useState } from "react";
import Swipeable from "react-swipeable";

interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (delta: number) => {
    const nextIndex = currentIndex + delta;

    if (nextIndex < 0) {
      setCurrentIndex(items.length - 1);
    } else if (nextIndex >= items.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <Swipeable onSwipedLeft={() => handleSwipe(1)} onSwipedRight={() => handleSwipe(-1)}>
      <div className="carousel">
        {items.map((item, index) => (
          <div className={`carousel-item ${index === currentIndex ? "active" : ""}`} key={index}>
            {item}
          </div>
        ))}
      </div>
    </Swipeable>
  );
};
export default Carousel;*/

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
