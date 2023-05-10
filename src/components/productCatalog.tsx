import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import Product from "./products";




function ProductCatalog() {

  const productsT1 = [
    Product(1, 'ProdutoT1 1', 'This is the first product', 'https://example.com/product1.jpg', 150),
    Product(2, 'ProdutoT1 2', 'This is the second product', 'https://example.com/product1.jpg', 120),
    Product(3, 'ProdutoT1 3', 'This is the third product', 'https://example.com/product1.jpg', 130),
    Product(4, 'ProdutoT1 4', 'This is the third product', 'https://example.com/product1.jpg', 100),
    Product(5, 'ProdutoT1 2', 'This is the third product', 'https://example.com/product1.jpg', 180),
    Product(6, 'ProdutoT1 6', 'This is the third product', 'https://example.com/product1.jpg', 190),
  ];
  const productsT2 = [
    Product(1, 'ProdutoT2 1', 'This is the first product', 'https://example.com/product1.jpg', 150),
    Product(2, 'ProdutoT2 2', 'This is the second product', 'https://example.com/product1.jpg', 120),
    Product(3, 'ProdutoT2 3', 'This is the third product', 'https://example.com/product1.jpg', 130),
    Product(4, 'ProdutoT2 4', 'This is the third product', 'https://example.com/product1.jpg', 100),
    Product(5, 'ProdutoT2 2', 'This is the third product', 'https://example.com/product1.jpg', 180),
    Product(6, 'ProdutoT2 6', 'This is the third product', 'https://example.com/product1.jpg', 190),

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
                image={product.imagem}
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
                image={product.imagem}
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
