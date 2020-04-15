const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
const db = require('./db');

app.get('/', (req, res) => {
  res.send('ok');
});

// Get a product by id
app.get('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query(`SELECT * FROM products WHERE id = ?`, id);
    res.send(result);
  } catch(err) {
    res.status(500).send(err.message);
  }
});

// Get all products
app.get('/products', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM products');
    res.send(result);
  } catch(err) {
    res.status(500).send(err.message);
  }
});

// Create a new product
app.post('/product', async (req, res) => {
  const { name, remark, price } = req.body;
  
  try {
    const result = await db.query('INSERT INTO products(name, remark, price) VALUES(?, ?, ?)', [name, remark, price]);
    const { insertId } = result;
    res.send(insertId);
  } catch(err) {
    res.status(500).send(err.message);
  }
});

// Update a product
app.put('/product/:id', async (req, res) => {
  const { id } = req.params;
  const { name, remark, price } = req.body;
  try {
    const result = await db.query('UPDATE products SET name = ?, remark = ?, price = ? WHERE id = ?', [name, remark, price, id]);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete a product
app.delete('/product/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM products WHERE id = ?', id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => {
  console.log('app starts');
});
