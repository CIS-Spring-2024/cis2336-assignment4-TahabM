const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/submit-order', (req, res) => {
  const formData = req.body;
  const { itemName, quantity } = req.body;
  const totalAmount = calculateTotalAmount(itemName, quantity);
  if (totalAmount === -1) {
    return res.status(400).send('Invalid quantity');
  }
  res.status(200).send(`Order submitted successfully. Total amount: $${totalAmount}`);
});

app.get('/order-confirmation', (req, res) => {
  res.sendFile(__dirname + '/order-confirmation.html');
});

function calculateTotalAmount(itemName, quantity) {
  if (parseInt(quantity) < 0 || parseInt(quantity) > 10) {
    return -1; 
  }
  const itemPrice = getItemPrice(itemName);
  return parseInt(quantity) * itemPrice;
}

function getItemPrice(itemName) {
  const itemPrices = {
    'Burger': 8.99,
    'Croissant': 3.49,
    'Muffin': 2.99,
    'Pizza': 10.99,
    'Salad': 7.99,
    'Hot Chocolate': 4.99,
    'Coffee': 2.49,
  };
  return itemPrices[itemName];
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
