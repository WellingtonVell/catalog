import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
/*import Product from "./products";*/


/*const productsList =[
Product({
    id: 1,
    name: "produto 1",
    description: "This is the first product",
    imagem: "https://example.com/product1.jpg",
    preço: "10.00",
  }),
Product({
    id: 2,
    name: "produto 2",
    description: "This is the second product",
    imagem: "https://example.com/product1.jpg",
    preço: "20.00",
})
];*/



function ProductCatalog() {  
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the first product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
    {
      id: 2,
      name: "produto 2",
      description: "This is the second product",
      imageUrl: "https://example.com/product1.jpg",
      preço: "20.00",
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the thrid product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is the first product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'This is the first product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'This is the first product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
  ];

  return (
    <Grid container spacing={2} paddingTop={5} paddingX={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              image={product.imageUrl}
              alt={product.name}
              height="200"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name} - R$:{product.preço}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductCatalog;
