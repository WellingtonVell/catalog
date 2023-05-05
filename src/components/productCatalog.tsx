import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

function ProductCatalog() {
  const productsT1 = [
    {
      id: 1,
      name: 'ProdutoT1 1',
      description: 'This is the first product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
    {
      id: 2,
      name: 'ProdutoT1 2',
      description: "This is the second product",
      imageUrl: "https://example.com/product1.jpg",
      preço: "20.00",
    },
    {
      id: 3,
      name: 'ProdutoT1 3',
      description: 'This is the thrid product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
    {
      id: 4,
      name: 'ProdutoT1 4',
      description: 'This is the first product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
    {
      id: 5,
      name: 'ProdutoT1 5',
      description: 'This is the first product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
    {
      id: 6,
      name: 'ProdutoT1 6',
      description: 'This is the first product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
  ];

  const productsT2 = [
    {
      id: 1,
      name: 'ProdutoT2 1',
      description: 'This is the first product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
    {
      id: 2,
      name: "ProdutoT2 2",
      description: "This is the second product",
      imageUrl: "https://example.com/product1.jpg",
      preço: "20.00",
    },
    {
      id: 3,
      name: 'ProdutoT2 3',
      description: 'This is the thrid product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
    {
      id: 4,
      name: 'ProdutoT2 4',
      description: 'This is the first product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
    {
      id: 5,
      name: 'ProdutoT2 5',
      description: 'This is the first product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
    {
      id: 6,
      name: 'ProdutoT2 6',
      description: 'This is the first product',
      imageUrl: 'https://example.com/product1.jpg',
      preço: "10.00",
    },
  ];

  return (
    <Box paddingTop={3}>
      <header style={{ backgroundColor: 'rgb(49, 199, 199)' }}>      <Typography variant="h4" noWrap sx={{ flexGrow: 1 }} color={'rgb(243, 245, 131)'} component="div" align='center' paddingY={2}> Óculos de Sol </Typography>
      </header>
      <Grid container spacing={2} paddingY={5} paddingX={2}>
        {productsT1.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                image={product.imageUrl}
                alt={product.name}
                height="200" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}  R$:{product.preço}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <header style={{ backgroundColor: 'rgb(49, 199, 199)' }}>     <Typography variant="h4" noWrap sx={{ flexGrow: 1 }} color={'rgb(243, 245, 131)'} component="div" align='center' paddingY={2}> Óculos de Grau </Typography>
      </header>
      <Grid container spacing={2} paddingY={5} paddingX={2}>
        {productsT2.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                image={product.imageUrl}
                alt={product.name}
                height="200" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}  R$:{product.preço}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductCatalog;
