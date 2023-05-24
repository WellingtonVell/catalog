const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'l01020304l',
  database: 'crudcatalogo',
});

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { description } = req.body;
  const { image } = req.body;
  const { price } = req.body;
  const { type } = req.body;

  let SQL = "INSERT INTO produtos ( name, description, image, price, type) VALUES (?, ?, ?, ?, ?)";

  db.query(SQL, [name, description, image,price,type], (err, result) => {
    console.log(err);
  });
});


app.get("/getProducts", (req, res) => {
  let SQL = "SELECT * FROM produtos";
  db.query(SQL, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => {
    console.log("Servidor API rodando na porta ");
  });