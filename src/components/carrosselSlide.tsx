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

import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

function Example() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
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
        <p>{props.item.description}</p>        
      </Paper>
    </Grid>
  );
}

export default Example;
