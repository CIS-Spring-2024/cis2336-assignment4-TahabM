const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the cafeteria order form!');
});

app.post('/submit-order', (req, res) => {
  console.log(req.body); 
  res.send('Order submitted successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
