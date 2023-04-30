
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

function ProductCatalog() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the first product',
      imageUrl: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the second product',
      imageUrl: 'https://example.com/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the third product',
      imageUrl: 'https://example.com/product3.jpg',
    },    
    {
      id: 4,
      name: 'Product 4',
      description: 'This is the forth product',
      imageUrl: 'https://example.com/product3.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'This is the fifth product',
      imageUrl: 'https://example.com/product3.jpg',
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'This is the sixth product',
      imageUrl: 'https://example.com/product3.jpg',
    },
  ];

  return (
    <Grid container spacing={2} paddingX={2}>
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
                {product.name}
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